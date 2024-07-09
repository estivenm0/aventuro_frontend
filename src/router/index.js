import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'
import E404View from '@/views/E404View.vue'
import PackageView from '@/views/PackageView.vue'
import PackagesView from '@/views/PackagesView.vue'
import BookingsView from '@/views/BookingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CreateBookingView from '@/views/CreateBookingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView
        },
        {
          path: "/packages",
          name: "packages",
          component: PackagesView
        },
        {
          path: "/packages/:slug",
          name: "packages.details",
          component: PackageView
        },
        {
          path: "/bookings",
          name: "bookings",
          component: BookingsView
        },
        {
          path: "/bookings/create/:package",
          name: "bookings.create",
          component: CreateBookingView
        },
        {
          path: "/profile",
          name: "profile",
          component: ProfileView
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/:catchAll(.*)', 
      name: 'NotFound',
      component: E404View,
    },

    
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
