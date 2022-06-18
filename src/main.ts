import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { createPinia } from 'pinia';
import router from './router';

// Tailwind + global style
import './assets/tailwind.css';
// Tailwind -- end --


// Main UI components

import AppHeader from './components/UI/AppHeader.vue';
import AppFooter from './components/UI/AppFooter.vue';

// Main UI -- end --

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);

app.component('app-header', AppHeader);
app.component('app-footer', AppFooter);

app.mount('#app');
