<script setup lang="ts">
import type { SportsResponse } from '@/pocketbase-types';
import IconUsers from './icons/IconUsers.vue'

import ImgPb from '@/components/ImgPb.vue';
const props = defineProps<SportsResponse<any>>();
    console.log('props : ',{...props});
</script>

<template>
    <div class="relative w-full">
      <ImgPb :record="props" :filename="Photo_illustration" class="rounded-lg"  alt=""/>
      <div class="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-60 flex px-2 py-1 rounded-b-md justify-between items-center ">
        <h1 class="text-white font-manrope text-sm">{{ Nom }}</h1>
        <div class="flex items-center justify-center">
          <p class="text-white font-manrope text-xs mr-1">{{ Nombre_inscris }}</p>
          <IconUsers class="w-3 h-5 fill-white"/>   
        </div>
      </div>
    </div>
  </template>   