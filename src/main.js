import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFinalModal from 'vue-final-modal'
import lwInput from './components/ui/lw-input.vue'

// Style
import './assets/styles/vendor.scss'

const app = createApp(App)
app.use(VueFinalModal(), { 
    componentName: 'VueFinalModal',
    key: '$vfm',    
    dynamicContainerName: 'ModalsContainer'
})
app.component('lw-input', lwInput)
app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app') 
