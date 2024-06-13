<template>
  <div class="max-w-lg mx-auto p-4">
    <h1 class="text-2xl font-lalezar font-bold mb-4">CRÉER UN EVENT</h1>
    <!-- Barre de progression -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div class="bg-teal-600 h-2.5 rounded-full" :style="{ width: progressBarWidth }"></div>
    </div>

    <div v-if="step === 1">
      <form @submit.prevent="nextStep">
        <div class="mb-4">
          <label for="Categorie" class="block font-manrope text-sm font-bold text-zinc-900">Sport</label>
          <select v-model="form.Categorie" id="Categorie" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required>
            <option disabled value="">Choisis un sport</option>
            <option v-for="sport in sports_options" :key="sport">{{ sport }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="Nom" class="block text-sm font-manrope font-bold text-zinc-900">Nom de l'Event</label>
          <input v-model="form.Nom" type="text" id="Nom" class="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm" required>
        </div>
        <div class="mb-4">
          <label for="description_events" class="block font-manrope text-sm font-bold text-zinc-900">Description</label>
          <textarea v-model="form.description_events" id="description_events" class="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm" required></textarea>
        </div>
        <div class="mb-4">
          <label for="Date_Events" class="block font-manrope text-sm font-bold text-zinc-900">Date</label>
          <input v-model="form.Date_Events" type="date" id="Date_Events" class="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm" required>
        </div>
        <div class="mb-4">
          <label for="Localisation" class="block font-manrope text-sm font-bold text-zinc-900">Ville de l'Event</label>
          <input v-model="form.Localisation" type="text" id="Localisation" class="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm" required>
        </div>
        <div class="mb-4">
          <label for="adresse_event" class="block font-manrope text-sm font-bold text-zinc-900">Adresse de l'événement</label>
          <input v-model="form.adresse_event" type="text" id="adresse_event" class="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm" required>
        </div>
        <!-- Champ Durée -->
        <div class="mb-4">
          <label for="duree_event" class="block font-manrope text-sm font-bold text-zinc-900">Durée de l'événement</label>
          <select v-model="form.duree_event" id="duree_event" class="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm" required>
          <option>30min</option>
            <option>1h</option>
            <option>1h30</option>
            <option>2h</option>
            <option>2h30</option>
            <option>3h</option>
            <option>3h30</option>
            <option>4h</option>
            <option>4h30</option>
            <option>5h</option>
            <option>5h30</option>
            <option>6h</option>
            <option>6h30</option>
            <option>7h</option>
            <option>7h30</option>
            <option>8h</option>
            <option>8h30</option>
            <option>9h</option>
            <option>9h30</option>
            <option>10h</option>
            </select>
        </div>
        <div class="mb-4">
          <label for="difficulte_event" class="block font-manrope text-sm font-bold text-zinc-900">Difficulté</label>
          <select v-model="form.difficulte_event" id="difficulte_event" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required>
            <option>Débutant</option>
            <option>Amateur</option>
            <option>Intermédiaire</option>
            <option>Pro</option>
            <option>Expert</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="image" class="block font-manrope text-sm font-bold text-zinc-900">Image Card</label>
          <input
            @change="form.Image = $event.target?.files[0]"
            id="image"
            type="file"
            class="mt-1 block w-full border font-manrope text-sm font-bold border-zinc-300 rounded-xl p-2"
            accept="image/*"
            required
          />
        </div>
        <div class="mb-4">
          <label for="image" class="block font-manrope text-sm font-bold text-zinc-900">Image Full</label>
          <input
            @change="form.Image_full = $event.target?.files[0]"
            id="image"
            type="file"
            class="mt-1 block w-full border font-manrope text-sm font-bold border-gray-300 rounded-xl p-2"
            accept="image/*"
            required
          />
        </div>
        <div class="mt-6">
          <button type="submit" class="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-md shadow-md mb-16">Suivant</button>
        </div>
      </form>
    </div>

    <div v-else-if="step === 2">
      <h2 class="text-xl font-manrope text-zinc-900 font-bold mb-4">Étape 2: Aperçu des informations</h2>
      <div class="bg-gray-100 p-4 rounded-md shadow-md font-manrope">
        <p><strong >Nom:</strong> {{ form.Nom }}</p>
        <p><strong>Localisation:</strong> {{ form.Localisation }}</p>
        <p><strong>Date de l'événement:</strong> {{ form.Date_Events }}</p>
        <p><strong>Description:</strong> {{ form.description_events }}</p>
        <p><strong>Adresse:</strong> {{ form.adresse_event }}</p>
        <p><strong>Durée:</strong> {{ form.duree_event }}</p>
        <p><strong>Catégorie:</strong> {{ form.Categorie }}</p>
        <p><strong>Difficulté:</strong> {{ form.difficulte_event }}</p>
      </div>
      <div class="mt-6 flex justify-between">
        <button @click="previousStep" class="py-2 px-4 bg-zinc-600 text-white rounded-md shadow-md font-lexend hover:bg-zinc-700">Retour</button>
        <button @click="submitForm" class="py-2 px-4 bg-teal-600 text-white rounded-md shadow-md font-lexend hover:bg-teal-700">Confirmer</button>
      </div>
    </div>

    <div v-else-if="step === 3">
      <h2 class="text-xl font-manrope text-zinc-900 font-bold mb-4">Étape 3: Félicitations</h2>
      <p class="font-manrope text-sm">Votre Events a été créé ! Vous serez informé quand une personne voudra le rejoindre.</p>
      <div class="mt-6">
        <RouterLink to="/events"><button class="w-full py-2 px-4 font-lexend bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700">Retourner aux Events</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<script script lang="ts">
const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};
import { onMounted } from 'vue';
onMounted(() => {
  updateTitle('Création Event');
});
import { defineComponent, reactive, ref, computed } from 'vue';
import PocketBase from 'pocketbase';
import { EventsCategorieOptions } from '@/pocketbase-types';

export default defineComponent({
  setup() {
    const sports_options = ref(Object.values(EventsCategorieOptions))
    const pb = new PocketBase('http://127.0.0.1:8090');
    const form = reactive({
      Nom: '',
      Localisation: '',
      Date_Events: 'dd-mm-yyyy hh:mm',
      Favoris: false,
      nom_createur: '',
      description_events: '',
      adresse_event: '',
      duree_event: '',
      nom_participants1: '',
      relation_sport: '',
      Categorie: '',
      difficulte_event: 'Débutant',
      Image: 'null',
        Image_full: 'null',
    });

    const step = ref(1);

    const progressBarWidth = computed(() => {
      return `${(step.value - 1) * 50}%`;
    });

    const nextStep = () => {
      step.value++;
    };

    const previousStep = () => {
      step.value--;
    };

    const submitForm = async () => {
      try {
        const record = await pb.collection('Events').create(form);
        console.log('Event created:', record);
        nextStep();
      } catch (error) {
        console.error('Error creating event:', error);
      }
    };

    return { form, step, progressBarWidth, nextStep, previousStep, submitForm, sports_options };
  }
});

console.log('sports', EventsCategorieOptions)
</script>


