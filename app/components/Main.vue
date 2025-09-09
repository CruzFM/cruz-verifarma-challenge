<script setup lang="ts">
import { RECOMMENDATIONS } from "@/data/HomeRecommendations";
</script>

<template>
  <main class="container mx-auto px-4 mt-8">
    <HomeContent v-for="recom in RECOMMENDATIONS" :key="recom.title" v-bind="recom" />
  </main>
</template>
