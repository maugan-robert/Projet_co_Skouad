<script setup lang="ts">
import CardEvents from '@/components/CardEvents.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconTrier from '@/components/icons/IconTrier.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const rechercher = ref('');
const showOverlay = ref(false); // State to control overlay visibility
const selectedCategory = ref(''); // State to store selected category
const sports_options = ref(['Course à pied', 'Fitness', 'Vélo', 'Escalade','VTT', 'Karting','Natation','Paintball','Snowboard','Ski', 'Randonnée']); // Example sports categories

import { pb } from '@/backend';

// Function to fetch events with sorting
async function fetchEvents(category = '') {
  let filter = '';
  if (category) {
    filter = `Categorie="${category}"`;
  }
  return await pb.collection('Events').getFullList({
    filter: filter,
    sort: 'Date_Events' // Default sorting by date
  });
}

// Initial fetch of events
const eventsListe = ref(await fetchEvents());

// Function to toggle overlay
function toggleOverlay() {
  showOverlay.value = !showOverlay.value;
}

// Function to handle category selection
async function selectCategory(category) {
  selectedCategory.value = category;
  eventsListe.value = await fetchEvents(category); // Fetch events by selected category
  showOverlay.value = false; // Close overlay after selection
}

// Function to reset filters
async function resetFilters() {
  selectedCategory.value = '';
  eventsListe.value = await fetchEvents(); // Fetch all events
  showOverlay.value = false; // Close overlay after resetting filters
}
</script>

<template>
  <div class="bg-zinc-50">
    <div class="mx-4">
      <div class="mb-4">
        <h1 class="font-lalezar py-4 text-2xl font-bold">EVENTS</h1>
        <div class="flex justify-between gap-2">
          <div class="border-2 rounded-xl border-zinc-900 flex items-center pl-2 pr-4 grow">
            <IconSearch class="w-6 h-6"/>
            <input 
              class="text-zinc-500 px-1 py-1.5 placeholder-zinc-500 w-full bg-zinc-50"
              type="text"
              id="name"
              v-model="rechercher"
              placeholder="Rechercher"
              required
            />
          </div>
          <RouterLink to="/events/creationevent">
            <button class="bg-teal-600 hover:bg-teal-700 text-sm font-medium text-white rounded-lg px-6 py-2.5 items-center flex justify-center">Créer</button>
          </RouterLink>
          <button @click="toggleOverlay">
            <IconTrier class="w-9 h-9" />
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-3 pb-16">
        <ul>
          <li v-for="Events of eventsListe" :key="Events.id">
            <RouterLink
              :to="{
                name: '/events/[id]',
                params: {
                  id: Events.id
                }
              }"
            >
              <CardEvents v-bind="Events"/>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Overlay for category selection -->
  <div v-if="showOverlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-xl font-manrope font-bold mb-4">Trier par sport</h2>
      <ul class="space-y-2">
        <li v-for="sport in sports_options" :key="sport">
          <button @click="selectCategory(sport)" class="block w-full font-manrope text-left px-4 py-2 hover:bg-gray-200 rounded-md">
            {{ sport }}
          </button>
        </li>
      </ul>
      <div class="">
      <button @click="resetFilters" class="mt-4 bg-teal-600 text-white ml-3 items-center w-32 px-4 py-2 font-lexend rounded-md">Réinitialiser</button>
      <button @click="toggleOverlay" class="mt-2 bg-zinc-600 text-white w-32 ml-7 font-lexend px-4 py-2 rounded-md">Fermer</button>
    </div>
    </div>
  </div>
</template>
