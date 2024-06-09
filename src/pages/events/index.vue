<script setup lang="ts">
import CardEvents from '@/components/CardEvents.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconTrier from '@/components/icons/IconTrier.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const rechercher = ref('');
</script>

<template>
    <div class="bg-zinc-50">
    <div class="mx-4">
    <div class=" mb-4">
        <h1 class="font-lalezar py-4 text-2xl font-bold">EVENTS</h1>
        <div class="flex justify-between gap-2">
            <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-4 grow">
                <IconSearch class="w-6 h-6"/>   
                <input 
                class="text-zinc-500 px-1 py-1.5 placeholder-zinc-500 w-full bg-zinc-50"
                type="text"
                id="name"
                v-model="rechercher"
                placeholder="Rechercher"
                required
                />
            </div>
            <RouterLink to="/create-event"><button class="bg-teal-600 text-sm font-medium text-white rounded-lg px-6 py-2.5 items-center flex justify-center">Créer</button></RouterLink>
            <button><IconTrier class="w-9 h-9" /></button>
        </div>
    </div>
    <div class="flex flex-col gap-3 pb-16">
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
</div>
</div>
</div>
</template>