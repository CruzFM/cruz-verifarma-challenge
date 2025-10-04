<script setup lang="ts">
import type { SearchByIdResponse } from "@/types/Api";

definePageMeta({
  middleware: ['authenticated'],
});

const route = useRoute();

const apiUrl = computed(() => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

  const params = new URLSearchParams({
    i: route.params.id as string,
    plot: "full",
  });

  return `${baseUrl}&${params.toString()}`;
});

const { data, pending, error, refresh } = await useFetch<SearchByIdResponse>(
  apiUrl
);

const item = ref(data.value);
</script>

<template>
  <div v-if="pending" class="flex justify-center items-center min-h-screen pt-20">
    <div class="loading loading-spinner loading-lg"></div>
  </div>
  <div v-else-if="error" class="container mx-auto p-4">
    <div class="alert alert-error">
      <span>Error loading movie details</span>
    </div>
  </div>
  <main v-else class="container mx-auto p-4 text-white pt-20 min-h-dvh">
    <nav class="mb-6">
      <button @click="$router.back()" class="btn btn-ghost gap-2">
        ← Back
      </button>
    </nav>

    <article class="card shadow-xl">
      <div class="card-body p-8">
        <div class="grid md:grid-cols-3 gap-8">
          <aside class="md:col-span-1">
            <figure class="aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
              <img
                :src="item?.Poster"
                :alt="`${item?.Title} poster`"
                class="w-full h-full object-cover"
              />
            </figure>
          </aside>

          <section class="md:col-span-2 space-y-6">
            <header>
              <h1 class="text-4xl font-bold mb-2">{{ item?.Title }}</h1>
              <div class="mb-4">
                <p class="leading-relaxed opacity-90 text-base">{{ item?.Plot }}</p>
              </div>
              <div class="flex flex-wrap gap-4 text-sm opacity-80 mb-4">
                <span class="badge badge-primary"
                  >{{ item?.imdbRating }}/10</span
                >
                <span>{{ item?.Year }}</span>
                <span>{{ item?.Runtime }}</span>
                <span>{{ item?.Rated }}</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="genre in item?.Genre?.split(', ')"
                  :key="genre"
                  class="badge badge-outline"
                >
                  {{ genre }}
                </span>
              </div>
            </header>

            <div class="grid sm:grid-cols-2 gap-6">
              <section aria-labelledby="cast-crew-heading">
                <h2 id="cast-crew-heading" class="sr-only">Cast and Crew</h2>
                <dl class="space-y-2 text-sm">
                  <div>
                    <dt class="opacity-60 inline">Director:</dt>
                    <dd class="inline ml-1">{{ item?.Director }}</dd>
                  </div>
                  <div>
                    <dt class="opacity-60 inline">Actors:</dt>
                    <dd class="inline ml-1">{{ item?.Actors }}</dd>
                  </div>
                </dl>
              </section>

              <section aria-labelledby="additional-info-heading">
                <h2 id="additional-info-heading" class="sr-only">
                  Additional Information
                </h2>
                <dl class="space-y-2 text-sm">
                  <div v-if="item?.Awards && item.Awards !== 'N/A'">
                    <dt class="opacity-60 inline">Awards:</dt>
                    <dd class="inline ml-1">{{ item.Awards }}</dd>
                  </div>
                  <div v-if="item?.BoxOffice && item.BoxOffice !== 'N/A'">
                    <dt class="opacity-60 inline">Box Office:</dt>
                    <dd class="inline ml-1">{{ item.BoxOffice }}</dd>
                  </div>
                  <div v-if="item?.Production && item.Production !== 'N/A'">
                    <dt class="opacity-60 inline">Production:</dt>
                    <dd class="inline ml-1">{{ item.Production }}</dd>
                  </div>
                </dl>
              </section>
            </div>
          </section>
        </div>
      </div>
    </article>
  </main>
</template>
