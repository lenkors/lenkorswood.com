<template>
    <div>
        <app-info-head
            :head-title="t('I18N_0008')"
            :main-title="t('I18N_0009')"
            :text="t('I18N_0010')"
        />
        <div class="donate-field__wrapper">
            <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
              <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex bg-gray-100 rounded-lg overflow-hidden">
                  <!-- image - start -->
                  <div class="sm:w-1/3 lg:w-1/2 hidden sm:block bg-gray-200 relative">
                    <img src="https://images.unsplash.com/photo-1473958675193-405a3c163875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="Photo by mymind" class="w-full h-full object-cover object-center absolute inset-0" />
                  </div>
                  <!-- image - end -->
              
                  <!-- content - start -->
                  <div class="w-full sm:w-2/3 lg:w-1/2 flex items-center p-4 sm:p-8 lg:pl-10">
                    <div class="w-full flex sm:block flex-col items-center">
                      <div class="mb-4 sm:mb-8">
                        <h2 class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">{{ t('I18N_0013') }}</h2>
                        <p class="text-gray-500 text-center sm:text-left" :title="t('I18N_0014')">{{ t('I18N_0012') }}</p>
                      </div>
                  
                      <div class="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
                        <!-- <input :placeholder="t('I18N_0011')" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                        v-model="donateValue" /> -->
                    
                        <button 
                        type="button"
                        @click="donateHandler"
                        class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2"
                        >{{ t('I18N_0015') }}</button>
                        </div>
                  
                      <!-- <p class="text-gray-400 text-xs text-center sm:text-left">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Term of Service</a> and <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p> -->
                    </div>
                  </div>
                  <!-- content - end -->
                </div>
              </div>
            </div>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-in-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <app-modal @close-modal="closeModal" v-if="isModalShow">
            <template #content>
              <donate-modal/>
            </template>
          </app-modal>
        </transition>
    </div>
</template>
<script setup lang="ts">
import AppInfoHead from '@/components/UI/AppInfoHead.vue';
import { useMainStore } from '@/store/main';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'vue-toastification';
import DonateModal from './modals/DonateModal.vue';

const { t } = useI18n();
const toast = useToast();
const mainStore = useMainStore()

const isModalShow = ref(false);

const donateHandler = () => {
  isModalShow.value = true;
}

const closeModal = () => {
  isModalShow.value = false;
}
</script>