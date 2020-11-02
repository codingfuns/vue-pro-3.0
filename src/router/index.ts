/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-09-23 11:02:59
 * @LastEditors: wujing
 * @LastEditTime: 2020-09-24 10:04:12
 */
import { RouteRecordRaw,createRouter, createWebHistory } from "vue-router";

const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    name: 'login',
    component:()=>import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;