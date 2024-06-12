<script setup lang="ts">    
import { RouterLink } from 'vue-router'
import CardDefis from '@/components/CardDefis.vue'
import { allDefisFavori } from '@/backend'

const defisFavoris = await allDefisFavori()
</script>

<template>
    <div class="mx-4">
    <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">MES DÉFIS</h1>
        <ul class="flex flex-col justify-center gap-2">
  <li v-for="Defis of defisFavoris" :key="Defis.id">
    <RouterLink
      :to="{
        name: '/defis/[id]',
        params: {
          id: Defis.id
        }
      }"
      class=""
    >
    
      <CardDefis v-bind="Defis"/>
    </RouterLink>
  </li>
</ul>
</div>
</template>