<script setup lang="ts">
import type { SearchResponse } from '@/types/Api';

definePageMeta({
  middleware: ['authenticated'],
})
const route = useRoute();

const currentPage = ref(1);

const apiUrl = computed(() => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

  const params = new URLSearchParams({
    s: route.params.value as string,
    page: currentPage.value.toString(),
  });

  return `${baseUrl}&${params.toString()}`;
});

const { data, pending, error, refresh } = await useFetch<SearchResponse>(
  apiUrl
);

const isLoadingMoreResults = ref(false);
const searchResults = ref(data.value?.Search || []);
const totalResults = ref(parseInt(data.value?.totalResults || '0'));
const totalPages = computed(() => Math.ceil(totalResults.value / 10));
const hasMoreResults = computed(() => currentPage.value < totalPages.value);

const loadMoreResults = async()=>{
    if (pending.value || !hasMoreResults.value || isLoadingMoreResults.value) return;
    const scrollBeforeLoad = window.scrollY;
    isLoadingMoreResults.value = true;
    currentPage.value += 1;
    try
    {
        const newData = await $fetch<SearchResponse>(apiUrl.value);
        if(newData?.Search && newData.Search.length > 0){
            searchResults.value = [...searchResults.value, ...newData.Search];
        }
            await nextTick();
            const newDocumentHeight = document.documentElement.scrollHeight;
            const heightIncrease = newDocumentHeight - (scrollBeforeLoad + window.innerHeight + 200);
            
            if (heightIncrease > 0) {
                window.scrollTo(0, scrollBeforeLoad + Math.min(heightIncrease / 2, 200));
            }
    } 
    catch(e)
    {
        console.error("Error loading more results:", e);
    }
    finally 
    {
        isLoadingMoreResults.value = false; 
    }
}

const handleScroll = async () => {
  if(isLoadingMoreResults.value) return;
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  if (scrollTop + windowHeight >= documentHeight - 200) {
    console.log("Loading more results...");
    await loadMoreResults();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <div v-if="pending && searchResults.length < 1" class="flex justify-center items-center min-h-screen">
      <div class="loading loading-spinner loading-lg"></div>
    </div>
    <div v-else-if="error" class="container mx-auto p-4">
      <div class="alert alert-error">
        <span>Error loading search results</span>
      </div>
    </div>
    <main v-else class="container mx-auto p-4 text-white">
        <h1 class="text-2xl font-bold mb-4">Search Results for "{{ $route.params.value }}"</h1>
        <div v-if="searchResults.length === 0" class="text-center">
            <p>No results found.</p>
        </div>
        <div v-else class="flex flex-wrap gap-4 justify-center">
            <Card v-for="result in searchResults" :key="result.imdbID" v-bind="result" />
        </div>
    </main>
</template>