<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardEvents from '@/components/CardEvents.vue'
import CardSport from '@/components/CardSport.vue'
import CardDefis from '@/components/CardDefis.vue'
import { allEventsFavori } from '@/backend'
import { allSportsFavori } from '@/backend'
import { allDefisUnfavori } from '@/backend'

const eventsFavoris = await allEventsFavori()
const sportsFavoris = await allSportsFavori()
const defisUnfavoris = await allDefisUnfavori()
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
        <ul>
  <li v-for="Events of eventsFavoris" :key="Events.id">
    <RouterLink
      :to="{
        name: '/events/[id]',
        params: {
          id: Events.id
        }
      }"
      class=""
    >
    
      <CardEvents v-bind="Events"/>
    </RouterLink>
  </li>
</ul>
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
            <ul class="grid grid-cols-2 gap-2">
  <li v-for="Sports of sportsFavoris" :key="Sports.id">
    <RouterLink
      :to="{
        name: '/sports/[id]',
        params: {
          id: Sports.id
        }
      }"
      class=""
    >
      <CardSport v-bind="Sports"/>
    </RouterLink>
  </li>
</ul>
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
      <div class="flex flex-col justify-center gap-2 pb-20">
        <ul>
  <li v-for="Defis of defisUnfavoris" :key="Defis.id">
    <RouterLink
      :to="{
        name: '/defis/[id]',
        params: {
          id: Defis.id
        }
      }"
      class=""
    >
    
      <CardDefis v-bind="Defis"/>
    </RouterLink>
  </li>
</ul>
      </div>
    </div>
  </div>
</template>
