<script setup lang="ts">
import IconFav from './icons/IconFav.vue'
import IconMoney from './icons/IconMoney.vue'
import IconMoneyPremium from './icons/IconMoneyPremium.vue';
import IconTime from './icons/IconTime.vue'
</script>

<template>
        <div class="flex items-center justify-between gap-2 shadow-md rounded-md p-3">
        <img class="w-24 h-24 rounded-md" src="/img/RunningDefis.webp" alt="">
        <div class="flex-grow">
            <h1 class="text-lg font-bold font-manrope text-zinc-900 overflow-hidden relative">Minirathon</h1>
            <p class="text-sm font-manrope font-semibold text-teal-600">Course à pied</p>
            <div class="flex items-center gap-1 ">
            <div class="flex items-center">
                <p class="text-sm font-lexend font-medium text-zinc-900">600</p>
                <IconMoney class="" />
            </div>
            <div class="flex items-center">
                <p class="text-sm font-lexend font-medium text-zinc-900">1200</p>
                <IconMoneyPremium />
            </div>
            </div>
            <div class="bg-zinc-200 rounded-lg flex items-center justify-center w-24 px-1">
                <IconTime class="opacity-90 w-5 h-5"/>
                <p class="p-1 text-sm font-manrope text-zinc-900 ">3j et 6h</p>
            </div>
        </div>
        <IconFav class="fill-transparent" />
    </div>

</template>