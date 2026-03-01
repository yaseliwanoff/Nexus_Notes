<template>
  <div class="main-wrapper">
    <LayoutSidebar>
      <div class="sidebar-content-text-wrapper">
        <h1 class="sidebar-title">Welcome! Create your account, it's free.</h1>
        <div class="sidebar-description">
          <p>To continue using our service, you need to create an account.</p>
        </div>
      </div>
      <div class="sidebar-form-wrapper">
        <form class="sidebar-form" @submit.prevent="handleRegister">
          <div class="sidebar-names-wrapper">
            <div class="sidebar-form-firstname">
              <UiInput v-model="fName" type-input="text" placeholder="Your name" label="First Name" />
            </div>
            <div class="sidebar-form-lastname">
              <UiInput v-model="lName" type-input="text" placeholder="Last name" label="Last Name" />
            </div>
          </div>
          <div class="sidebar-other-wrapper">
            <UiInput v-model="email" type-input="email" placeholder="example@test.com" label="Email" />
            <UiInput v-model="password" type-input="password" label="Password" />
            <UiInput v-model="repeatPassword" type-input="password" label="Repeat password" />
          </div>
          <p v-if="error" class="error-text">{{ error }}</p>
          <button class="register-btn" type="submit" :disabled="loading">
            {{ loading ? 'Creating...' : 'Create account' }}
          </button>
          <p>Already have an account? <NuxtLink to="/login">Log in</NuxtLink></p>
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
      fName: '',
      lName: '',
      email: '',
      password: '',
      repeatPassword: '',
      error: '',
      loading: false,
    }
  },

  methods: {
    async handleRegister() {
      this.error = ''

      if (!this.fName || !this.lName || !this.email || !this.password) {
        this.error = 'Please fill in all fields'
        return
      }

      if (this.password !== this.repeatPassword) {
        this.error = 'Passwords do not match'
        return
      }

      this.loading = true

      try {
        await this.userStore.register(this.fName, this.lName, this.email, this.password, this.repeatPassword)
        this.router.push('/login')
      } catch (err) {
        this.error = err?.response?.data?.message || 'Registration failed'
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

.register-btn {
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

.register-btn::before {
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

.register-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 14px 30px rgba(69, 131, 224, 0.45);
}

.register-btn:hover::before {
  opacity: 1;
}

.register-btn:active {
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
