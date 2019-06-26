// import store from '../src/plugins/store'
// import i18n from '../src/plugins/i18n'
import vuetify from './global'
import ThemeBtn from './components/ThemeBtn.vue'

export default previewComponent => {
    // https://vuejs.org/v2/guide/render-function.html
    return {
        // store,
        // i18n,
        vuetify,
        render(createElement) {
            return createElement('div', {}, [
                createElement('v-app', {}, [
                    createElement('v-card', {}, [createElement(Object.assign(previewComponent))]),
                ]),
                createElement(ThemeBtn),
            ])
        },
    }
}
