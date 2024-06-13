<script setup lang="ts">
import IconFav from './icons/IconFav.vue'
import IconMoney from './icons/IconMoney.vue'
import IconMoneyPremium from './icons/IconMoneyPremium.vue';
import IconTime from './icons/IconTime.vue'
import { ref } from 'vue';

import type { DefisResponse, DefisRecord } from '@/pocketbase-types';
import { defineProps } from 'vue';
import ImgPb from '@/components/ImgPb.vue';

const props = defineProps<DefisResponse<any>>();
    console.log('props : ',{...props});

    const sports = [
  'Course à pied', 'Vélo', 'VTT', 'Randonnée', 'Snowboard',
  'Karting', 'Ski', 'Paintball', 'Fitness', 'Natation', 'Escalade'
];


const favoris = ref(
  sports.reduce((acc, sport) => {
    acc[sport] = false;
    return acc;
  }, {})
);

function toggleFavori(sport) {
  favoris.value[sport] = !favoris.value[sport];
}
</script>

<template>
        <div class="flex items-center justify-between gap-2 shadow-md rounded-md p-3">
      <ImgPb :record="props" :filename="Image" class="rounded-lg w-24 h-24"  alt="" /> 
        <div class="flex-grow">
            <h1 class="text-lg font-bold font-manrope text-zinc-900 overflow-hidden relative">{{ Nom }}</h1>
            <p class="text-sm font-manrope font-semibold text-teal-600">{{ Sports }}</p>
            <div class="flex items-center gap-1 ">
            <div class="flex items-center">
                <p class="text-sm font-lexend font-medium text-zinc-900">{{ Monnaie_recompense_basique }}</p>
                <IconMoney class="" />
            </div>
            <div class="flex items-center">
                <p class="text-sm font-lexend font-medium text-zinc-900">{{ Monnaie_recompense_premium }}</p>
                <IconMoneyPremium />
            </div>
            </div>
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center w-24 px-1">
                <IconTime class="opacity-90 w-5 h-5"/>
                <p class="p-1 font-niramit text-sm font-medium text-zinc-900 ">{{ Date_de_fin }}</p>
            </div>
        </div>
        <IconFav
          @click="toggleFavori(sport)"
          :class="['w-6 h-6', { 'fill-black': favoris[sport], 'fill-none': !favoris[sport], 'stroke-black': !favoris[sport] }]"
        />
    </div>

</template>