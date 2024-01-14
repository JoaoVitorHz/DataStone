import { createRouter, createWebHistory } from 'vue-router'
import AssociateProducts from '@/components/AssociateProducts.Vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AssociateProducts
    },
    {
      path: '/ProductForm',
      name: 'ProductForm',
      component: () => import('../components/ProductForm.vue')
    },
    {
      path: '/ClientForm',
      name: 'ClientForm',
      component: () => import('../components/ClientForm.vue')
    },
    {
      path: '/ListClients',
      name: 'ListClients',
      component: () => import('../components/ListClients.vue')
    },
    {
      path: '/ListProduct',
      name: 'ListProduct',
      component: () => import('../components/ListProduct.vue')
    },
  ]
})

export default router
