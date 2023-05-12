import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

import VCalendar from 'v-calendar'
import VueGoodTablePlugin from 'vue-good-table-next'

import 'vue-good-table-next/dist/vue-good-table-next.css'
import 'v-calendar/style.css'
import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router).use(VCalendar).use(VueGoodTablePlugin)


app.mount('#app')