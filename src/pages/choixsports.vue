<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import IconBack from '@/components/icons/IconBack.vue';
import IconFav from '@/components/icons/IconFav.vue';
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Choix des sports');
});
const router = useRouter();

function goBack() {
  router.go(-1);
}

const sports = [
  'Course à pied', 'Vélo', 'VTT', 'Randonnée', 'Snowboard',
  'Karting', 'Ski', 'Paintball', 'Fitness', 'Natation', 'Escalade'
];

const favoris = ref(
  sports.reduce((acc, sport) => {
    acc[sport] = false;
    return acc;
  }, {})
);

function toggleFavori(sport) {
  favoris.value[sport] = !favoris.value[sport];
}
</script>

<template>
  <div class="mx-4 mb-10">
    <RouterLink to="/" @click="goBack">
      <IconBack class="mt-8 mb-12"/>
    </RouterLink>
    <h1 class="font-manrope text-xl flex mb-5">Choisis tes sports</h1>
    <div class="*:shadow-md *:rounded-md flex flex-col justify-center gap-2">
      <div v-for="sport in sports" :key="sport" class="p-3 flex items-center justify-between">
        <h2 class="font-manrope font-bold text-zinc-900">{{ sport }}</h2>
        <IconFav
          @click="toggleFavori(sport)"
          :class="['w-6 h-6', { 'fill-black': favoris[sport], 'fill-none': !favoris[sport], 'stroke-black': !favoris[sport] }]"
        />
      </div>
    </div>
    <RouterLink to="/"><button class=" mt-8 w-full rounded-xl px-14 p-2  text-white bg-teal-600 font-lexend text-sm justify-center">Valider mes sports</button></RouterLink>
  </div>
</template>

<style scoped>
.fill-black {
  fill: black;
}
.fill-none {
  fill: none;
}
.stroke-black {
  stroke: black;
}
</style>
