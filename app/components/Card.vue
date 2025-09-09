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
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        :src="props.Poster"
        :alt="`${props.Title} poster`"
        class="h-96 w-full object-cover"
      />
    </figure>
    <div class="card-body bg-[#2A2A2A] text-white">
      <h3 class="card-title">{{ props.Title }}</h3>
      <div class="flex justify-between">
        <p>{{ props.Year }}</p>
        <p class="text-right">{{ props.Type }}</p>
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Details</button>
      </div>
    </div>
  </div>
</template>
