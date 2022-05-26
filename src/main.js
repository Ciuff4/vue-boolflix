import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import { library } from '@fortawesome/fontawesome-svg-core'
import { FaStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(FaStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);