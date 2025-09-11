<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['authenticated', 'redirect'],
})
</script>

<template>
  <div class="min-h-dvh bg-neutral text-white">Redirecting...</div>
</template>