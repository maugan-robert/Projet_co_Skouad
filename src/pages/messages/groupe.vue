<script setup lang="ts">
import { ref } from 'vue';
import IconPhoto from '@/components/icons/IconPhoto.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMicro from '@/components/icons/IconMicro.vue';
import IconGalerie from '@/components/icons/IconGalerie.vue';
import IconeEmoji from '@/components/icons/IconeEmoji.vue';

const rechercher = ref('');

</script>

<template>
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