<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})
</script>
<template>
    <div class="mx-auto sm:max-w-11/12 px-4 sm:px-6 lg:px-8 space-y-6 text-white pt-20">
      <Hero />
      <Main />
    </div>
</template>