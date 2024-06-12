<script setup lang="ts">
import IconUsers from '@/components/icons/IconUsers.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import CardEvents from '@/components/CardEvents.vue'
import CardDefis from '@/components/CardDefis.vue'
import ImgPb from '@/components/ImgPb.vue'
import { RouterLink } from 'vue-router'

import { infoSports, EventsbySports, DefisbySports } from '@/backend'
import { useRoute } from 'vue-router/auto'
import { ref } from 'vue'
const route = useRoute('/sports/[id]')
console.log('id :', route.params.id)

const sports = ref()
sports.value = await infoSports(route.params.id)
const events = ref()
events.value = await EventsbySports(route.params.id)
console.log(events.value)

const defis = ref()
defis.value = await DefisbySports(route.params.id)
console.log(defis.value)

import type { SportsResponse } from '@/pocketbase-types'
const bat: SportsResponse<any> = await infoSports(route.params.id)
</script>

<template>
  <div pb-16>
    <ImgPb :record="bat" :filename="bat.img_full" class="" alt="" />
    <div class="mx-4">
      <div class="pb-16">
        <div class="flex items-center justify-between gap-3">
          <h1 class="text-2xl font-manrope font-semibold py-3">{{ sports.Nom }}</h1>
          <div class="flex items-center gap-0.5">
            <p class="">{{ sports.Nombre_inscris }}</p>
            <IconUsers class="fill-black mt-0.5 w-3 h-5" />
          </div>
        </div>
        <RouterLink class="" to="/salon">
          <div class="bg-teal-600 text-white p-3 rounded-md flex items-center justify-between">
            <div>
              <h3 class="text-sm font-manrope">SALON DE DISCUSSION</h3>
              <p class="font-manrope text-sm">Échange avec les autres passionés</p>
              <p class="font-bold text-sm font-manrope">26 connectés</p>
            </div>
            <IconArrowLeft class="stroke-white" />
          </div>
        </RouterLink>
        <h2 class="font-lalezar text-xl pt-5">EVENTS</h2>
        <ul class="flex flex-col gap-3">
          <li v-for="Events of events" :key="Events.id">
            <RouterLink
              :to="{
                name: '/events/[id]',
                params: {
                  id: Events.id
                }
              }"
              class=""
            >
              <CardEvents v-bind="Events" />
            </RouterLink>
          </li>
          <li class="flex flex-col font-manrope text-base py-3 gap-2" v-if="events.length === 0">Aucun events n'est disponible, créer en un dès maintenant <RouterLink to="/create-event"><button class="bg-teal-600 text-sm font-medium text-white rounded-lg px-6 py-2.5 items-center flex justify-center">Créer</button></RouterLink></li>
        </ul>
        <h2 class="font-lalezar text-xl mt-4">DÉFIS</h2>
        <ul class="flex flex-col gap-3">
          <li v-for="Defis of defis" :key="Defis.id">
            <RouterLink
              :to="{
                name: '/defis/[id]',
                params: {
                  id: Defis.id
                }
              }"
              class=""
            >
              <CardDefis v-bind="Defis" />
            </RouterLink>
          </li>
          <li class="font-manrope text-base py-3" v-if="defis.length === 0">Aucun défi n'est disponible</li>
        </ul>
      </div>
    </div>
  </div>
</template>
