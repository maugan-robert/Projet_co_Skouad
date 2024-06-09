<script setup lang="ts">
import { ref } from 'vue';
import CardDefis from '@/components/CardDefis.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconTrier from '@/components/icons/IconTrier.vue';

const rechercher = ref('');
</script>

<template> 
<div class="bg-zinc-50">
    <div class="mx-4">
    <div class=" mb-4">
        <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">DÉFIS</h1>
        <div class="flex justify-between gap-4">
            <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-4 grow">
                <IconSearch class="w-6 h-6"/>   
                <input 
                class="text-zinc-500 px-1 py-1.5 bg-zinc-50 placeholder-zinc-500 w-full"
                type="text"
                id="name"
                v-model="rechercher"
                placeholder="Rechercher"
                required
                />
            </div>
            <button><IconTrier class="w-9 h-9" /></button>
        </div>
    </div>
    <div class="flex flex-col gap-2 pb-16">
    <CardDefis/>
    <CardDefis/>
    <CardDefis/>
    <CardDefis/>
    <CardDefis/>
    <CardDefis/>
    </div>
</div>
</div>
</template>