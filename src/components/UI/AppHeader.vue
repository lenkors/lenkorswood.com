<template>
    <header class="py-8 app-header">
        <div class="app-header-title text-white cursor-pointer" @click="$router.push('/')">
            {{headerTitle}}
        </div>
        <div class="nav-wrapper text-white">
            <router-link to="/">{{ t('I18N_0022') }}</router-link> |
            <router-link to="/about">{{ t('I18N_0023') }}</router-link>
        </div>
        <div class="auth__wrapper text-white" v-if="isAuthAvailable">
            <span @click="$router.push('/auth?type=lgn')" class="cursor-pointer text-white"> {{ t('I18N_0004') }} </span>
            |
            <span @click="$router.push('/auth?type=rgstr')" class="cursor-pointer text-white"> {{ t('I18N_0005') }} </span> 
        </div>
    </header>
</template>
<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const nameList = ref([
        'Lenkors',
        'LW',
        'Lenkors Wood',
        'Lenkors_wood',
        'LEWM',
        'Lenian'
    ]);

    const isAuthAvailable = ref(false);
    const headerTitle = ref(nameList.value[0]);

    onMounted(() => {
        setInterval(() => {
            headerTitle.value = nameList.value[Math.floor(Math.random() * 6)];
        }, 2000)
    });
</script>
<style lang="scss" scope>
    @import './header.scss';
</style>