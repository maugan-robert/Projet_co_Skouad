<script setup lang="ts">
import IconLoc from './icons/IconLoc.vue'
import IconFav from './icons/IconFav.vue'
import { formatDate } from '@/helper'
import { defineProps } from 'vue';
import type { EventsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';

const props = defineProps<EventsResponse<any>>();
console.log('props : ',{...props});
</script>

<template>
    <div class="flex items-center justify-between gap-3 shadow-md rounded-md p-3">
        <ImgPb :record="props" :filename="Image" class="rounded-lg w-24 h-24"  alt="" />
        <div class="flex-grow">
            <h1 class="text-lg font-manrope font-bold text-zinc-900 overflow-hidden relative">{{ Nom }}</h1>
            <div class="flex items-center justify-start">
                <IconLoc class="w-4 h-4 fill-zinc-600" />
                <p class="text-sm font-manrope font-semibold text-zinc-600">{{ Localisation }}</p>
            </div>
            <p class="text-sm font-manrope font-semibold text-teal-600 pb-1">{{ Categorie }}</p>
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center w-20 px-1">
                <p class="p-1 font-niramit text-sm font-medium text-zinc-900 ">{{ formatDate(Date_Events) }}</p>
            </div>
        </div>
        <div>
        <IconFav class= "fill-black" />
    </div>
    </div>
</template>
