<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import IconLoc from './icons/IconLoc.vue'
import IconStars from './icons/IconStars.vue'
import IconBackMatch from './icons/IconBackMatch.vue'
import IconXMatch from './icons/IconXMatch.vue'
import IconVMatch from './icons/IconVMatch.vue'

onMounted(() => {
  document.body.classList.add('overflow-hidden');
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});
</script>

<template>
    <div class="overflow-hidden">
  <div class="relative w-full h-[calc(100vh-90px)] overflow-hidden rounded-xl">
    <img class="absolute inset-0 object-cover w-full h-full" src="/img/ImageMatch.webp" alt="" />
    <div class="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
  </div>

  <div class="absolute bottom-0 mb-20 px-4 w-full">
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
    <div class="grid grid-cols-3 items-center pt-7">
    <IconBackMatch class="w-10 h-10"/>
    <div class="flex justify-self-center items-center gap-2">
        <IconXMatch class="w-14 h-14"/>
        <IconVMatch class="w-14 h-14"/>
    </div>
</div>
  </div>
</div>
</template>
