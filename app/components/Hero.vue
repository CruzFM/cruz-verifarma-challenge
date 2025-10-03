<script setup lang="ts">
const searchQuery = ref("");

function onSearch() {
  const query = searchQuery.value.trim();
  if (query !== "" && query.length >= 3) {
    navigateTo(`/search/${encodeURIComponent(query)}`);
  }
}
</script>

<template>
  <div class="-mx-4 sm:-mx-6 lg:-mx-8 mb-8">
    <div class="hero min-h-[85vh] bg-gradient-to-b from-black to-neutral rounded-2xl overflow-hidden relative">
      <!-- Gradient overlays with your brand colors -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(1,204,144,0.12)_0%,transparent_50%)] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(40,163,202,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div class="hero-content text-center">
        <div class="max-w-3xl space-y-6">
          <!-- Badge -->
          <div>
            <span class="badge badge-lg bg-[#01CC90]/10 border-[#01CC90]/30 text-[#01CC90] font-semibold uppercase tracking-wider">
                Discover & Watch
            </span>
          </div>
          
          <!-- Title with brand gradient -->
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#01CC90] to-[#28A3CA] bg-clip-text text-transparent">
            Veriflix video club
          </h1>
          
          <!-- Description -->
          <p class="text-base md:text-lg text-white/70 leading-relaxed">
            Discover thousands of movies and series. Find detailed information, 
            ratings, cast details, and everything you need to know about your favorite titles.
          </p>
          
          <!-- Search -->
          <div class="max-w-xl mx-auto">
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Search for movies, series..."
                class="input input-lg w-full py-3 bg-white/95 text-black placeholder:text-black/50 flex-1 shadow-xl border-0"
                v-model="searchQuery"
                @keypress.enter="onSearch"
              />
              <button 
                @click="onSearch"
                class="btn btn-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>