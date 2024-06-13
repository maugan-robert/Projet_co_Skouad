<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
</script>

<template>
    <div class="mx-4">
        <h1 class="font-lalezar pt-4 pb-2 text-2xl font-bold">PARAMÈTRES</h1>
        <div class="flex flex-col gap-2 *:text-sm *:shadow-md">
        <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Paramètres du profil</h2>
      </div>
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Paramètres de confidentialité</h2>
      </div>
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Paramètres du compte</h2>
      </div>
      <RouterLink to="/settings/termes">
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Termes & Conditions générales</h2>
      </div>
    </RouterLink>
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">CGU et CGV</h2>
      </div>
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Vous aimez Skouad ? Evaluez-nous !</h2>
      </div>
      <RouterLink to="/settings/contact">
      <div class="p-3 flex items-center justify-between rounded-lg">
        <h2 class="font-manrope font-bold text-zinc-900">Nous contacter</h2>
      </div>
    </RouterLink>
    </div>
</div>
</template>