<script setup lang="ts">
const searchQuery = ref("");

function onSearch() {
  const query = searchQuery.value.trim();
  if (query === "") {
    navigateTo("/home");
    return;
  }
  if (query !== "" && query.length >= 3) {
    navigateTo(`/search/${encodeURIComponent(searchQuery.value.trim())}`);
  }
}

const { debouncedFn: debouncedOnSearch } = useDebounce(onSearch, 500);
</script>

<template>
  <header class="flex w-full py-2 px-5 items-center border-b border-[#2A2A2A]">
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

      <!-- This is just a placeholder, if I have time for creating an API, i'll implement it, otherwise it'll be deleted. -->
      <div class="rounded-full border border-black p-2 py-3 text-white">
        User
      </div>
    </div>
  </header>
</template>
