<template>
    <div class="app-modal__wrapper w-[100vw] h-[100vh] fixed overflow-hidden bg-[#6b72804d] inset-0 flex items-center justify-center" >
        <div v-on-click-outside="closeModal" :class="`app-modal__container bg-[#FFFFFF] text-black
        rounded-[6px] p-[24px]`">
        <!--  -->
            <slot name="content" :close-modal="closeModal"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
/**
 * Модальное окно (обертка)
 */
const emit = defineEmits(['closeModal']);
const closeModal = () => emit('closeModal', true);

</script>
<style scoped lang="scss">
  @import '@/assets/styles/media.scss';

.app-modal {
    &__wrapper {
        @media ($tablet) {
            width: 100%;
            height: 100%;
            inline-size: 100%;
        }
    }
    &__container {
        box-shadow: 0px 20px 25px -5px rgba(16, 24, 40, 0.1), 0px 8px 10px -6px rgba(16, 24, 40, 0.1);
    }
}
</style>