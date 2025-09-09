<script setup lang="ts">

//This is meant to be replaced by a proper redirect in the server
//But for the sake of the challenge, I'm doing it here
const route = useRoute()

if (route.path === '/') {
  navigateTo('/home', { redirectCode: 301, replace: true })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />

  </NuxtLayout>
</template>