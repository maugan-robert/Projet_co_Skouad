<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import { onMounted, ref, computed } from 'vue'
import Pocketbase from 'pocketbase'
let pb = null
let currentuser = ref()

onMounted(async () => {
  pb = new Pocketbase(import.meta.env.VITE_URL_POCKETBASE)
  currentuser.value = pb.authStore.isValid ? pb.authStore.model : null

  if (!currentuser.value && window.location.pathname !== '/start') {
    window.location.href = '/start'
  } else if (
    (currentuser.value && window.location.pathname === '/start') ||
    window.location.pathname === '/register'
  ) {
    window.location.href = '/'
  }
})

const route = useRoute()
  const showHeader = computed(() => {
    return route.path !== '/Login' && route.path !== '/start' && route.path !== '/register'  && route.path !== '/choixsports' ;
  });
</script>

<template>
  <HeaderPage v-if="showHeader" />
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </RouterView>
  </main>
  <FooterPage v-if="showHeader" />
</template>
