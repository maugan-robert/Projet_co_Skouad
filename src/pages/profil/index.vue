<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-4 mb-4">
<img class="w-28 h-28" src="/img/imageprofil.webp" alt="">
<h1 class="font-manrope font-bold text-xl text-zinc-900">Momo</h1>
</div>

<div class="mx-4 flex flex-col gap-2 *:text-sm *:shadow-md">
    <RouterLink to="profil/prochainsevents" class="rounded-lg">
    <div class="p-3 flex items-center justify-between ">
            <h2 class="font-manrope font-bold text-zinc-900">Prochains Events</h2>
        </div>
        </RouterLink>
        <div class="p-3 flex items-center justify-between rounded-lg">
            <h2 class="font-manrope font-bold text-zinc-900">Mes Events</h2>
        </div>

        <RouterLink to="profil/defisfavoris" class="rounded-lg">
        <div class="p-3 flex items-center justify-between">
            <h2 class="font-manrope font-bold text-zinc-900">Mes défis</h2>
        </div>
        </RouterLink>

        <div class="p-3 flex items-center justify-between rounded-lg">
            <h2 class="font-manrope font-bold text-zinc-900">Notes et avis</h2>
        </div>
        <div class="p-3 flex items-center justify-between rounded-lg">
            <h2 class="font-manrope font-bold text-zinc-900">Mes sports</h2>
        </div>
</div>
</template>