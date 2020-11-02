/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-09-23 16:05:49
 * @LastEditors: wujing
 * @LastEditTime: 2020-09-23 16:06:09
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
