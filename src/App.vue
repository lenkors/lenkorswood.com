<template>
  <app-header/>
  <router-view class="main__wrapper"/>
  <app-footer/>
</template>

<style lang="scss">
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
