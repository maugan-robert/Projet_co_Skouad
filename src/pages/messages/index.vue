<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
const rechercher = ref('');
import { ref } from 'vue';  
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Messages');
});
</script>
<template>
    <div class="mx-4">
        <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">MESSAGES</h1>
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
            
            <div class="flex flex-col gap-1">
            <RouterLink to="/messages/theo">
            <div class="pt-2 flex items-center gap-2">
                <img class="w-11 h-11" src="/img/IconeUser.webp" alt="">
                <div class="w-full">
                    <div class="flex items-center justify-between w-full">
                    <h2 class="flex-grow font-manrope font-bold text-sm">Théo Jucieux</h2>
                    <p class="font-manrope text-xs text-zinc-600">12:43</p>
                </div>
                    <div>   
                    <p class="flex-grow font-lexend font-bold text-zinc-600 text-xs">Toujours ok dimanche ?</p>
                </div>
                </div>
                </div>
                </RouterLink>


                <div class="pt-2 flex items-center gap-2">
                <img class="w-11 h-11" src="/img/IconeUser2.webp" alt="">
                <div class="w-full">
                    <div class="flex items-center justify-between w-full">
                    <h2 class="flex-grow font-manrope font-bold text-sm">Alex</h2>
                    <p class="font-manrope text-xs text-zinc-600">27/02/2024</p>
                </div>
                    <div>   
                    <p class="flex-grow font-lexend text-zinc-600 text-xs">Salut content que tu nous...</p>
                </div>
                </div>
                </div>

                <div class="pt-2 flex items-center gap-2">
                <img class="w-11 h-11" src="/img/IconeUser4.webp" alt="">
                <div class="w-full">
                    <div class="flex items-center justify-between w-full">
                    <h2 class="flex-grow font-manrope font-bold text-sm">Sylvain27</h2>
                    <p class="font-manrope text-xs text-zinc-600">02/03/2024</p>
                </div>
                    <div>   
                    <p class="flex-grow font-lexend text-zinc-600 text-xs">En ligne hier</p>
                </div>
                </div>
                </div>

                <RouterLink to="/messages/groupe">
                <div class="pt-2 flex items-center gap-2">
                <img class="w-11 h-11" src="/img/IconeUserGroup.webp" alt="">
                <div class="w-full">
                    <div class="flex items-center justify-between w-full">
                    <h2 class="flex-grow font-manrope font-bold text-sm">Running du dimanche</h2>
                    <p class="font-manrope text-xs text-zinc-600">2j</p>
                </div>
                    <div>   
                    <p class="flex-grow font-lexend text-zinc-600 text-xs">Christelle est en ligne</p>
                </div>
                </div>
                </div>
                </RouterLink>
            </div>














        
    </div>
</template>