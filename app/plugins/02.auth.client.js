export default defineNuxtPlugin(async () => {
  const userStore = useUserStore()
  const token = localStorage.getItem('token')

  if (token && !userStore.isLoggedIn) {
    try {
      await userStore.getUser()
    } catch (err) {
      // Токен протух или невалиден — чистим
      localStorage.removeItem('token', err)
      userStore.resetState()
    }
  }
})