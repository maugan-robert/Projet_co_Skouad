<script setup lang="ts">
import IconUsers from '@/components/icons/IconUsers.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import CardEvents from '@/components/CardEvents.vue';
import CardDefis from '@/components/CardDefis.vue';
</script>

<template>
    <div pb-16> 
        <img src="/img/SkiBase.webp" alt="">
        <div class="mx-4">
            <div class="pb-16">
            <div class="flex items-center justify-between gap-3">
            <h1 class="text-2xl font-manrope font-semibold py-3">Ski</h1>
            <div class="flex items-center gap-0.5">
                <p class="">436</p>
                <IconUsers class="fill-black mt-0.5 w-3 h-5"/>
            </div>
        </div>
        <RouterLink class="" to="/salon">
            <div class="bg-teal-600 text-white p-3 rounded-md flex items-center justify-between">
                <div>
                <h3 class="text-sm font-manrope">SALON DE DISCUSSION</h3>
                <p class="font-manrope text-sm">Échange avec les autres passionés</p>
                <p class="font-bold text-sm font-manrope">26 connectés</p>
            </div>
            <IconArrowLeft class="stroke-white"/>
        </div>
            </RouterLink>   
                <h2 class="font-lalezar text-xl pt-5">EVENTS</h2>

                <h2 class="font-lalezar text-xl mt-4">DÉFIS</h2>
        </div>
        </div>
    </div>
</template>