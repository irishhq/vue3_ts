/*
 * @Author: huanghq
 * @Date: 2021-02-19 11:20:28
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-19 11:27:02
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'

// 引入
import CompositionApi from '@vue/composition-api';
// 注册
Vue.use(CompositionApi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
