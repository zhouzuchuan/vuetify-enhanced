// import store from '../src/plugins/store'
// import i18n from '../src/plugins/i18n'
import vuetify from './global'

export default previewComponent => {
    // https://vuejs.org/v2/guide/render-function.html
    return {
        // store,
        // i18n,
        vuetify,
        render(createElement) {
            return createElement(previewComponent)
            // return createElement(
            //     'v-app',
            //     {
            //         props: {
            //             id: 'v-app',
            //         },
            //     },
            //     createElement(Object.assign(previewComponent)),
            // )
        },
    }
}
