<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardSport from '@/components/CardSport.vue';
import { ref } from 'vue';
const rechercher = ref('');
import IconSearch from '@/components/icons/IconSearch.vue';
</script>

<template>
    <div class="mx-4">
    <h2 class="py-4 text-lg font-bold text-zinc-900">TOUS LES SPORTS</h2>
    <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-4 grow mb-4 ">
                <IconSearch class="w-6 h-6"/>   
                <input 
                class="text-zinc-500 px-1 py-2 placeholder-zinc-500 w-full"
                type="text"
                id="name"
                v-model="rechercher"
                placeholder="Rechercher"
                required
                />
            </div>
    <div class="container">
    <div class="grid grid-cols-2 gap-2 pb-20">
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    <CardSport/>
    </div>
    </div>
    </div>
</template>