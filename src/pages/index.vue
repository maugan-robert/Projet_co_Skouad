<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardEvents from '@/components/CardEvents.vue'
import CardSport from '@/components/CardSport.vue'
import CardDefis from '@/components/CardDefis.vue'
</script>

<template>
  <div class="bg-zinc-50">
    <div class="mx-4">
      <div class="flex items-center justify-between">
        <h2 class="py-4 font-lexend text-base font-bold text-zinc-900">TES PROCHAINS EVENTS</h2>
        <RouterLink
          class="underline font-manrope text-teal-600 font-semibold text-sm ml-auto"
          to="/events"
          ><p>Voir autres</p></RouterLink
        >
      </div>
      <div class="flex flex-col justify-center gap-2">
      </div>
      <div class="flex items-center justify-between">
        <h2 class="py-4 font-lexend text-base font-bold text-zinc-900">TES SPORTS</h2>
        <RouterLink
          class="underline font-manrope text-teal-600 font-semibold text-sm ml-auto"
          to="/sports"
          ><p>Voir autres</p></RouterLink
        >
      </div>
      <div class="container">
        <div class="container">
          <div class="grid grid-cols-2 gap-2">
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <h2 class="py-4 font-lexend text-base font-bold text-zinc-900">DÉFIS SUGGÉRÉS</h2>
        <RouterLink
          class="underline font-manrope text-teal-600 font-semibold text-sm ml-auto"
          to="/defis"
          ><p>Voir autres</p></RouterLink
        >
      </div>
      <div class="pb-16">
      </div>
    </div>
  </div>
</template>
