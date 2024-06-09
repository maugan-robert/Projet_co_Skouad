<script setup lang="ts">
import IconUsers from './icons/IconUsers.vue'

</script>

<template>
    <div class="relative w-full">
      <img class="w-full object-cover rounded-md" src="/img/SkiBase.webp" alt="Ski">
      <div class="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-40 flex px-2 py-1 rounded-b-md justify-between items-center z-10">
        <h1 class="text-white font-medium text-base">Ski</h1>
        <div class="flex items-center">
          <p class="text-white font-semibold text-sm mr-1">436</p>
          <IconUsers class="w-3 h-5 pt-0.5 text-white"/>   
        </div>
      </div>
    </div>
  </template>   