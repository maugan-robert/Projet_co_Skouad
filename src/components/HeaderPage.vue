<script setup lang=ts>
import LogoSkouad from './icons/LogoSkouad.vue'
import IconBack from './icons/IconBack.vue'
import IconMoney from './icons/IconMoney.vue'
import IconSettings from './icons/IconSettings.vue'
import IconNotifs from './icons/IconNotifs.vue'

import { RouterLink } from 'vue-router'
import { ref } from 'vue'

import { useRouter } from 'vue-router';
const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
    <header class="border-b-2 border-zinc-100 flex items-center justify-between">
        <div class="flex mt-8 m-6">
    <template v-if="$route.path === '/' || $route.path ==='/events' || $route.path ==='/defis' || $route.path ==='/match' || $route.path ==='/messages' || $route.path ==='/shop' ">
    <RouterLink to="/">
    <LogoSkouad class=""/>
    </RouterLink>
    </template>
  
  <template v-else-if="$route.path === '/profil'">
    <div class="flex items-center">
    <RouterLink to="/settings">
      <IconSettings />
    </RouterLink>
    <RouterLink to="/notifs">
      <IconNotifs />
    </RouterLink>
    </div>
  </template>

  <template v-else>
    <RouterLink to="/" @click="goBack">
      <IconBack />
    </RouterLink>
  </template>
</div>

<div class="flex items-center ml-auto mt-8 m-6 gap-0.5">
    <p class="text-lg font-bold">1298</p>
    <IconMoney class="w-6 h-6" />
  </div>

</header>
</template>