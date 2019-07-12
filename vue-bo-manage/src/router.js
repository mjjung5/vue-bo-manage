import Vue from 'vue'
import Router from 'vue-router'
import sellerHome from '@/components/sellerHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/sellerMain'
    },
    {
      path: '/sellerMain',
      name: 'seller-home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( '@/components/sellerHome.vue')
      component: sellerHome,
      children: [
        {
          path: '/join',
          component: resolve => require(['@/components/sellerqna.vue'], resolve),
          meta: { title: '신규주문' }
        }
      ]

    }

  ]
})
