import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

/**
 * UI框架选择
 */
Vue.use(ElementUI, { locale })

createApp(App).mount('#app')
