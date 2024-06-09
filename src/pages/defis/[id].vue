<script setup lang="ts">
import IconTime from '@/components/icons/IconTime.vue';
import IconMoneyPremium from '@/components/icons/IconMoneyPremium.vue';
import IconMoney from '@/components/icons/IconMoney.vue';
</script>

<template>
    <div pb-16>
        <img src="/img/RunningFull.webp" alt="">
        <div class="mx-4">
            <div class="pb-16">
                <div class="flex items-center justify-between">
            <h1 class="text-2xl font-manrope font-semibold py-3">Minirathon</h1>
            <div class="flex items-center gap-2">
                <div class="flex items-center gap-0.5">
                <p class="text-base font-semibold text-zinc-900">600</p>
                <IconMoney />
            </div>
                <div class="flex items-center gap-0.5">
                <p class="text-base font-semibold text-zinc-900">1200</p>
                <IconMoneyPremium />
            </div>
            </div>
        </div>
            <div class="border-teal-600 border-2 rounded-lg flex items-center justify-center w-1/4 p-0.5">
                <p class="text-teal-600 text-base font-normal">Fitness</p>
            </div>
        <div class="bg-zinc-200 rounded-lg mt-2 flex items-center justify-center w-40 px-1">
                <IconTime class="w-5 h-5"/>
                <p class="p-1 text-sm font-medium text-zinc-900 font-niramit">Sam. 16 mars <strong class="font-manrope">-11h</strong></p>
            </div>

            <p class="text-sm text-zinc-900 pt-4 font-medium font-manrope mb-20">Salut, je recherche quelqu’un pour faire une petite séance jambes. Je fais de la musculation depuis 6 mois. L’objectif est de discuter ensemble, s’entraider et s’entrainer tranquillement.</p>
            <div class="flex justify-center fixed bottom-0 mb-14 right-0 left-0 bg-white bg-opacity-95 p-4">
            <button class="bg-teal-600 text-white text-sm font-medium py-3 px-20 rounded-md">Participer</button>
            </div>
        </div>
    </div>
    </div>
</template>