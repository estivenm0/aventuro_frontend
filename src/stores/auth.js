import router from '@/router'
import client  from '@/utils/api'
import { defineStore } from 'pinia'

const url = '/api/v1'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('user') || null),
    authErrors: [],
    authToken: localStorage.getItem('token') || null,

  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    token: (state) => state.authToken,
  },
  actions: {
    async getUser() {
      await this.getCsrf()
      const data = await client.get(`${url}/users`)
      this.authUser = data.data
    },

    async updateUser(user) {
        await client.post(`${url}/users`, user)
        .then(() => this.getUser())
        
    },

    async handleLogin(data) {
      this.authErrors = []

      try {
        const res = await client.post('/api/login', {
          email: data.email,
          password: data.password
        })
        const resD = res.data;
        this.authUser = resD.user;
        this.authToken = resD.token;

        localStorage.setItem('token', resD.token)
        localStorage.setItem('user', JSON.stringify(resD.user))

        router.push('/packages')
      } catch (error) {
        if (error.response?.status === 422) {
          this.authErrors = error.response.data.errors
        }else{
          this.authErrors[0] = [error.response?.data.error]
        }
      }
    },

    async handleRegister(data) {
      this.authErrors = []

      try {
        const res = await client.post('/api/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        })
        const resD = res.data;
        this.authUser = resD.user;
        this.authToken = resD.token;

        localStorage.setItem('token', resD.token)
        localStorage.setItem('user', JSON.stringify(resD.user))

        router.push('/packages')
      } catch (error) {
        if (error.response?.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },

    async handleLogout() {
      await client.post('/api/logout')
      this.authUser = null
      this.authToken = false
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      router.push('/')
    },


  }
})
