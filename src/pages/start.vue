<script setup lang="ts">
import { ref } from 'vue'
import Pocketbase from 'pocketbase'
import IconGoogle from '@/components/icons/IconGoogle.vue';
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Bienvenue');
});

let email = ref('')
let password = ref('')
let currentuser = ref() 
let pb: Pocketbase | null = null

onMounted(async () => {
    pb = new Pocketbase('https://skouad.mauganrobert.fr:443')

})

const doLogin = async () => {
    try {
        if (pb) {
            const authData = await pb.collection('users').authWithPassword(email.value, password.value)
            currentuser.value = pb.authStore.model
            window.location.href = '/'
        }
    } catch (e) {
        console.error(e)
    }
}

const doLoginOAuth = async () => {
    try {
        if (pb){
            const authData = await pb.collection('users').authWithOAuth2({ provider: 'google'})
        currentuser.value = pb.authStore.model
        window.location.href = '/'
        }

    } catch (e) {
        console.error(e)
    }
}

const updateTitlee = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitlee('');
});


</script>

<template>

    <nav class="mx-6 flex-col items-center justify-center">
        <h1 class="flex flex-col justify-center items-center font-manrope font-extrabold text-3xl mb-10 mt-20">Bienvenue sur <strong class="text-teal-600"> Skouad</strong></h1>
        <p class="justify-center font-manrope text-zinc-700 text-base pb-4">Prêt à démarrer ?  Connectez-vous ou inscrivez-vous.</p>
        <div class="flex flex-col">
            <div class=" my-2 flex rounded-xl px-14 p-2 border border-zinc-900  text-zinc-900 font-lexend text-sm gap-2  text-center justify-center">
                <IconGoogle class="w-5 h-5 " />
                <button class="font-lexend"  @click="doLoginOAuth">Connexion avec Google</button> 
            </div>
        </div>
            <div class="flex items-center mb-2">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 font-bold font-manrope text-sm">OU</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <RouterLink to="/Login" class=" my-2 flex rounded-xl px-14 p-2  text-white bg-teal-600 font-lexend text-sm  text-center justify-center">
                <button >Se Connecter</button>
            </RouterLink>
            <h2 class="font-manrope text-sm font-bold pt-5">Vous n'avez pas de compte ? créer en un !</h2>
            <RouterLink  to="/register" class="my-2 flex rounded-xl px-14 p-2  text-teal-600 border-2 border-teal-600 font-lexend text-sm  text-center justify-center">
                <button  @click="doLogin">Créer un compte</button>  
            </RouterLink>
            <p class="text-[11px]/[13px] pr-2 mb-16">En vous inscrivant, vous acceptez les <span class="text-teal-600">Conditions d'utilisation</span> et la <span  class="text-teal-600">politique de confidentialité</span> notamment <span  class="text-teal-600">l'Utilsation des cookies</span>.</p>
            <p class="text-xs text-center">©2024 Skouad Inc.</p>
    </nav>
</template>