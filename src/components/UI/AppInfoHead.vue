<template>
    <div class="information-head__wrapper">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <p class="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">{{ headTitle }}</p>
        
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">{{ mainTitle }}</h2>
        
            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{{ text }}</p>
          </div>
        </div>
    </div>
</template>
<script setup="{props}" lang="ts">

const props = defineProps({
    headTitle: {
        type: String,
        default: () => ''
    },
    mainTitle: {
        type: String,
        default: () => ''
    },
    text: {
        type: String,
        default: () => ''
    }
})
</script>