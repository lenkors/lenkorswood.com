<template>
  <v-app>
     <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->
    <lw-header/>
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <lw-footer/>
  </v-app>
</template>

<script>
import lwHeader from './components/lw-header.vue'
import lwFooter from './components/lw-footer.vue'

export default {
  name: 'App',
  components: {
    'lw-header': lwHeader,
    'lw-footer': lwFooter
  },
  data: () => ({
      
  }),
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },


}
</script>
