<script setup lang="ts">
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Notifications');
});
</script>

<template>
    <div class="mx-4">
        <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">NOTIFICATIONS</h1>
        <div class="flex flex-col gap-2 *:text-sm *:shadow-md">
        <div class="p-3 rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Nouveau défi en Escalade</h2>
        <p class="text-zinc-600 font-bold font-manrope text-sm">Il y a 2h</p>
      </div>
      <div class="p-3 rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Sarah t'as matché en retour</h2>
        <p class="text-zinc-600 font-manrope text-sm">Il y a 4j</p>
      </div>
    </div>
</div>
</template>