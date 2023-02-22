<template>
    <section class="auth-container flex w-full h-full justify-center items-center">
        <div class="auth-form">
            <div class="auth-form-field__wrapper">
                <sign-in v-if="isLoginForm"></sign-in>
                <sign-up v-else></sign-up>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';

    const isLoginForm = ref(false);
    const isRegisterForm = ref(false);
    
    const route = useRoute();

    const handlerAuthForm = () => {
        if (route.query?.type === 'lgn') isLoginForm.value = true
        else isRegisterForm.value = true
    }

    handlerAuthForm()

</script>