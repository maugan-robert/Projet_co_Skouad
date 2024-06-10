<script setup lang="ts">
import IconTime from '@/components/icons/IconTime.vue';
import IconDiscuter from '@/components/icons/IconDiscuter.vue'; 
import IconLoc from '@/components/icons/IconLoc.vue';
</script>

<template>
    <div pb-16>
        <img src="/img/FitnessFull.webp" alt="">
        <div class="mx-4">
            <div class="pb-16">
            <h1 class="text-2xl font-manrope font-semibold py-3">Séance sport chill</h1>
            <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <img class="w-7 h-7" src="/img/IconeUser.webp" alt="">
                <p class="text-base font-manrope font-bold text-zinc-700">Théo Jucieux</p>
            </div>
            <div class="bg-zinc-200 rounded-md flex items-center justify-center w-24 px-1">
                <IconDiscuter class="w-5 h-5"/>
                <p class="p-1 text-sm font-medium text-zinc-900 ">Discuter</p>
            </div>
        </div>
        <div class="bg-zinc-200 rounded-lg mt-4 flex items-center justify-center w-40 px-1">
                <IconTime class="w-5 h-5"/>
                <p class="p-1 text-sm font-medium text-zinc-900 font-niramit">Sam. 16 mars <strong class="font-manrope">-11h</strong></p>
            </div>
            <div class="border-teal-600 border-2 rounded-lg flex items-center justify-center w-1/4 mt-2 p-1">
                <p class="text-teal-600 text-sm font-normal">Fitness</p>
            </div>
            <p class="text-sm text-zinc-900 pt-4 font-medium font-manrope">Salut, je recherche quelqu’un pour faire une petite séance jambes. Je fais de la musculation depuis 6 mois. L’objectif est de discuter ensemble, s’entraider et s’entrainer tranquillement.</p>
            <div class="flex items-center gap-1 py-4">
            <IconLoc class="w-4 h-4 fill-teal-600"/>
            <a class="underline text-teal-600 font-manrope text-sm font-medium" :href="'https://www.google.com/maps/search/?api=1&query=' + '11+rue+de+la+Souaberie,+Montbéliard+25200'.split(' ').join('+')" target="_blank">11 rue de la Souaberie, Montbéliard 25200</a>
            </div>
            <div class="flex items-center gap-2"> 
                <div class="bg-zinc-600 rounded-lg flex items-center justify-center w-1/4 mt-2 py-1">
                <p class="text-white text-sm font-normal">Durée</p>
            </div>
            <p class="text-base font-manrope text-zinc-900 pt-2">1h30</p>
            </div>
            <div class="flex items-center gap-2"> 
                <div class="bg-zinc-600 rounded-lg flex items-center justify-center w-1/4 mt-2 py-1">
                <p class="text-white font-sans text-sm font-normal">Difficulté</p>
            </div>
            <p class="text-base font-manrope text-zinc-900 pt-2">Intermédiaire</p>
            </div>
            <h3 class="text-lg font-manrope font-semibold pt-4">Participants</h3>
            <div class="items-center mb-20 mt-3 ml-3">
            <img class="w-11 h-11 mb-1" src="/img/IconeUser.webp" alt="">
            <p class="text-sm font-manrope font-bold pl-1 text-zinc-600">Théo</p>
            </div>
            <div class="flex justify-center fixed bottom-0 mb-14 right-0 left-0 bg-white bg-opacity-95 p-4">
            <button class="bg-teal-600 text-white text-sm font-medium py-2 px-20 rounded-md">Rejoindre</button>
            </div>
        </div>
    </div>
    </div>
</template>