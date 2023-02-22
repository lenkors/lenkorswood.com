<template>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">{{ t('I18N_0024') }}</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{{ t('I18N_0025') }}</p>
    </div>
    <!-- text - end -->

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
      <!-- article - start -->
        <blog-card />
      <!-- article - end -->
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import BlogCard from './components/BlogCard.vue'; 

const { t } = useI18n();
</script>