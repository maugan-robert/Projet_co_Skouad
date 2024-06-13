<template> 
    <div class="login mx-10">
        <RouterLink to="/" @click="goBack">
        <IconBack class="mt-8 mb-32"/>
        </RouterLink>
      <h1 class="font-manrope text-xl flex mb-5">Connecte-toi !</h1>
      <form @submit.prevent="login" class="flex flex-col justify-center gap-4">
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.email" type="email" placeholder="Email" required />
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.password" type="password" placeholder="Mot de passe" required />
        <button class=" my-2 flex rounded-xl px-14 p-2  text-white bg-teal-600 font-lexend text-sm  text-center justify-center" type="submit">Se connecter</button>
      </form>
      <p class="font-manrope text-sm flex justify-center pt-6 underline text-zinc-700">Problème de connection ?</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { pb } from '@/backend';
import IconBack from '@/components/icons/IconBack.vue';
import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
function goBack() {
  router.go(-1)
}

  const router = useRouter()
  const form = ref({
    email: '',
    password: ''
  })

  onMounted(() => {
    if (pb.authStore.isValid) {
        router.push('')
        
    }
  })
  
  const login = async () => {
    try {
      await pb.collection('users').authWithPassword(form.value.email, form.value.password)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  </script>
  