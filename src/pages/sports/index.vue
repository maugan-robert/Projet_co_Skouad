<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardSport from '@/components/CardSport.vue'
import { ref } from 'vue'
const rechercher = ref('')
import IconSearch from '@/components/icons/IconSearch.vue'

import { pb } from '@/backend'
const sportsListe = await pb.collection('Sports').getFullList(); 
</script>

<template>
  <div class="mx-4">
    <h2 class="pt-4 pb-2 font-lalezar text-2xl font-bold text-zinc-900">TOUS LES SPORTS</h2>
    <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-4 grow mb-4">
      <IconSearch class="w-6 h-6" />
      <input
        class="text-zinc-500 px-1 py-2 placeholder-zinc-500 w-full"
        type="text"
        id="name"
        v-model="rechercher"
        placeholder="Rechercher"
        required
      />
    </div>
        <ul class="container grid grid-cols-2 gap-2 pb-20">
          <li v-for="Sports of sportsListe" :key="Sports.id">
            <RouterLink
              :to="{
                name: '/sports/[id]',
                params: {
                  id: Sports.id
                }
              }"
            >
              <CardSport v-bind="Sports" />
            </RouterLink>
          </li>
        </ul>
    </div>
</template>
