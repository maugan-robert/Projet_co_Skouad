<script setup lang="ts">
import { ref } from 'vue'
const rechercher = ref('')
import IconSearch from '@/components/icons/IconSearch.vue'
import IconMicro from '@/components/icons/IconMicro.vue'
import IconGalerie from '@/components/icons/IconGalerie.vue'
import IconeEmoji from '@/components/icons/IconeEmoji.vue'
import IconPhoto from '@/components/icons/IconPhoto.vue';
</script>
<template>
  <div>
  <p class="font-manrope flex justify-center mt-52 text-sm text-zinc-500">27 fév. à 14:34</p>
  <div>
    <p class="bg-teal-600 p-3 rounded-xl fixed right-0 bottom-0 mb-72 w-2/3 font-lexend text-sm text-white mr-2">Salut Théo, tu veux qu'on aille courir la semaine pro ?</p>
  </div>
  <div class="flex items-center fixed left-0 bottom-0 mb-56 ml-2 gap-1 w-2/3">
    <img class="w-9 h-9" src="/img/IconeUser.webp" alt="">
    <p class="bg-zinc-800 p-3 rounded-xl  font-lexend text-sm text-white">Grave, on se redit</p>
  </div>
  <p class="font-manrope flex justify-center fixed left-0 bottom-0 right-0 mb-44 text-sm text-zinc-500">Aujourd'hui 12:43</p>
  <div class="flex items-center fixed left-0 bottom-0 mb-32 ml-2 gap-1 w-2/3">
    <img class="w-9 h-9" src="/img/IconeUser.webp" alt="">
    <p class="bg-zinc-800 p-3 rounded-xl  font-lexend text-sm text-white">Toujours ok dimanche ?</p>
  </div>
</div>







  <div class="fixed bottom-0 right-0 left-0 mb-16 flex items-center ml-5 mr-4 gap-3 w-80">
    <div class="bg-teal-600 rounded-2xl p-1.5 items-center">
      <IconPhoto />
    </div>
    <div class="border-2 rounded-lg border-zinc-600 flex items-center px-2.5 grow">
      <IconSearch class="w-8 h-8" />
      <input
        class="text-zinc-500 px-1 py-2 placeholder-zinc-500 w-full"
        type="text"
        id="name"
        v-model="rechercher"
        placeholder="Message..."
        required
      />
      <div class="flex gap-2">
      <IconMicro />
      <IconGalerie />
      <IconeEmoji />
    </div>
    </div>
  </div>
</template>
