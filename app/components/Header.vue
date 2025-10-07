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
        <label class="input text-sm w-48 md:w-64">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" @input="debouncedOnSearch" v-model="searchQuery" />
        </label>
      </div>
    </div>
  </header>
</template>
