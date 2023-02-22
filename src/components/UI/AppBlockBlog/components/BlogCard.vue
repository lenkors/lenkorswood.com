<template>
    <div class="card__wrapper">
        <div class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">July 19, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">New trends in Tech</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>