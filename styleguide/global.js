import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'

import VuetifyEnhanced from '../src'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    iconfont: 'mdi',
})

Vue.use(VuetifyEnhanced, {
    vuetify,
})

export default vuetify
