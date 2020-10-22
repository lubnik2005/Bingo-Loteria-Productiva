import Vue from 'vue'
import App from './App.vue'

//import VueMaterial from 'vue-material'
import { MdApp, MdToolbar, MdList, MdIcon, MdField, MdButton, MdSnackbar, MdTable, MdContent, MdDrawer, MdTabs, MdDialog} from 'vue-material/dist/components'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

require('./app.scss');

Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdButton)
Vue.use(MdSnackbar)
Vue.use(MdTable)
Vue.use(MdContent)
Vue.use(MdDrawer)
Vue.use(MdTabs)
Vue.use(MdDialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
