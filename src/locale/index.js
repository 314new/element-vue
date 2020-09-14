import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { localRead } from '@/libs/util'
import customZhCn from './lang/zh-CN'
import customEnUs from './lang/en-US'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = localLang || localRead('local') || 'zh-CN'

Vue.config.lang = lang

// vue-i18n 6.x+写法
Vue.locale = () => {}
const messages = {
  'zh-CN': Object.assign(zhLocale, customZhCn),
  'en-US': Object.assign(enLocale, customEnUs)
}
const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n