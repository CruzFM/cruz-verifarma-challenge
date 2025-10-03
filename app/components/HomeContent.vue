<script setup lang="ts">
import type { SearchResponse } from "@/types/Api";

//Define props for the instantiation of this component in Main
interface Props {
  title: string;
  searchQuery: string;
  type?: "movie" | "series";
  year?: string;
}

//Set defaults value for the type, so if it's not provided, it will search for movies
const props = withDefaults(defineProps<Props>(), {
  type: "movie",
});

// Construction of the API URL using the props given during the instantiation and the api key on .env
const apiUrl = computed(() => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

  const params = new URLSearchParams({
    s: `"${props.searchQuery}"`,
    type: props.type,
    page: "1",
  });

  if (props.year) {
    params.append("y", props.year);
  }

  return `${baseUrl}&${params.toString()}`;
});

const { data, pending, error, refresh } = await useFetch<SearchResponse>(apiUrl);

// Store the movies in a ref() reactive variable
const movies = ref(data.value?.Search || []);

</script>

<template>
  <section class="flex items-center my-7">
    <h2 class="text-4xl">{{ props.title}}</h2>
    <NuxtLink :to="`/search/${props.searchQuery}`" class="link ml-auto">
      View more
    </NuxtLink>
  </section>
  <section v-if="pending" class="loading loading-spinner"></section>
  <section v-else-if="error" class="alert alert-error">Error loading movies</section>
  <section v-else class="movies-grid ">
    <Card v-for="movie in movies" :key="movie.imdbID" v-bind="movie" />
  </section>
</template>
<style scoped>
.movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}
</style>
