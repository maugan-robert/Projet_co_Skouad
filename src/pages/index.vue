<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardEvents from '@/components/CardEvents.vue';
import CardSport from '@/components/CardSport.vue';
import CardDefis from '@/components/CardDefis.vue';
</script>

<template>
        <div class=" bg-zinc-50">
        <div class="mx-4">
        <div class="flex items-center justify-between">
        <h2 class="py-4 text-lg font-bold text-zinc-900">TES PROCHAINS EVENTS</h2>
        <RouterLink class="underline text-teal-600 font-semibold text-base ml-auto" to="/events"><p>Voir plus</p></RouterLink>
        </div>
        <div class="flex flex-col justify-center gap-2">
        <CardEvents/>
        <CardEvents/>
        </div>
        <div class="flex items-center justify-between">
        <h2 class="py-4 text-lg font-bold text-zinc-900">TES SPORTS</h2>
        <RouterLink class="underline text-teal-600 font-semibold text-base ml-auto" to="/sports"><p>Voir plus</p></RouterLink>
        </div>
        <div class="container">
         <div class="container">
        <div class="flex flex-wrap justify-between gap-4">
        <CardSport/>
        <CardSport/>
        <CardSport/>
        <CardSport/>
        </div>
        </div>
        </div>
        <div class="flex items-center justify-between">
        <h2 class="py-4 text-lg font-bold text-zinc-900">DÉFIS SUGGÉRÉS</h2>
        <RouterLink class="underline text-teal-600 font-semibold text-base ml-auto" to="/defis"><p>Voir plus</p></RouterLink>
        </div>
        <div>
        <CardDefis/>
        <CardDefis/>
        </div>



</div>
</div>
</template>