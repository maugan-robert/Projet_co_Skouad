<script setup lang="ts">
import { ref } from 'vue';
const rechercher = ref('');
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMicro from '@/components/icons/IconMicro.vue';
import IconGalerie from '@/components/icons/IconGalerie.vue';
import IconeEmoji from '@/components/icons/IconeEmoji.vue';
</script>
<template>
    <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-4 grow mb-4 ">
                <IconSearch class="w-6 h-6"/>   
                <input 
                class="text-zinc-500 px-1 py-2 placeholder-zinc-500 w-full"
                type="text"
                id="name"
                v-model="rechercher"
                placeholder="Message..."
                required/>
    </div>
            <div class="flex items-center">
                <IconMicro/>
                <IconGalerie/>
                <IconeEmoji/>
            </div>
</template>