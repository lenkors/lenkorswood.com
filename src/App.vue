<template>
  <app-header/>
  <router-view v-slot="{ Component, route }" class="main__wrapper">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <app-footer/>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active,
.route-leave-active {
  transition: all .2s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px)
}
.main__wrapper {
  padding: 1em 5em;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
