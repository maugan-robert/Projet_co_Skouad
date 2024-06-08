<script setup lang="ts">
import IconLoc from './icons/IconLoc.vue'
import IconFav from './icons/IconFav.vue'
</script>

<template>
    <div class="flex items-center justify-between gap-3 shadow-md rounded-md p-3">
        <img class="w-28 h-28 rounded-md" src="/img/FitnessBase.webp" alt="">
        <div class="flex-grow">
            <h1 class="text-lg font-bold text-zinc-900 overflow-hidden relative z-10">Séance sport chill</h1>
            <div class="flex items-center">
                <IconLoc />
                <p class="text-base font-medium text-zinc-600">Montbéliard</p>
            </div>
            <p class="text-base font-semibold text-teal-600 pb-1">Fitness</p>
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center mr-12 px-1">
                <p class="p-1 text-base font-medium text-zinc-900 ">Sam. 16 mars</p>
            </div>
        </div>
        <IconFav />
    </div>
</template>
