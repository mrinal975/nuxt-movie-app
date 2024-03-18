<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt movie app</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input
        v-model="searchTerm"
        type="text"
        class="border-2 border-gray-300 p-2"
      />
    </div>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-10"
  >
    <div v-for="movie in data?.results">
      {{ movie.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { APIResponse } from "~/types/APIResponse";
const searchTerm = ref("");
const url = computed(() => {
  return `api/movies/search?query=${searchTerm.value}`;
});
const { data } = await useFetch<APIResponse>(url);
console.log("data", data);
</script>
