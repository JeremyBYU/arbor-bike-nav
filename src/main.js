import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Vue from 'vue'
import App from './App'

Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
