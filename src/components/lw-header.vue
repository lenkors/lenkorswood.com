<template>
    <v-app-bar
     app
     absolute
     shrink-on-scroll
        >
      <transition name="slide-fade" mode="out-in">
        <v-app-bar-title class="lw-main-logo" :key="nameLogo" @click="btnAsLink({link: '/'})">
          {{nameLogo}}
        </v-app-bar-title>
      </transition>
      <div class="lw-headers-wrapper">
        <div class="lw-btn-nav">
          <v-btn 
          v-for="(item, index) in links" 
          text 
          :key="index" 
          @click="btnAsLink({link: item.link})">
          <!-- <router-link :to="item.link"> -->
              {{item.title}}
          <!-- </router-link> -->
          </v-btn>
        </div>

        <div class="lw-btn_auth-wrapper">
          <v-btn
            color="primary"
            elevation="2"
            fab
            @click="btnAsLink({link: '/login'})"
          >
          Auth   
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <div class="underheader"></div>
    <!-- TODO: [SF-5] Refactoring!!! -->

</template>
<script>
import {changeTextByRandomInterval} from '@/custom-scripts/index.ts'

export default {
   data () {
       return {
           nameLogo: 'Lenkors',
           showAuthModal: false,
           showSignUpModal: false,
            logosNames: [
              'Lenkors',
              'Lenkors_Wood',
              'Len',
              'Lenian_Black',
              'Lenkors WooD',
              'LW',
            ],
            links: [
                
                {
                    title: 'Blog',
                    link: '/blog'
                },
                {
                    title: 'About',
                    link: '/about'
                },
            ],
            loginForm: {
                login: undefined,
                password: undefined
            },

            register: {
              email: undefined,
              username: undefined,
              password: undefined,
              repeatPassword: undefined,
            }
       }
   },
   methods: {
        btnAsLink (payload) {
            const { link } = payload
            this.$router.push(link)
        },
   },
  created () {
    setInterval( () => {
      this.nameLogo = changeTextByRandomInterval({array: this.logosNames})
        // let index = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        // this.nameLogo = this.logosNames[index]
    }, 5000) 
    
  }
}
</script>