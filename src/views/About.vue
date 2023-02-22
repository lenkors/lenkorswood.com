<template>
  <div class="about">
    <h1 class="text-[32px] leading-[48px] font-semibold">{{ t('I18N_0001') }}</h1>
    <div class="about__road-map--wrapper flex flex-col justify-start ">
      <div class="title--wrapper w-full border-b-[1px] border-b-[#a7abb4] pb-[4px]">
        <div class="title font-medium text-[24px] leading-[32px]">{{ t('I18N_0002') }}</div>
        <div class="sub-title mt-[8px] text-[14px] leading-[18px] text-[#6B7280]">{{ t('I18N_0003') }}</div>
      </div>
      <div class="road-map--wrapper mt-[16px]">
          <ul>
              <li :class="{'line-through': status}" v-for="({title, status}, index) in roadMap" :key="index">{{ title }}</li>
          </ul>
      </div>
      <div class="road-map__anim--wrapper w-[200px]">
        <Vue3Lottie v-once :animationData="carJSON" :height="200" :width="200" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import carJSON from '@/assets/lottie/car.json';
import 'vue3-lottie/dist/style.css';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const roadMap = [
  { title: 'Create a post controller',
    status: true  
  },
  { title: 'Refactoring Auth module',
    status: false  
  },
  { title: 'Post page',
    status: false  
  },
  { title: 'Profile page',
    status: false  
  },
  { title: 'Crypto payment functional',
    status: false  
  }
]
</script>
