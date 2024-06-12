<script setup lang="ts">    
import IconStars from '@/components/icons/IconStars.vue';
</script>

<template>
    <div class="mx-4">
        <div class="flex items-center justify-between">
            <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">NOTE ET AVIS</h1>
            <div class="flex items-center gap-2">
            <div class="flex items-center">
                <p class="font-manrope text-lg font-bold">4</p>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
            </div>
            <p class="font-manrope text-base">2 avis</p>
        </div>
        </div>

        <div class="p-3 shadow-md rounded-md mt-2">
            <div class="flex items-center gap-3">
                <img class="w-9 h-9" src="/img/IconeUser4.webp" alt="">
                <h2 class="font-manrope text-lg font-bold">Sylvain Detrimo</h2>
            </div>
            <div class="flex items-center gap-4">
            <div class="flex items-center gap-0.5 pt-3">
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-zinc-400"/>
            </div>
            <p class="pt-3 font-manrope text-sm text-zinc-500">14 fév. 2024</p>
        </div>
        <p class="font-manrope text-sm text-zinc-900 py-3">Très sympa et agréable !</p>
        </div>
        <div class="p-3 shadow-md rounded-md mt-2">
            <div class="flex items-center gap-3">
                <img class="w-9 h-9" src="/img/IconeUser2.webp" alt="">
                <h2 class="font-manrope text-lg font-bold">Alex Caca</h2>
            </div>
            <div class="flex items-center gap-4">
            <div class="flex items-center gap-0.5 pt-3">
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-yellow-400"/>
                <IconStars class="w-4 h-4 fill-zinc-400"/>
            </div>
            <p class="pt-3 font-manrope text-sm text-zinc-500">2 juin 2024</p>
        </div>
        <p class="font-manrope text-sm text-zinc-900 py-3">Personne sympa et chaleureuse; n'hésitez pas à faire vos défis avec lui car il est actif.</p>
        </div>
        </div>
    </template>