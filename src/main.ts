/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-09-21 15:09:24
 * @LastEditors: wujing
 * @LastEditTime: 2020-09-24 11:24:19
 */
import { createApp } from 'vue'
import App from './App'
import router from './router';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


createApp(App).use(Antd).use(router).mount('#app')
