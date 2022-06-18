<template>
    <header class="app-header">
        <div class="app-header-title">
            {{headerTitle}}
        </div>
        <div class="nav-wrapper">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div class="auth__wrapper">
            <span> Войти </span>
            /
            <span> Регистрация </span> 
        </div>
    </header>
</template>
<script lang='ts'>
import { onMounted, ref } from 'vue-demi'
export default {
    name: 'AppHeader',

    setup() {
        const nameList = ref([
            'Lenkors',
            'LW',
            'Lenkors Wood',
            'Lenkors_wood',
            'LEWM',
            'Lenian'
        ]);

        const headerTitle = ref(nameList.value[0]);

        onMounted(() => {
            setInterval(() => {
                headerTitle.value = nameList.value[Math.floor(Math.random() * 6)];
            }, 2000)
        });

        return {
            headerTitle,
            nameList,
        }
    }
}
</script>
<style lang="scss" scope>
    @import './header.scss';
</style>