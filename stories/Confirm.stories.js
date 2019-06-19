/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue'

import { text, boolean } from '@storybook/addon-knobs'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './index.css'

import VuetifyEnhanced, { VeConfirm } from '../src'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    iconfont: 'mdi',
})
Vue.use(VuetifyEnhanced, {
    vuetify,
})

import MD from './readme.md'

storiesOf('Confirm', module).add(
    '方法调用',
    () => ({
        components: { VeConfirm },
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
                    <v-btn @click="handleClick">Hello Button</v-btn> 
                </v-app>
            `,
        methods: {
            handleClick() {
                this.$veConfirm('sssss', {
                    left: true,
                    color: 'error',
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
                    handleClick() {
                        this.$veConfirm('sssss', {
                            left: true,
                            color: 'error',
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
