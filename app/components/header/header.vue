<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-black/20'
      : 'bg-transparent border-b border-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <NuxtLink to="/"
          class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition-opacity">
          Nexus Notes
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-1
                    px-2 py-1.5 rounded-2xl
                    bg-zinc-100 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800">
          <NuxtLink
            v-for="item in navItems" :key="item.to"
            :to="item.to"
            class="px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200
                   text-zinc-500 dark:text-zinc-400
                   hover:text-zinc-900 dark:hover:text-white
                   hover:bg-white dark:hover:bg-zinc-800"
            active-class="!text-zinc-900 dark:!text-white !bg-white dark:!bg-zinc-800 shadow-sm"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
      <div class="flex items-center gap-2">
        <div v-if="!userStore.id" class="hidden sm:flex items-center gap-2">
          <button
            @click="showLoginModal = true"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                   text-zinc-600 dark:text-zinc-400
                   hover:bg-zinc-100 dark:hover:bg-zinc-800
                   hover:text-zinc-900 dark:hover:text-white
                   border border-zinc-200 dark:border-zinc-800"
          >
            Login
          </button>
          <button
            @click="handleRegisterRoute"
            class="register-btn"
          >
            Create account
          </button>
        </div>
        <div v-else class="relative group">
          <button
            class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-200
                   bg-zinc-100 dark:bg-zinc-900
                   border border-zinc-200 dark:border-zinc-800
                   text-zinc-700 dark:text-zinc-300
                   hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <div class="w-6 h-6 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
              <span class="text-xs font-semibold text-blue-500">
                {{ userStore.email?.charAt(0).toUpperCase() }}
              </span>
            </div>
            <span class="text-sm font-medium truncate max-w-[140px] hidden sm:block">
              {{ userStore.email }}
            </span>
            <svg class="w-3 h-3 opacity-40 transition-transform duration-200 group-hover:rotate-180 shrink-0" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="absolute right-0 top-full mt-2 w-48 rounded-2xl overflow-hidden
                      opacity-0 invisible translate-y-1
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200 ease-out z-50
                      bg-white dark:bg-zinc-900
                      border border-zinc-200 dark:border-zinc-800
                      shadow-xl shadow-black/8 dark:shadow-black/40">
            <NuxtLink to="/settings"
              class="flex items-center gap-2.5 px-4 py-3 text-sm
                     text-zinc-700 dark:text-zinc-300
                     hover:bg-zinc-50 dark:hover:bg-zinc-800
                     transition-colors duration-150">
              <svg class="w-4 h-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              Settings
            </NuxtLink>
            <div class="h-px mx-3 bg-zinc-100 dark:bg-zinc-800"/>
            <button @click="handleLogout"
              class="w-full flex items-center gap-2.5 px-4 py-3 text-sm
                     text-red-500 hover:bg-red-500/8
                     transition-colors duration-150">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Log out
            </button>
          </div>
        </div>
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all
                 text-zinc-500 dark:text-zinc-400
                 hover:bg-zinc-100 dark:hover:bg-zinc-800
                 border border-zinc-200 dark:border-zinc-800"
        >
          <svg v-if="!mobileOpen" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <Transition name="mobile-menu">
      <div v-if="mobileOpen"
        class="md:hidden border-t border-zinc-200 dark:border-zinc-800
               bg-white dark:bg-black px-6 py-4 space-y-1">
        <NuxtLink
          v-for="item in navItems" :key="item.to"
          :to="item.to"
          @click="mobileOpen = false"
          class="flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                 text-zinc-600 dark:text-zinc-400
                 hover:bg-zinc-100 dark:hover:bg-zinc-900
                 hover:text-zinc-900 dark:hover:text-white"
          active-class="!bg-zinc-100 dark:!bg-zinc-900 !text-zinc-900 dark:!text-white"
        >
          {{ item.label }}
        </NuxtLink>
        <div v-if="!userStore.id" class="flex flex-col gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-900">
          <button
            @click="showLoginModal = true; mobileOpen = false"
            class="w-full py-2.5 rounded-xl text-sm font-medium transition-all
                   text-zinc-600 dark:text-zinc-400
                   border border-zinc-200 dark:border-zinc-800
                   hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Login
          </button>
          <button @click="handleRegisterRoute" class="register-btn w-full">
            Create account
          </button>
        </div>
      </div>
    </Transition>
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showLoginModal" class="modal-overlay" @click.self="closeModal">
          <div class="relative w-full max-w-[420px] px-8 pt-9 pb-8 rounded-3xl
                      bg-white dark:bg-zinc-900
                      border border-zinc-200 dark:border-zinc-800
                      shadow-2xl dark:shadow-black/60">

            <button @click="closeModal"
              class="absolute top-4 right-4 p-1.5 rounded-lg transition
                     text-zinc-400
                     hover:bg-zinc-100 dark:hover:bg-zinc-800
                     hover:text-zinc-700 dark:hover:text-zinc-200">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div class="mb-7">
              <div class="w-10 h-10 rounded-xl mb-4 flex items-center justify-center
                          bg-blue-500/10 dark:bg-blue-500/15">
                <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </div>
              <h2 class="text-[22px] font-semibold tracking-tight mb-1.5 text-zinc-900 dark:text-white">
                Welcome back
              </h2>
              <p class="text-sm text-zinc-500 dark:text-zinc-400">
                Log in to your Nexus Notes account.
              </p>
            </div>

            <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">Email</label>
                <input
                  v-model="email" type="email" placeholder="example@test.com" required
                  class="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition
                         bg-white dark:bg-zinc-800
                         border border-zinc-200 dark:border-zinc-700
                         text-zinc-900 dark:text-zinc-100
                         placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">Password</label>
                <input
                  v-model="password" type="password" placeholder="••••••••" required
                  class="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition
                         bg-white dark:bg-zinc-800
                         border border-zinc-200 dark:border-zinc-700
                         text-zinc-900 dark:text-zinc-100
                         placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <p v-if="loginError"
                class="text-[13px] text-red-500 bg-red-500/8 border border-red-500/20 rounded-xl px-3.5 py-2.5">
                {{ loginError }}
              </p>

              <button type="submit" :disabled="loginLoading" class="login-btn">
                <span v-if="!loginLoading">Log in</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Logging in...
                </span>
              </button>

              <p class="text-center text-[13px] text-zinc-500 dark:text-zinc-600">
                Don't have an account?
                <NuxtLink to="/register" @click="closeModal" class="text-blue-500 underline underline-offset-2">
                  Register
                </NuxtLink>
              </p>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script>
export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const showLoginModal = ref(false)
    const mobileOpen = ref(false)
    const scrolled = ref(false)
    const isDark = ref(false)

    const email = ref('')
    const password = ref('')
    const loginError = ref('')
    const loginLoading = ref(false)

    const navItems = [
      { to: '/', label: 'Home' },
      { to: '/notes', label: 'Notes' },
      { to: '/create', label: 'Create note' },
      { to: '/about', label: 'About' },
    ]

    const toggleTheme = () => {
      isDark.value = !isDark.value
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }

    const handleScroll = () => {
      scrolled.value = window.scrollY > 10
    }

    onMounted(() => {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const closeModal = () => {
      showLoginModal.value = false
      email.value = ''
      password.value = ''
      loginError.value = ''
    }

    return {
      userStore, router, navItems,
      showLoginModal, mobileOpen, scrolled, isDark,
      email, password, loginError, loginLoading,
      closeModal, toggleTheme
    }
  },

  methods: {
    async handleLogout() {
      await this.userStore.logout()
      this.router.push('/login')
    },

    handleRegisterRoute() {
      navigateTo('/register')
    },

    async handleLogin() {
      this.loginError = ''
      if (!this.email || !this.password) {
        this.loginError = 'Please fill in all fields'
        return
      }
      this.loginLoading = true
      try {
        await this.userStore.login(this.email, this.password)
        this.closeModal()
        this.router.push('/')
      } catch (err) {
        this.loginError = err?.response?.data?.message || 'Invalid email or password'
      } finally {
        this.loginLoading = false
      }
    }
  }
}
</script>

<style scoped>
.register-btn {
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  background: linear-gradient(145deg, rgb(69,131,224), rgb(58,115,210));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 6px 16px rgba(69,131,224,0.35);
  transition: all 0.25s ease;
}
.register-btn:hover {
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 24px rgba(69,131,224,0.45);
}
.register-btn:active { transform: translateY(0); }

.login-btn {
  background: linear-gradient(145deg, rgb(69,131,224), rgb(58,115,210));
  color: #fff;
  border-radius: 999px;
  padding: 11px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 20px rgba(69,131,224,0.35);
}
.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 14px 30px rgba(69,131,224,0.45);
}
.login-btn:active { transform: translateY(0); }
.login-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
}

.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
