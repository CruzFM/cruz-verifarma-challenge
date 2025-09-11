<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})
onMounted(()=>{
    navigateTo('/home')
})
</script>

<template>

</template>