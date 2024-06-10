<script setup lang="ts">
import IconMessages from './icons/IconMessage.vue'
import IconMatch from './icons/IconMatch.vue'
import IconProfil from './icons/IconProfil.vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <main class="border-t-2 border-zinc-100 bg-white w-full z-20 fixed bottom-0">
    <div class="flex justify-around items-center w-full  px-4 py-2">
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/match' }">
        <RouterLink to="/match">
          <IconMatch class="stroke-current w-6 h-6"  />
        </RouterLink>
        <p class="text-xs">Match</p>
      </div>
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/messages' }">
        <RouterLink to="/messages">
          <IconMessages class="stroke-current w-6 h-6"  />
        </RouterLink>
        <p class="text-xs">Messages</p>
      </div>
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/profil' }">
        <RouterLink to="/profil">
          <IconProfil class="stroke-current w-6 h-6"  />
        </RouterLink>
        <p class="text-xs">Profil</p>
      </div>
    </div>
</main>
  </template>