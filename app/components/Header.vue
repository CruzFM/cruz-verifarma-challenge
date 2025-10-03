<script setup lang="ts">
const searchQuery = ref("");
const route = useRoute();
const isScrolled = ref(false);

function onSearch() {
  const query = searchQuery.value.trim();
  if (query !== "" && query.length >= 3) {
    navigateTo(`/search/${encodeURIComponent(searchQuery.value.trim())}`);
  }
}

const { debouncedFn: debouncedOnSearch } = useDebounce(onSearch, 500);

function handleScroll(){
  isScrolled.value = window.scrollY > 50;
}

watch(
  () => route.path,
  () => {
    if(!route.name.includes("search")){
      searchQuery.value = "";
    }
  }
);

onMounted( () =>{
  window.addEventListener('scroll', handleScroll);
});

onUnmounted( ()=>{
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 flex w-full py-4 px-5 items-center transition-all duration-300"
    :class="isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'"
  >
    <NuxtLink to="/home" aria-label="Go to homepage">
      <img
        src="~/assets/images/veriflix-logo.svg"
        alt="Veriflix Logo"
        width="80"
      />
    </NuxtLink>

    <div class="flex items-center gap-1 ml-auto">
      
      <div class="relative">
        <label for="search-input" class="sr-only">
            Search movies and series
        </label>
        <input
          type="text"
          class="input text-sm w-48 md:w-64"
          name="search-input"
          placeholder="Search movie/series name..."
          v-model="searchQuery"
          @input="debouncedOnSearch"
        />
      </div>
    </div>
  </header>
</template>
