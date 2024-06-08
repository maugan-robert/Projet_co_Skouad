<script setup lang="ts">
import IconLoc from './icons/IconLoc.vue'
import IconFav from './icons/IconFav.vue'
</script>

<template>
    <div class="flex items-center justify-between gap-3 shadow-md rounded-md p-3">
        <img class="w-24 h-24 rounded-md" src="/img/FitnessBase.webp" alt="">
        <div class="flex-grow">
            <h1 class="text-lg font-bold text-zinc-900 overflow-hidden relative z-10">Séance sport chill</h1>
            <div class="flex items-center justify-start">
                <IconLoc class="w-4 h-4" />
                <p class="text-base font-medium text-zinc-600">Montbéliard</p>
            </div>
            <p class="text-base font-semibold text-teal-600 pb-1">Fitness</p>
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center w-28 px-1">
                <p class="p-1 text-sm font-medium text-zinc-900 ">Sam. 16 mars</p>
            </div>
        </div>
        <IconFav class="fill-black"/>
    </div>
</template>
