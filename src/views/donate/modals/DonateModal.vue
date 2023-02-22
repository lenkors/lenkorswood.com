<template>
    <div class="donate-wrapper flex flex-col justify-center items-center">
        <div class="title text-[24px] font-medium leading-[32px] text-center">
            {{ t('I18N_0009') }}
        </div>
        <div class="sub-title text-[16px] leading-[24px] mt-[8px] max-w-[300px] w-full text-center text-muted">
            {{ t('I18N_0026') }}
        </div>
        <div class="body-wrapper mt-[8px]">
            <div class="select-option">
                <select
                class="w-[431px] border-[1px] border-[muted] rounded-md py-[8px] px-[6px] mt-[8px]" v-model="selectedMethod">
                    <option disabled :value="undefined" class="text-muted">{{ t('I18N_0027') }}</option>
                    <option v-for="(item, index) in listOfAvailableDonates" :value="item"
                    :key="index">
                    {{ item.title }}
                    </option>
                </select>
            </div>
            <transition
                enter-active-class="duration-300 ease-out"
                enter-from-class="transform opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="transform opacity-0">
                <div class="selected-data mt-[12px]" v-if="!!selectedMethod">
                    <span class="font-semibold text-[18px] leading-5">{{ selectedMethod.title }}</span>
                    <div @click="copyToClipboard(selectedMethod.value)" class="info mt-[8px]">Address: {{ selectedMethod.value }}</div>
                    <div @click="copyToClipboard(selectedMethod?.info.holder)" class="info" v-if="!!selectedMethod?.info?.holder"> {{ selectedMethod?.info.holder }}</div>
                    <div @click="copyToClipboard(selectedMethod?.info.address)" class="info" v-if="!!selectedMethod?.info?.address"> {{ selectedMethod?.info.address }}</div>
                    <div @click="copyToClipboard(selectedMethod?.info.special)" class="info" v-if="!!selectedMethod?.info?.special"> {{ selectedMethod?.info.special }}</div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { DonateListItem } from '@/types/components';
import { copyToClipboard } from '@/hooks/useNative'
const props = defineProps({
    closeModal: {
        type: Function
    }
});
const { t } = useI18n();

const selectedMethod = ref<DonateListItem>(undefined);
const listOfAvailableDonates = <DonateListItem[]>[
    {
        title: 'Bitcoin',
        value: 'tb1q9gvwddh4sqq84f2dq7989c8se8mw7c3tc0y4hn'
    },
    {
        title: 'Visa',
        value: '4400 0000 0000 0000'
    }
]
</script>
<style scoped lang="scss">
.info {
    text-decoration: underline;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
</style>