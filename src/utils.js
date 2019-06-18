import Vue from 'vue'

export const initGlobal = (Component, options = {}) => {
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
}
