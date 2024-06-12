<script setup lang="ts">
import IconTime from '@/components/icons/IconTime.vue';
import IconMoneyPremium from '@/components/icons/IconMoneyPremium.vue';
import IconMoney from '@/components/icons/IconMoney.vue';
import { ref } from 'vue';
import { infoDefis } from '@/backend'
import { useRoute } from 'vue-router/auto';
import { formatDate } from '@/helper'
import ImgPb from '@/components/ImgPb.vue';

const route = useRoute('/defis/[id]')
console.log('id :', route.params.id)
const defis = ref()
defis.value = await infoDefis(route.params.id)


import type { DefisResponse } from '@/pocketbase-types';
const bite:DefisResponse<any> = await infoDefis(route.params.id)
</script>

<template>
    <div pb-16>
        <ImgPb :record="bite" :filename="bite.img_full" class=""  alt="" />
        <div class="mx-4">
            <div class="pb-16">
                <div class="flex items-center justify-between">
            <h1 class="text-2xl font-manrope font-semibold py-3">{{ defis.Nom }}</h1>
            <div class="flex items-center gap-2">
                <div class="flex items-center gap-0.5">
                <p class="text-base font-semibold text-zinc-900">{{ defis.Monnaie_recompense_basique }}</p>
                <IconMoney />
            </div>
                <div class="flex items-center gap-0.5">
                <p class="text-base font-semibold text-zinc-900">{{ defis.Monnaie_recompense_premium }}</p>
                <IconMoneyPremium />
            </div>
            </div>
        </div>
        <p class="text-sm text-zinc-900 pb-4 font-medium font-manrope">{{ defis.description_defis }}</p>
            <div class="border-teal-600 border-2 rounded-lg flex items-center justify-center w-28 p-0.5">
                <p class="text-teal-600 text-sm font-normal">{{ defis.Sports }}</p>
            </div>
        <div class="bg-zinc-200 rounded-lg mt-2 flex items-center justify-center w-24   px-1">
                <IconTime class="w-6 h-6"/>
                <p class="p-1 text-sm font-medium text-zinc-900 font-niramit">{{ defis.Date_de_fin }}</p>
            </div>

            <div class="flex justify-center fixed bottom-0 mb-14 right-0 left-0 bg-white bg-opacity-95 p-4">
            <button class="bg-teal-600 text-white text-sm font-medium py-2 px-20 rounded-md">Participer</button>
            </div>
        </div>
    </div>
    </div>
</template>