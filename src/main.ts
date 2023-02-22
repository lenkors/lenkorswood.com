import { createApp, h } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import router from './router';
import ru from './lang/ru.json';
import en from './lang/en.json';
import Toast, { PluginOptions, POSITION } from "vue-toastification";

import "vue-toastification/dist/index.css";
import './index.css';

// Main UI components

import AppHeader from './components/UI/AppHeader.vue';
import AppFooter from './components/UI/AppFooter.vue';
import AppInput from './components/UI/AppInput.vue';
import AppButton from './components/UI/AppButton.vue';
import AppModalWrapper from './components/UI/modals/index.vue';

// Main UI -- end --

const i18n = createI18n({
    legacy: false,
    locale: "ru",
    globalInjection: true,
    fallbackLocale: 'ru',
    messages: {
        ru: ru,
        en: en,
    },
})

const toastOptions:PluginOptions = {
    timeout: 3000,
    position: POSITION.TOP_RIGHT,
    hideProgressBar: true,
}

const pinia = createPinia();
const app = createApp({
    render: () => h(App),
});

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(Toast, toastOptions);

app.component('app-header', AppHeader);
app.component('app-footer', AppFooter);
app.component('app-input', AppInput);
app.component('app-button', AppButton);
app.component('app-modal', AppModalWrapper);

app.mount('#app');
