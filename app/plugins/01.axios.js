import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  axios.defaults.baseURL = config.public.apiBaseUrl
  axios.defaults.withCredentials = false
  axios.defaults.proxyHeaders = false

  // Автоматически подставляет токен в каждый запрос
  axios.interceptors.request.use((requestConfig) => {
    if (import.meta.client) {
      const token = localStorage.getItem('token')
      if (token) {
        requestConfig.headers.Authorization = `Bearer ${token}`
      }
    }
    return requestConfig
  })

  // Перехватывает 401 — чистит сессию и редиректит на логин
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (import.meta.client && error.response?.status === 401) {
        const route = useRoute()
        // Не трогаем публичные страницы
        const publicRoutes = ['/login', '/register']
        if (!publicRoutes.includes(route.path)) {
          const userStore = useUserStore()
          localStorage.removeItem('token')
          userStore.resetState()
          navigateTo('/login')
        }
      }
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: axios
    }
  }
})
