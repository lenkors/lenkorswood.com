<template>
  <div class="home__wrapper">
    <app-info-head
      :head-title="t('I18N_0020')"
      :main-title="t('I18N_0022')"
      :text="t('I18N_0021')"
    />
    <app-block-blog/>
  </div>
</template>

<script setup lang="ts">
import AppInfoHead from '@/components/UI/AppInfoHead.vue';
import AppBlockBlog from '@/components/UI/AppBlockBlog/index.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
