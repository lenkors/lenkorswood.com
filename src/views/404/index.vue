<template>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div class="grid sm:grid-cols-2 gap-8">
      <!-- content - start -->
      <div class="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
        <p class="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">Error 404</p>
        <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">{{ t('I18N_0017') }}</h1>

        <p class="text-gray-500 md:text-lg text-center sm:text-left mb-8">{{ t('I18N_0018') }}</p>

        <router-link 
        to="/"
        class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500
        active:text-gray-700 text-sm md:text-base font-semibold
        text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >{{ t('I18N_0019') }}</router-link>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
        <img src="https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        loading="lazy" alt="Photo by @heydevn" class="w-full h-full object-cover object-center absolute inset-0" />
      </div>
      <!-- image - end -->
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>