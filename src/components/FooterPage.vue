<script setup lang="ts">
import IconEvents from './icons/IconEvents.vue'
import IconDefis from './icons/IconDefis.vue'
import IconMessages from './icons/IconMessage.vue'
import IconMatch from './icons/IconMatch.vue'
import IconProfil from './icons/IconProfil.vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <main class="border-t-2 border-zinc-100 bg-white w-full z-20 fixed bottom-0">
    <div class="flex justify-around items-center w-full  py-4">
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/events' }">
        <RouterLink to="/events">
          <IconEvents class="stroke-current"/>
        </RouterLink>
        <p class="text-sm font-semibold">Events</p>
      </div>
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/defis' }">
        <RouterLink to="/defis">
          <IconDefis class="stroke-current" />
        </RouterLink>
        <p class="text-sm font-semibold">Defis</p>
      </div>
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/match' }">
        <RouterLink to="/match">
          <IconMatch class="stroke-current"  />
        </RouterLink>
        <p class="text-sm font-semibold">Match</p>
      </div>
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/messages' }">
        <RouterLink to="/messages">
          <IconMessages class="stroke-current"  />
        </RouterLink>
        <p class="text-sm font-semibold">Messages</p>
      </div>
      <div class="flex flex-col items-center" :class="{ 'text-teal-600': $route.path === '/profil' }">
        <RouterLink to="/profil">
          <IconProfil class="stroke-current"  />
        </RouterLink>
        <p class="text-sm font-semibold">Profil</p>
      </div>
    </div>
</main>
  </template>