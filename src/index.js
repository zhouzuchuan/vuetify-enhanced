import Toast from './components/Toast.vue'
import Confirm from './components/Confirm.vue'

import { initGlobal } from './utils'

const components = {}

const install = function(Vue, opts = {}) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component)
    })

    // Vue.use(InfiniteScroll)
    // Vue.use(Loading.directive)

    // Vue.prototype.$ELEMENT = {
    //     size: opts.size || '',
    //     zIndex: opts.zIndex || 2000,
    // }

    initGlobal(Toast, {
        property: '$veToast',
        ...opts,
    })
    initGlobal(Confirm, {
        property: '$veConfirm',
        ...opts,
    })

    // Vue.prototype.$loading = Loading.service
    // Vue.prototype.$msgbox = MessageBox
    // Vue.prototype.$alert = MessageBox.alert
    // Vue.prototype.$confirm = MessageBox.confirm
    // Vue.prototype.$prompt = MessageBox.prompt
    // Vue.prototype.$notify = Notification
    // Vue.prototype.$message = Message
}

export default {
    version: '0.0.1',
    install,
    ...components,
}
