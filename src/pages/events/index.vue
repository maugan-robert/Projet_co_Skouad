<script setup lang="ts">
import CardEvents from '@/components/CardEvents.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconTrier from '@/components/icons/IconTrier.vue';
</script>

<template>
    <div class="mx-4">
    <div class="bg-white mb-4">
        <h1 class="font-lalezar py-4 text-xl font-bold">EVENTS</h1>
        <div class="flex justify-between gap-1">
            <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-1">
                <IconSearch class="w-6 h-6"/>   
                <input 
                class="text-zinc-500 p-2 placeholder-zinc-500 w-48"
                type="text"
                id="name"
                v-model="rechercher"
                placeholder="Rechercher"
                required
                />
            </div>
            <RouterLink to="/create-event"><button class="bg-teal-600 font-medium text-white rounded-lg px-5 py-3 items-center flex justify-center">Créer</button></RouterLink>
            <button><IconTrier class="w-9 h-9" /></button>
        </div>
    </div>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
    <CardEvents/>
</div>
</template>