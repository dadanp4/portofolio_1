import { createRouter, createWebHistory } from 'vue-router'
import Viewproduct from '@/viewproduct.vue'
import Product from '@/product.vue'
import Login from '@/login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/viewproduct/:id',
            name: 'Viewproduct',
            component: Viewproduct
    
        },
        {
            path: '/',
            name: 'Product',
            component: Product
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

export default router