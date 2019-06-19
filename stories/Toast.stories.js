/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { text, boolean } from '@storybook/addon-knobs'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './index.css'

import VuetifyEnhanced from '../src'

import Toast from '../src/components/Toast.vue'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    iconfont: 'mdi',
})
Vue.use(VuetifyEnhanced, {
    vuetify,
})

import MD from './readme.md'

storiesOf('Toast', module).add(
    '方法调用',
    () => ({
        components: { Toast },
        // props: {
        //     disabled: {
        //         default: boolean('Disabled', false),
        //     },
        //     label: {
        //         default: text('Text', 'Hello Storybook'),
        //     },
        // },
        vuetify,
        template: `
                <v-app> 
                    <v-btn @click="handleError">error</v-btn> 
                    <v-btn @click="handleDefault">default</v-btn> 
                </v-app>
            `,
        methods: {
            handleDefault() {
                this.$veToast('我是个提示', {
                    left: true,
                    top: true,
                })
            },
            handleError() {
                this.$veToast.error('我是个错误提示!', {
                    left: true,
                    top: true,
                })
            },
        },
    }),
    {
        info: {
            docsInPanel: false,
            summary: `
                \`\`\`js

                    methods: {
                        handleDefault() {
                            this.$veToast('我是个提示', {
                                left: true,
                                top: true,
                            })
                        },
                        handleError() {
                            this.$veToast.error('我是个错误提示!', {
                                left: true,
                                top: true,
                            })
                        },
                    }

                \`\`\` 
            
            `,
            // header: false,
        },
        readme: {
            // content: '<!-- PROPS -->',
            sidebar: MD,
            // content: MD,
        },
    },
)

/* eslint-enable react/react-in-jsx-scope */
