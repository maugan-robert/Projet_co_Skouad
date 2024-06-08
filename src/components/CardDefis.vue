<script setup lang="ts">
import IconFav from './icons/IconFav.vue'
import IconMoney from './icons/IconMoney.vue'
import IconMoneyPremium from './icons/IconMoneyPremium.vue';
import IconTime from './icons/IconTime.vue'
</script>

<template>
        <div class="flex items-center justify-between gap-3 shadow-md rounded-md p-3">
        <img class="w-28 h-28 rounded-md" src="/img/FitnessBase.webp" alt="">
        <div class="flex-grow">
            <h1 class="text-lg font-bold text-zinc-900 overflow-hidden relative z-10">Minirathon</h1>
            <p class="text-base font-semibold text-teal-600 pb-1">Course à pied</p>
            <div class="flex items-center gap-1 pb-1">
            <div class="flex items-center">
                <p class="text-base font-semibold text-zinc-900">600</p>
                <IconMoney />
            </div>
            <div class="flex items-center">
                <p class="text-base font-semibold text-zinc-900">1200</p>
                <IconMoneyPremium />
            </div>
            </div>
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center mr-16 px-1">
                <IconTime class="w-6 h-6"/>
                <p class="p-1 text-base font-medium text-zinc-900 ">3j et 6h</p>
            </div>
        </div>
        <IconFav class="fill-transparent" />
    </div>

</template>