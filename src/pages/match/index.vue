<script setup lang="ts">
import CardMatch from '@/components/CardMatch.vue';
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Matchs');
});
</script>

<template>
        <CardMatch/>
</template>