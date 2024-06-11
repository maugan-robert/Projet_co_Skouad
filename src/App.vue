<script setup lang="ts">
import { RouterView } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <HeaderPage />
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </RouterView>
  </main>
  <FooterPage />
</template>
