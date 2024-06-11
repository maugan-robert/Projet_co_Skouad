<script setup lang="ts">
import IconFav from './icons/IconFav.vue'
import IconMoney from './icons/IconMoney.vue'
import IconMoneyPremium from './icons/IconMoneyPremium.vue';
import IconTime from './icons/IconTime.vue'
import type { DefisResponse } from '@/pocketbase-types';

import ImgPb from '@/components/ImgPb.vue';
const props = defineProps<DefisResponse<any>>();
    console.log('props : ',{...props});

import { formatDate } from '@/helper'
</script>

<template>
        <div class="flex items-center justify-between gap-2 shadow-md rounded-md p-3">
            <ImgPb :record="props" :filename="Image" class="rounded-t-lg w-20 h-20"  alt="" />
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
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center w-20 px-1">
                <IconTime class="opacity-90 w-4 h-4"/>
                <p class="p-1 text-xs font-manrope text-zinc-900 ">{{ formatDate(Date_de_fin) }}</p>
            </div>
        </div>
        <IconFav class="fill-transparent" />
    </div>

</template>