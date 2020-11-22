import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tours',
    component: Home,
    beforeEnter: (to, from, next) => {
      let title = to.name
      document.title = title + ' | All Tours'
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/register',
    name: 'UserRegister',
    component: () =>
      import(
        /* webpackChunkName: "user-auth" */ '../components/user-auth/RegisterForm'
      )
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () =>
      import(
        /* webpackChunkName: "user-auth" */ '../components/user-auth/LoginForm'
      )
  },
  {
    path: '/user/:activity',
    name: 'UserProfile',
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ '../components/user-profile/UserProfile'
      ),
    props: true
  },
  {
    path: '/tour/:slug',
    name: 'Tour',
    component: () =>
      import(/* webpackChunkName: "tour" */ '../components/tours/TourIndex'),
    beforeEnter: (to, from, next) => {
      let title = to.name
      let keys = Object.keys(to.params)
      keys = to.params[keys[0]]
        .replace(/-/gi, ' ')
        .replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
      if (keys.length) {
        title = `${to.name}s | ${keys}`
        if (to.params[keys[1]]) {
          title += ` ${to.params[keys[1]]}`
        }
      }
      document.title = title
      next()
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'Page404',
    component: () =>
      import(/* webpackChunkName: "not found" */ '../components/PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
