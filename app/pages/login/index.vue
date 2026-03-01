<template>
  <div class="main-wrapper">
    <LayoutSidebar>
      <div class="sidebar-content-text-wrapper">
        <h1 class="sidebar-title">Log in to your account</h1>
        <div class="sidebar-description">
          <p>To continue using our project, you need to log in to your account.</p>
        </div>
      </div>
      <div class="sidebar-form-wrapper">
        <form class="sidebar-form" @submit.prevent="handleLogin">
          <div class="sidebar-other-wrapper">
            <UiInput v-model="email" type-input="email" placeholder="example@test.com" label="Email" />
            <UiInput v-model="password" type-input="password" label="Password" />
          </div>
          <p v-if="error" class="error-text">{{ error }}</p>
          <button class="login-btn" type="submit" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Log in' }}
          </button>
          <p>Don't have an account? <NuxtLink to="/register">Register</NuxtLink></p>
        </form>
      </div>
    </LayoutSidebar>
  </div>
</template>

<script>
definePageMeta({
  middleware: 'guest'
})

export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    return { userStore, router }
  },

  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false,
    }
  },

  methods: {
    async handleLogin() {
      this.error = ''

      if (!this.email || !this.password) {
        this.error = 'Please fill in all fields'
        return
      }

      this.loading = true

      try {
        await this.userStore.login(this.email, this.password)
        this.router.push('/')
      } catch (err) {
        this.error = err?.response?.data?.message || 'Invalid email or password'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
.main-wrapper {
  display: flex;
  gap: 50px;
}
</style>

<style scoped>
.sidebar-title {
  font-size: 30px;
  font-weight: 700;
  max-width: 400px;
  margin-bottom: 10px;
}

.sidebar-description {
  opacity: 60%;
  max-width: 250px;
}

.sidebar-content-text-wrapper {
  margin-bottom: 40px;
}

.login-btn {
  background: linear-gradient(145deg, rgb(69, 131, 224), rgb(58, 115, 210));
  color: #fff;
  border-radius: 999px;
  padding-block: 10px;
  width: 100%;
  font-weight: 500;
  margin-bottom: 5px;

  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  transition: all 0.25s ease;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    0 8px 20px rgba(69, 131, 224, 0.35);
}

.login-btn::before {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: inherit;
  background: radial-gradient(
    ellipse at center,
    rgba(255,255,255,0.6) 0%,
    rgba(255,255,255,0.3) 45%,
    rgba(255,255,255,0) 75%
  );
  filter: blur(14px);
  z-index: -1;
  opacity: 0.75;
  transition: opacity 0.25s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 14px 30px rgba(69, 131, 224, 0.45);
}

.login-btn:hover::before {
  opacity: 1;
}

.login-btn:active {
  transform: translateY(0);
  box-shadow:
    inset 0 3px 8px rgba(0,0,0,0.2),
    0 6px 16px rgba(69, 131, 224, 0.3);
}

.sidebar-form p {
  opacity: 70%;
  font-size: 13px;
  text-align: center;
}

.sidebar-form p a {
  color: rgb(69, 131, 224);
  text-decoration: underline;
}

.sidebar-names-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.sidebar-other-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
