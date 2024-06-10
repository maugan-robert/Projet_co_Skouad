<script setup lang="ts">
import IconLoc from './icons/IconLoc.vue'
import IconStars from './icons/IconStars.vue'
</script>

<template>
  <div class="relative w-full h-[calc(100vh-90px)] overflow-hidden rounded-xl">
    <img class="absolute inset-0 object-cover w-full h-full" src="/img/ImageMatch.webp" alt="" />
    <div class="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
  </div>

  <div class="absolute bottom-0 mb-36 px-4 w-full">
    <div class="flex items-center gap-3 text-white">
      <h1 class="font-manrope font-bold text-3xl">Théo</h1>
      <p class="font-manrope text-xl pt-1.5">24 ans</p>
    </div>
    <div class="flex items-center gap-1">
      <IconLoc class="fill-teal-600 w-5 h-5" />
      <h2 class="text-teal-600 font-manrope text-lg">Montbéliard</h2>
    </div>

    <div class="flex items-center justify-between">
      <ul class="flex gap-4 text-white font-manrope text-base">
        <li>Fitness</li>
        <li>Vélo</li>
        <li>Snowboard</li>
        <li>Ski</li>
      </ul>
      <div class="flex items-center gap-1">
        <p class="font-manrope text-base text-white">4,7</p>
        <IconStars />
      </div>
    </div>
  </div>
</template>
