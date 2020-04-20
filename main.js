import Vue from 'vue'
import App from './App'

import accumulate from './pages/accumulate/index.vue'
Vue.component('accumulate',accumulate)

import profile from './pages/profile/index.vue'
Vue.component('profile',profile)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
