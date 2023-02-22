<template>
    <div class="auth-signin__container">
        <div class="auth-signin-fields__wrapper">
            <div class="auth-signin__field"
            v-for="(item, index) in fields"
            :key="`auth-form-input-${index}`">
                <app-input
                ui-style="auth"
                :label="item.title"
                v-model="item[item.dataType]"
                :type="item.type"
                :value="item[item.dataType]"
                :placeholder="item.placeholder"
                :special-style="item.specialStyle"
                >
                </app-input>
            </div>
            <div class="auth-signin__actions">
                <div class="auth-signin__actions-row">
                    <app-button 
                    tag="button">
                        <template #title>
                            Вход
                        </template>
                    </app-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

    const fields = ref([
        {
            title: 'Email',
            placeholder: 'Введите ваш email',
            type: 'text',
            email: '',
            dataType: 'email',
            specialStyle: 'mb-[16px]'
        },
        {
            title: 'Пароль',
            placeholder: 'Введите пароль',
            type: 'password',
            dataType: 'password',
            password: '',
            specialStyle: ''
        },
    ])
</script>
<style scoped lang="scss">
    .auth-signin {

    } 

</style>