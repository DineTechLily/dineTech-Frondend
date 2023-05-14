import { createApp } from 'vue'
import { createPinia } from 'pinia'
// vee-validate
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n';
import { required, email, numeric, min, max, is_not } from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// css
import 'material-icons/iconfont/material-icons.css';
import './tailwind.css'

import App from './App.vue'
import router from './router'

// vee-validate 表單驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('numeric', numeric)
defineRule('max', max)
defineRule('min', min)
defineRule('is_not', is_not)
configure({
  generateMessage: localize({
    zhTW,
  }),
});
setLocale('zhTW');

const app = createApp(App)

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(createPinia())
app.use(router)

app.mount('#app')
