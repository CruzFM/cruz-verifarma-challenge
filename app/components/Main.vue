<script setup lang="ts">
import { RECOMMENDATIONS } from "@/data/HomeRecommendations";
</script>

<template>
  <main class="w-full mx-auto mt-8">
    <HomeContent v-for="recom in RECOMMENDATIONS" :key="recom.title" v-bind="recom" />
  </main>
</template>
