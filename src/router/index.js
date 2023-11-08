import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: '',
            path: '/',
            redirect: '/home'
        }, {
            name: 'home',
            path: '/home',
            component: () => import('../views/homePage.vue') // 路由懒加载，加在页面路径
        }, {
            name: 'cart',
            path: '/cart',
            component: () => import('../views/cartPage.vue')
        }
    ]
})

export default router