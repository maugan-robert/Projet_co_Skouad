<script setup lang="ts">    
import { RouterLink } from 'vue-router'
import CardEvents from '@/components/CardEvents.vue'
import { allEventsFavori } from '@/backend'
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Futurs Events');
});
const eventsFavoris = await allEventsFavori()
</script>

<template>
    <div class="mx-4">
    <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">FUTURS EVENTS</h1>
        <ul class="flex flex-col justify-center gap-2">
  <li v-for="Events of eventsFavoris" :key="Events.id">
    <RouterLink
      :to="{
        name: '/events/[id]',
        params: {
          id: Events.id
        }
      }"
      class=""
    >
    
      <CardEvents v-bind="Events"/>
    </RouterLink>
  </li>
</ul>
</div>
</template>