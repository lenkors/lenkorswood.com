<template>
    <div class="auth-wrapper">
        <div class="auth-card">
            <div class="auth-card-header">
                    <text-wrapper :params="{title: 'Form for : ', class: 'auth-card-title'}" :key="formTitle">
                        {{formTitle}}
                    </text-wrapper>
            </div>
            <v-divider></v-divider>
            <div class="auth-card-content">
                <label class="lw-wrapper-input">
                    Login:
                    <input type="text" class="lw-input" v-model="loginForm.login" />
                </label>
                <label class="lw-wrapper-input">
                    Password:
                    <input type="password" class="lw-input" v-model="loginForm.password" />
                </label>
            </div>
            <div class="auth-card-footer">
                <v-btn
                  flat
                  color="secondary"
                >
                  Sing Up
                </v-btn>
                <v-btn
                  flat
                  color="info"
                >
                  Sing In
                </v-btn>
                <v-btn
                flat
                variant="outlined"
                disabled
                title="NOT TIME YET. sorry("
                class="special-btn">
                Restore password
                </v-btn>
            </div>
            <div class="auth-card-special__footer social-btns">
                <h3 class="first-sec-fluid">Auth with:</h3>asdasdasdasd
                <v-btn
                    v-for="(icon, index) in authWithSocials"
                    :key="index"
                    class="mx-4 second-row"
                    icon
                    :title="icon.name"
                >
                  <v-icon size="24px">
                    {{ icon.icon }}
                  </v-icon>
                </v-btn>    
            </div>
        </div>
    </div>
</template>
<script>
import {changeTextByRandomInterval} from '@/custom-scripts/index.ts'
import textWrapper from '@/components/ui/textWrapper.vue'

export default {
  components: { textWrapper },
    data: () => ({
        formTitle: 'Login',
        namesForForm: ['Login', 'Signin', 'Log in', 'Sign In'],
        authWithSocials: [
            {
                name: 'Google',
                link: '',
                icon: 'mdi-google'
            },
            {
                name: 'Github',
                link: '',
                icon: 'mdi-github'
            },
            {
                name: 'Gitlab',
                link: '',
                icon: 'mdi-gitlab'
            },
            {
                name: 'facebook',
                link: '',
                icon: 'mdi-facebook'
            },
        ],
        loginForm: {
            email: '',
            password: ''
        }
    }),
    created () {
        setInterval(() => {
          this.formTitle = changeTextByRandomInterval({array: this.namesForForm})
        }, 2000)
    }
}
</script>