<template>
    <div class="register  mx-10">
        <RouterLink to="/" @click="goBack">
        <IconBack class="mt-8 mb-12"/>
        </RouterLink>
      <h1 class="font-manrope text-xl flex mb-5">Créer ton compte !</h1>
      <form class="flex flex-col justify-center gap-4" @submit.prevent="register">
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.name" placeholder="Nom" required />
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.email" type="email" placeholder="Email" required />
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.age" type="email" placeholder="Âge" required />
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.ville" type="email" placeholder="Ville" required />
        <textarea class="border-2 rounded-md p-2 border-zinc-900" v-model="form.description" type="email" placeholder="Description" required />
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.password" type="password" placeholder="Mot de passe" required />
        <input class="border-2 rounded-md p-2 border-zinc-900" v-model="form.passwordConfirm" type="password" placeholder="Confirmer votre mot de passe" required />
        <div class="">
          <label for="image" class="block font-manrope text-sm font-bold text-zinc-900">Photo de profil</label>
          <input
            @change="form.avatar = $event.target?.files[0]"
            id="image"
            type="file"
            class="mt-1 block w-full border font-manrope text-sm font-bold border-zinc-300 rounded-xl p-2"
            accept="image/*"
            required
          />
        </div>
        <button class="flex rounded-xl px-14 p-2  text-white bg-teal-600 font-lexend text-sm  text-center justify-center mb-10 " @click="register()">Créer mon compte</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { pb } from '@/backend';
import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import IconBack from '@/components/icons/IconBack.vue';
  
  const router = useRouter()
  const form = ref({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    avatar: null,
    age: '',
    ville: '',
    description: ''
  })

  function goBack() {
  router.go(-1)
}
  
  const register = async () => {
    if (form.value.password !== form.value.passwordConfirm) {
      alert('Passwords do not match')
      return
    }
    try {
      await pb.collection('users').create(form.value)
      await pb.collection('users').authWithPassword(form.value.email, form.value.password)
      router.push('/choixsports')
    } catch (error) {
      console.error(error)
    }
  }
  </script>

  