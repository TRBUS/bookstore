import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    meta: {
      title: '新书上市'
    },
    component: () => import('../components/BooksNew.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    meta: {
      title: '图书分类'
    },
    component: () => import('../views/Books.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索结果'
    },
    component: () => import('../views/Books.vue')
  },
  {
    path: '/book/:id',
    name: 'book',
    meta: {
      title: '图书'
    },
    component: () => import('../views/Book.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import(/* webpackChunkName: "user" */'../components/UserRegister.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "user" */'../components/UserLogin.vue')
  },
  {
    path: '/check',
    name: 'check',
    meta: {
      title: '结算',
      requiresAuth: true
    },
    component: () => import('../views/Checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
