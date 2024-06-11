<script setup lang="ts">
import IconTime from '@/components/icons/IconTime.vue';
import IconDiscuter from '@/components/icons/IconDiscuter.vue'; 
import IconLoc from '@/components/icons/IconLoc.vue';
import ImgPb from '@/components/ImgPb.vue';

import { infoEvents } from '@/backend'
import { useRoute } from 'vue-router/auto';
import { ref } from 'vue'
const route = useRoute('/events/[id]')
console.log('id :', route.params.id)
const event = ref()
event.value = await infoEvents(route.params.id)


import type { EventsResponse } from '@/pocketbase-types';
const bat:EventsResponse<any> = await infoEvents(route.params.id)







</script>

<template>
    <div pb-16>
        <ImgPb :record="bat" :filename="bat.Image" class="rounded-t-lg w-20 h-20"  alt="" />
        <div class="mx-4">
            <div class="pb-16">
            <h1 class="text-2xl font-manrope font-semibold py-3">{{ event.Nom }}</h1>
            <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <ImgPb :record="bat" :filename="bat.img_createur" class="rounded-t-lg w-20 h-20"  alt="" />
                <p class="text-base font-manrope font-bold text-zinc-700">{{ event.nom_createur }}</p>
            </div>
            <div class="bg-zinc-200 rounded-md flex items-center justify-center w-24 px-1">
                <IconDiscuter class="w-5 h-5"/>
                <p class="p-1 text-sm font-medium text-zinc-900 ">Discuter</p>
            </div>
        </div>
        <div class="bg-zinc-200 rounded-lg mt-4 flex items-center justify-center w-40 px-1">
                <IconTime class="w-5 h-5"/>
                <p class="p-1 text-sm font-medium text-zinc-900 font-niramit">{{ event.Date_Events}}</p>
            </div>
            <div class="border-teal-600 border-2 rounded-lg flex items-center justify-center w-1/4 mt-2 p-1">
                <p class="text-teal-600 text-sm font-normal">{{ event.Categorie }}</p>
            </div>
            <p class="text-sm text-zinc-900 pt-4 font-medium font-manrope">{{ event.description_events }}</p>
            <div class="flex items-center gap-1 py-4">
            <IconLoc class="w-4 h-4 fill-teal-600"/>
            <a class="underline text-teal-600 font-manrope text-sm font-medium">{{ event.adresse_events}}</a>
            </div>
            <div class="flex items-center gap-2"> 
                <div class="bg-zinc-600 rounded-lg flex items-center justify-center w-1/4 mt-2 py-1">
                <p class="text-white text-sm font-normal">Durée</p>
            </div>
            <p class="text-base font-manrope text-zinc-900 pt-2">{{ event.duree_event }}</p>
            </div>
            <div class="flex items-center gap-2"> 
                <div class="bg-zinc-600 rounded-lg flex items-center justify-center w-1/4 mt-2 py-1">
                <p class="text-white font-sans text-sm font-normal">Difficulté</p>
            </div>
            <p class="text-base font-manrope text-zinc-900 pt-2">{{ event.difficulte_event }}</p>
            </div>
            <h3 class="text-lg font-manrope font-semibold pt-4">Participants</h3>
            <div class="items-center mb-20 mt-3 ml-3">
            <ImgPb :record="bat" :filename="bat.img_participants1" class="rounded-t-lg w-20 h-20"  alt="" />            <p class="text-sm font-manrope font-bold pl-1 text-zinc-600">{{ event.nom_participants1 }}</p>
            </div>
            <div class="flex justify-center fixed bottom-0 mb-14 right-0 left-0 bg-white bg-opacity-95 p-4">
            <button class="bg-teal-600 text-white text-sm font-medium py-2 px-20 rounded-md">Rejoindre</button>
            </div>
        </div>
    </div>
    </div>
</template>