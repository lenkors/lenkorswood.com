<template>
    <v-footer app
    :padless="false"
    >
    <v-card
          flat
          tile
          width="100%"
          class="red lighten-1 text-center"
        >
          <v-card-text>
            <v-btn
              v-for="(icon, index) in icons"
              :key="index"
              class="mx-4"
              icon
              @click="goToPower(icon.link)"
              :title="icon.title"
            >
              <v-icon size="24px">
                {{ icon.icn }}
              </v-icon>
            </v-btn>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
           2019 - {{ new Date().getFullYear() }} — <strong>Lenkors Wood</strong> — <small>v {{applicationVersion}}</small>
          </v-card-text>
        </v-card>
    <!-- -->
  </v-footer>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        icons:[
            {
                icn: 'mdi-vuetify',
                link: 'https://next.vuetifyjs.com/en/',
                title: 'UI powered by Vuetify'
            },
            {
                icn: 'mdi-vuejs',
                link: 'https://vuejs.org/',
                title: 'JS reactive framework Vue 3'
            },
            {
                icn: 'mdi-github',
                link: 'https://github.com/Lenkors',
                title: 'Lenkors wood'
            }
        ]
    }),
    methods: {
        goToPower (payload) {
            window.open(payload, '_blank')
        }
    },
    computed: {
        ...mapGetters(['applicationVersion'])
    },
}
</script>