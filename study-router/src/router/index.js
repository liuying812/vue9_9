import Vue from 'vue'
import Router from 'vue-router'
import Xiaoxue from '@/components/Xiaoxue'
import Daxue from '@/components/Daxue'
import Zhongxue from '@/components/Zhongxue/Zhongxue'
import Chuzhong from '@/components/Zhongxue/Chuzhong/Chuzhong'
import Chuyi from '@/components/Zhongxue/Chuzhong/Chuyi'
import Chuer from '@/components/Zhongxue/Chuzhong/Chuer'
import Chusan from '@/components/Zhongxue/Chuzhong/Chusan'
import Gaozhong from  '@/components/Zhongxue/Gaozhong/Gaozhong'
import Gaoyi from  '@/components/Zhongxue/Gaozhong/Gaoyi'
import Gaoer from  '@/components/Zhongxue/Gaozhong/Gaoer'
import Gaosan from  '@/components/Zhongxue/Gaozhong/Gaosan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xiaoxue',
      component: Xiaoxue
    },
    {
      path: '/xiaoxue',
      name: 'xiaoxue',
      component: Xiaoxue
    },
    {
      path: '/zhongxue',
      name: 'zhongxue',
      component: Zhongxue,
      children: [
        {
          path: '/zhongxue/chuzhong',
          name: 'chuzhong',
          component: Chuzhong,
          children: [
            {
              path: '/zhongxue/chuzhong/chuyi',
              name: 'chuyi',
              component: Chuyi
            },
            {
              path: '/zhongxue/chuzhong/chuer',
              name: 'chuer',
              component: Chuer
            },
            {
              path: '/zhongxue/chuzhong/chusan',
              name: 'chusan',
              component: Chusan
            }
          ]
        },

        {
          path: '/zhongxue/gaozhong',
          name: 'gaozhong',
          component: Gaozhong,
          children: [
            {
              path: '/zhongxue/gaozhong/gaoyi',
              name: 'gaoyi',
              component: Gaoyi
            },
            {
              path: '/zhongxue/gaozhong/gaoer',
              name: 'gaoer',
              component: Gaoer
            },
            {
              path: '/zhongxue/gaozhong/gaosan',
              name: 'gaosan',
              component: Gaosan
            }
          ]
        }

      ]
    },
    {
      path: '/daxue',
      name: 'daxue',
      component: Daxue
    }
  ]
})
