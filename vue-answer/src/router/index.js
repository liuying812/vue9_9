import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Item from '@/pages/item/index'
import Result from '@/pages/result/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
   {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
