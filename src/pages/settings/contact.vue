<script setup lang="ts">
</script>

<template>
            <h1 class="font-lalezar pt-4 ml-4 pb-2 text-2xl font-bold">NOUS CONTACTER</h1>
    <div class=" flex flex-col items-center justify-center mx-4 my-4 gap-3">

        <div>
            <h3>Prénom</h3>
            <input class="border-2 pr-16 rounded-md p-2 border-zinc-900"  placeholder="Écris ton prénom ici" />
        </div>
        <div>
            <h3>Nom</h3>
        <input class="border-2 pr-16 rounded-md p-2 border-zinc-900"  placeholder="Écris ton nom ici"/>
    </div>
    <div>
            <h3>Mail</h3>
        <input class="border-2 pr-16 rounded-md p-2 border-zinc-900"  placeholder="Écris ton adresse mail" />
    </div>
    <div>
            <h3>Description</h3>
        <textarea class="border-2 pr-24 rounded-md p-2 border-zinc-900"  placeholder="Écris ton message" />
    </div>
    <button class=" my-2 flex rounded-xl px-14 p-2  text-white bg-teal-600 font-lexend text-sm  text-center justify-center" type="submit">Envoyer</button>
    </div>
</template>