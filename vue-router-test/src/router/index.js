import Vue from 'vue'
import Router from 'vue-router'
import User from './user'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageTwo0 from '@/components/PageTwo0'
import PageTwo1 from '@/components/PageTwo1'
import PageTwo2 from '@/components/PageTwo2'
import PageHome from '@/components/PageHome'
import NameView from '@/components/NameView'
import NameViewLeft from '@/components/NameViewLeft'
import NameViewRight from '@/components/NameViewRight'
import NameViewChildTop from '@/components/NameViewChildTop'
import NameViewChild from '@/components/NameViewChild'
import NameViewChildRight from '@/components/NameViewChildRight'
import NameViewChildLeft from '@/components/NameViewChildLeft'
import Params from '@/components/Params'
const LazyPageOne = () => import('@/components/LazyPageOne')
const LazyPageTwo = () => import('@/components/LazyPageTwo')
const LazyPageGroup1 = () => import(/* webpackChunkName: "group-lazy" */ '@/components/LazyPageGroup1')
const LazyPageGroup2 = () => import(/* webpackChunkName: "group-lazy" */ '@/components/LazyPageGroup2')

Vue.use(Router)

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/PageHome',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      alias: '/kk',
      component: HelloWorld,
      meta: {
        name: 'HelloWorldeName',
        age: 1111,
        level: '23'
      }
    },
    {
      path: '/PageOne/:id',
      name: 'PageOne',
      component: PageOne,
      beforeEnter: (to, from, next) => {
        next()
        console.log('I am beforeEnter')
      }
    },
    {
      path: '/Params/:id',
      name: 'Params',
      component: Params,
      props: true
    },
    {
      path: '/PageTwo',
      name: 'PageTwo',
      component: PageTwo,
      children: [
        {
          path: '/',
          name: 'PageTwo0',
          component: PageTwo0
        },
        {
          path: 'PageTwo1',
          name: 'PageTwo1',
          component: PageTwo1
        },
        {
          path: 'PageTwo2',
          name: 'PageTwo2',
          component: PageTwo2
        }
      ]
    },
    {
      path: '/NameView',
      name: 'NameView',
      components: {
        default: NameView,
        a: NameViewLeft,
        b: NameViewRight
      }
    },
    {
      path: '/NameViewChildTop',
      name: 'NameViewChildTop',
      component: NameViewChildTop,
      children: [
        {
          path: '/',
          name: 'NameViewChild',
          components: {
            default: NameViewChild,
            a: NameViewChildLeft,
            b: NameViewChildRight
          }
        }
      ]
    },
    {
      path: '/LazyPageOne',
      name: 'LazyPageOne',
      component: LazyPageOne
    },
    {
      path: '/LazyPageTwo',
      name: 'LazyPageTwo',
      component: LazyPageTwo
    },
    {
      path: '/LazyPageGroup1',
      name: 'LazyPageGroup1',
      component: LazyPageGroup1
    },
    {
      path: '/LazyPageGroup2',
      name: 'LazyPageGroup2',
      component: LazyPageGroup2
    },
    {
      path: '*',
      redirect: (to) => {
        if (to.path === '/sdf') {
          return '/HelloWorld'
        }
        return '/PageHome'
      }
    }
  ]
})

// 路由钩子函数
// beforeEach即将要进某个路由时候
router.beforeEach((to, from, next) => {
  console.log('I am beforeEach')
  next()
  // console.log(to)
  // console.log(to.meta)
  if (to.matched.some(record => record.meta.name)) {
    // console.log('存在meta')
  }
  // console.log(from)
})

// 和beforeEeach类似
// router.beforeResolve((to, from, next) => {
//   next(true)
//   console.log('I am beforeResolve')
// })

// afterEach进入组件之后，当然，就没有next了，已经进入了组件
router.afterEach((to, from) => {
  console.log('I am afterEach')
})

router.addRoutes(User)

export default router
