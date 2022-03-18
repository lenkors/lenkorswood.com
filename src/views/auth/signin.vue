<template>
    <div class="auth-wrapper">
        <div class="auth-card">
            <div class="auth-card-header">
                    <h2>
                        Form for : {{formTitle}}
                    </h2>
            </div>
            <v-divider></v-divider>
            <div class="auth-card-content">
                <lw-input label="login" v-model="loginForm.login" />
            </div>
            <div class="auth-card-footer"></div>
        </div>
    </div>
</template>
<script>
import {changeTextByRandomInterval} from '@/custom-scripts/index.ts'

export default {
    data: () => ({
        formTitle: 'Login',
        namesForForm: ['Login', 'Signin', 'Log in', 'Sign In'],
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