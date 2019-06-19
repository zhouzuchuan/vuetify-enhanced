import Vue from 'vue'
import Toast from './components/Toast.vue'
import VeConfirm from './components/Confirm.vue'

const components = {
    VeConfirm,
}

export const initGlobal = (Component, options = {}, childFn = {}) => {
    const property = (options && options.property) || `$${Component.name}`

    const container = (options && options.container) || document.body

    const vuetify = (options && options.vuetify) || {}

    Vue.prototype[property] = (message, options = {}) => {
        return new Promise(resolve => {
            const cmp = new Vue(
                Object.assign({}, Component, {
                    vuetify,
                    propsData: Object.assign({}, { message, ...options }),
                    destroyed: () => {
                        container.removeChild(cmp.$el)
                        resolve(cmp.value)
                    },
                }),
            )
            container.appendChild(cmp.$mount().$el)
        })
    }

    Object.entries(childFn).forEach(([name, props]) => {
        Vue.prototype[property][name] = (message, options) => {
            Vue.prototype[property](message, { ...options, ...props })
        }
    })
}

const install = function(Vue, opts = {}) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component)
    })

    initGlobal(
        Toast,
        {
            property: '$veToast',
            ...opts,
        },
        {
            error: { color: 'error' },
            success: { color: 'primary' },
        },
    )

    initGlobal(VeConfirm, {
        property: '$veConfirm',
        ...opts,
    })
}

export { VeConfirm }

export default {
    version: require('../package.json').default.version,
    install,
    ...components,
}
