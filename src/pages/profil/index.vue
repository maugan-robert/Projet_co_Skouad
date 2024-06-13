<template>
    <div    class="flex flex-col items-center justify-center mt-4 mb-4">
        <img class="rounded-lg w-24 h-24" :src="avatarUrl" alt="" />
      <h1 class="font-manrope font-bold text-xl text-zinc-900">{{ name }}</h1>
    </div>
  
    <div class="mx-4 flex flex-col gap-2 *:text-sm *:shadow-md">
      <RouterLink to="/profil/prochainsevents" class="rounded-lg">
        <div class="p-3 flex items-center justify-between ">
          <h2 class="font-manrope font-bold text-zinc-900">Prochains Events</h2>
        </div>
      </RouterLink>
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Mes Events</h2>
      </div>
      <RouterLink to="/profil/defisfavoris" class="rounded-lg">
        <div class="p-3 flex items-center justify-between">
          <h2 class="font-manrope font-bold text-zinc-900">Mes défis</h2>
        </div>
      </RouterLink>
      <RouterLink to="/profil/noteavis" class="rounded-lg">
        <div class="p-3 flex items-center justify-between">
          <h2 class="font-manrope font-bold text-zinc-900">Notes et avis</h2>
        </div>
      </RouterLink>
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Mes sports</h2>
      </div>
      <div class="flex items-center justify-center">
            <button class="flex items-center justify-around p-3 w-2/3 mb-10 bg-red-600 rounded-3xl">
                <button @click="doLogout" class="font-bold text-xl text-white">Déconnexion</button>
            </button>
         </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { defineProps, watch, onMounted } from 'vue';
  
  import type { UsersResponse } from '@/pocketbase-types';
  import Pocketbase from 'pocketbase'
  
  const props = defineProps<UsersResponse<any>>();
  console.log('props : ',{...props});
  
  let currentuser = ref()
  let pb: Pocketbase | null = new Pocketbase()
  
  const doLogout = async () => {
  if (pb) {
        pb.authStore.clear()
    }
    currentuser.value = null
    window.location.href = '/login'
}

const avatarUrl = ref<string>('')

watch(currentuser, (val) => {
    if (val) {
        if (pb) {
            avatarUrl.value = pb.getFileUrl(val, val.avatar, { thumb: '100x100'})
        }
    }
})

onMounted(async () => {
    pb = new Pocketbase('http://127.0.0.1:8090')
    currentuser.value = pb.authStore.isValid ? pb.authStore.model : null
})
  </script>
  