import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId:
    '886804012347-dv5tsqqbvb148dshna1fq7a4dhrn2bpu.apps.googleusercontent.com',
})
app.use(router)

app.mount('#app')
