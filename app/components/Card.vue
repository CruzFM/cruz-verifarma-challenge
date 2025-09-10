<script setup lang="ts">
interface Props {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
}
const props = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="`/details/${props.imdbID}`" class="block rounded-md">
    <div class="card bg-base-100 w-96 h-[500px] shadow-sm cursor-pointer hover:shadow-lg hover:shadow-gray-400 focus-within:shadow-lg transition-all duration-200"  :id="props.imdbID">
      <figure class="rounded-t-md">
        <img
          :src="props.Poster"
          :alt="`${props.Title} poster`"
          class="h-96 w-full object-cover"
        />
      </figure>
      <div class="card-body bg-[#2A2A2A] text-white rounded-b-md">
        <h3 class="card-title">{{ props.Title }}</h3>
        <div class="flex justify-between">
          <p>{{ props.Year }}</p>
          <p class="text-right">{{ props.Type }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
