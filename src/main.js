import '@/bootstrap.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

// Application Components
import ValidationError from '@/components/ValidationError.vue'
import IconSpinner from '@/components/IconSpinner.vue'

// Application Styles
import '@/assets/main.css'


// Application initialize
const app = createApp(App)

app.component('ValidationError', ValidationError)
app.component('IconSpinner', IconSpinner)

app.use(createPinia())
app.use(router)

app.mount('#app')
