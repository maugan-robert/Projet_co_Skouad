<script setup lang="ts">
import { ref } from 'vue'
import LogoSkouad from './icons/LogoSkouad.vue'
import IconBack from './icons/IconBack.vue'
import IconSettings from './icons/IconSettings.vue'
import IconNotifs from './icons/IconNotifs.vue'
import { RouterLink, useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import IconTel from './icons/IconTel.vue'
import IconVisio from './icons/IconVisio.vue'
const router = useRouter()
function goBack() {
  router.go(-1)
}
import { computed } from 'vue'
const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
const route = useRoute()

const showHeader = computed(() => {
  return route.path !== '/messages/theo' && route.path !== '/groupemessage'
})
</script>

<template>
  <header class="border-b-2 border-zinc-100 flex items-center justify-between px-4">
    <div class="flex mt-5 m-4">
      <template
        v-if="
          $route.path === '/' ||
          $route.path === '/events' ||
          $route.path === '/defis' ||
          $route.path === '/match' ||
          $route.path === '/messages' ||
          $route.path === '/shop'
        "
      >
        <RouterLink to="/">
          <LogoSkouad class="" />
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

      <template v-else-if="$route.path === '/messages/theo' || $route.path === '/groupesms'">
        <div
          class="px-4 pt-4 flex items-center gap-4 w-full justify-between border-b-2 border-zinc-100 pb-3.5 bg-white absolute top-0 left-0"
        >
          <RouterLink to="/" @click="goBack">
            <IconBack />
          </RouterLink>

          <div class="pt-2 flex items-center justify-between w-full">
            <div class="flex items-center gap-2 w-full">
              <img class="w-11 h-11" src="/img/IconeUser.webp" alt="" />
              <div class="">
                <h2 class="font-manrope font-bold text-sm mr-6">ThéoJcx</h2>
                <p class="font-lexend text-zinc-600 text-xs">En ligne</p>
              </div>
            </div>
            <div class="flex items-center gap-4 pr-4">
              <IconTel class="w-5 h-5" />
              <IconVisio class="w-6 h-6" />
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <RouterLink to="/" @click="goBack">
          <IconBack />
        </RouterLink>
      </template>
    </div>
    <div v-if="showHeader">
    <button
      class="relative z-30 flex h-3 w-6 flex-col justify-between *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300"
      @click="activeMenu = !activeMenu"
    >
      <span :class="{ 'translate-y-[5px] rotate-45': activeMenu }"></span>
      <span :class="{ '-translate-y-[5px] -rotate-45': activeMenu }"></span>
    </button>
    <nav
      class="invisible flex-1 py-8 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-teal-50"
      :class="{ '!visible !opacity-100': activeMenu }"
      v-scroll-lock="activeMenu"
    >
      <ul class="flex flex-col gap-3">
        <li>
          <RouterLink class="block p-4 rounded-lg text-zinc-900" to="/" @click="closeMenu"
            >Accueil</RouterLink
          >
        </li>
        <li>
          <RouterLink class="block p-4 rounded-lg text-gray-900" to="/events" @click="closeMenu"
            >Events</RouterLink
          >
        </li>
        <li>
          <RouterLink class="block p-4 rounded-lg text-gray-900" to="/defis" @click="closeMenu"
            >Défis</RouterLink
          >
        </li>
        <li>
          <RouterLink class="block p-4 rounded-lg text-gray-900" to="/shop" @click="closeMenu"
            >Shop</RouterLink
          >
        </li>
        <li>
          <RouterLink class="block p-4 rounded-lg text-gray-900" to="/settings" @click="closeMenu"
            >Paramètres</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
  </header>
</template>
