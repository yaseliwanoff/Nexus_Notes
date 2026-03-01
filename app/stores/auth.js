import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    fName: '',
    lName: '',
    email: '',
    api_token: '',
    isLoggedIn: false,
  }),
  
  actions: {
    async login(email, password) {
      const { $axios } = useNuxtApp()
      await $axios.post('/api/login', {
        email: email,
        password: password,
      }).then((result) => {
        localStorage.setItem('token', result.data.data.api_token)
        this.$state.api_token = result.data.data.api_token
        this.$state.email = result.data.data.email
        this.$state.id = result.data.data.id
        this.$state.isLoggedIn = true
      })
    },

    async register(fName, lName, email, password, repeatPassword) {
      const { $axios } = useNuxtApp()
      await $axios.post('/api/register', {
        fName: fName,
        lName: lName,
        email: email,
        password: password,
        password_confirmation: repeatPassword
      })
    },

    async getUser() {
      const { $axios } = useNuxtApp()
      const result = await $axios.get('/api/user')
      const data = result.data.data
      this.$state.id = data.id
      this.$state.fName = data.fName
      this.$state.lName = data.lName
      this.$state.email = data.email
      this.$state.api_token = localStorage.getItem('token')
      this.$state.isLoggedIn = true
    },

    async logout() {
      const { $axios } = useNuxtApp()
      await $axios.post('/api/logout')
      localStorage.removeItem('token')
      this.resetState()
    },

    resetState() {      
      this.$state.id = ''
      this.$state.fName = ''
      this.$state.lName = ''
      this.$state.email = ''
      this.$state.api_token = ''
      this.$state.isLoggedIn = false
    },
  },
})
