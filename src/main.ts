import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFinalModal from 'vue-final-modal';
import svgBase from './components/ui/svgBase.vue';
import textWrapper from './components/ui/textWrapper.vue';
import Toast, {POSITION, PluginOptions} from "vue-toastification";
// Style
import './assets/styles/vendor.scss';
import 'aos/dist/aos.css';
import "vue-toastification/dist/index.css";

const app = createApp(App)

const toastOptions: PluginOptions = {
    position: POSITION.TOP_RIGHT
    // You can set your default options here
};

// Packages

app.use(VueFinalModal(), { 
    componentName: 'VueFinalModal',
    key: '$vfm',    
    dynamicContainerName: 'ModalsContainer'
})
app.use(vuetify)
app.use(Toast, toastOptions);


// Components

app.component('svg-base', svgBase)
app.component('text-wrapper', textWrapper)


app.use(router)
app.use(store)
app.mount('#app') 
