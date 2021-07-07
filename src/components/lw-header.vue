<template>
    <v-app-bar
     app
     absolute
     shrink-on-scroll
        >
      <transition name="slide-fade" mode="out-in">
        <v-app-bar-title class="lw-main-logo" :key="nameLogo" @click="goToMain()">
          {{nameLogo}}
        </v-app-bar-title>
      </transition>
      <v-spacer></v-spacer>
  
      <v-btn 
      v-for="(item, index) in links" 
      text 
      :key="index" 
      @click="btnAsLink({link: item.link})">
          <!-- <router-link :to="item.link"> -->
              {{item.title}}
          <!-- </router-link> -->
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          color="primary"
          elevation="2"
          fab
          @click="openModal"
        >
         Auth   
        </v-btn>
    </v-app-bar>
    <vue-final-modal
      v-model="showAuthModal"
      @click-outside="clickOutside"
      @cancel="showAuthModal = false"
      classes="modal-container"
      content-class="modal-content"
      name="authmodal"
    >
        <div class="modal__content" style="max-width: 452px">
            <button class="modal__close" @click="closeModal">
              X
            </button>
            <span class="modal__title">Auth</span>

            <hr>
            
            <lw-input key="input-login" v-model="loginForm.login" label="Login"/>
            <lw-input key="input-pass" v-model="loginForm.password" label="Password"/>
            
            <div class="lw-spaser-hor"></div>

            <div class="modal__btn">
                <v-btn 
                    flat
                    color="primary"
                >
                  Log in
                </v-btn>
                <v-btn
                    color="info"
                    @click="openSignUpModal()"
                >
                    Sign up
                </v-btn>
                <v-btn 
                    flat
                    small
                    disabled
                    title="not yet ready, wait for v 0.0.3"
                >
                  forgot you'r password ?
                </v-btn>

            </div>
            

        </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="showSignUpModal"
      @click-outside="clickOutside"
      @cancel="showSignUpModal = false"
      classes="modal-container"
      content-class="modal-content"
      name="signupmodal"
    >
        <div class="modal__content" style="max-width: 452px">
            <button class="modal__close" @click="showSignUpModal = false">
              X
            </button>
            <span class="modal__title">Sign Up</span>

            <hr>

            <lw-input key="input-email" v-model="register.email" label="Email"/>
            <lw-input key="input-username" v-model="register.username" label="Username"/>
            <lw-input key="input-password" v-model="register.password" label="Password"/>
            <lw-input key="input-repeatPassword" v-model="register.repeatPassword" label="Confirm password"/>
            
            <div class="lw-spaser-hor"></div>

            <div class="modal__btn">
                <v-btn 
                    flat
                    color="primary"
                    @click="openModal()"
                >
                  Back to Log in
                </v-btn>
                <v-btn
                    color="info"
                    @click="openSignUpModal()"
                >
                    Sign up
                </v-btn>
            </div>
        </div>
    </vue-final-modal>

</template>
<script>
import lwInput from './ui/lw-input.vue'
export default {
  components: { lwInput },
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
              'LW'
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
       clickOutside () {
           this.showAuthModal = false
       },

        closeModal () {
           this.showAuthModal = false
        },

        openModal () {
            this.showAuthModal = true
           this.showSignUpModal = false
            this.$vfm.show('authmodal')
        },

        openSignUpModal () {
           this.showAuthModal = false
           this.showSignUpModal = true
            this.$vfm.show('signupmodal')
        },

        btnAsLink (payload) {
            const { link } = payload
            this.$router.push(link)
        },

       /**
        * Переход на главную
        */
       goToMain () {
           this.$router.push('/')
       }
   },
  created () {
    setInterval( () => {
        let index = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        this.nameLogo = this.logosNames[index]
    }, 5000) 
  }
}
</script>
<style scoped>
::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(.modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.dark-mode div::v-deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>