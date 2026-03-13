<template>
  <footer
    class="relative overflow-hidden
           bg-white dark:bg-black
           border-t border-zinc-200 dark:border-zinc-800"
  >
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -bottom-32 left-1/2 -translate-x-1/2
                  w-[900px] h-[400px]
                  bg-[radial-gradient(ellipse_at_center,rgba(69,131,224,0.12),transparent_70%)]
                  blur-3xl" />
      <div class="absolute top-0 right-0 w-[400px] h-[200px]
                  bg-[radial-gradient(ellipse_at_top_right,rgba(69,131,224,0.07),transparent_60%)]
                  blur-2xl" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">
        <div class="sm:col-span-2 lg:col-span-1">
          <span class="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Nexus Notes
          </span>
          <p class="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-[220px]">
            A minimal and powerful note-taking app designed for modern thinkers.
          </p>
          <div class="mt-6 flex items-center gap-2">
            <a v-for="social in socials" :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                     bg-zinc-100 dark:bg-zinc-900
                     border border-zinc-200 dark:border-zinc-800
                     text-zinc-500 dark:text-zinc-400
                     hover:border-zinc-300 dark:hover:border-zinc-700
                     hover:text-zinc-900 dark:hover:text-white"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="social.icon" />
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
            Product
          </h4>
          <ul class="space-y-2.5">
            <li v-for="item in productLinks" :key="item.label">
              <NuxtLink :to="item.to"
                class="text-sm text-zinc-600 dark:text-zinc-400
                       hover:text-zinc-900 dark:hover:text-white
                       transition-colors duration-150">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
            Company
          </h4>
          <ul class="space-y-2.5">
            <li v-for="item in companyLinks" :key="item.label">
              <NuxtLink :to="item.to"
                class="text-sm text-zinc-600 dark:text-zinc-400
                       hover:text-zinc-900 dark:hover:text-white
                       transition-colors duration-150">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
            Stay Updated
          </h4>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Get product updates and productivity tips.
          </p>

          <div class="flex gap-2">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="your@email.com"
              class="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl text-sm outline-none transition
                     bg-white dark:bg-zinc-900
                     border border-zinc-200 dark:border-zinc-700
                     text-zinc-900 dark:text-zinc-100
                     placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            />
            <button
              @click="handleNewsletter"
              class="newsletter-btn shrink-0"
            >
              Join
            </button>
          </div>

          <p v-if="newsletterSuccess"
            class="mt-2 text-[12px] text-emerald-600 dark:text-emerald-400">
            ✓ You're on the list!
          </p>
        </div>

      </div>
      <div class="h-px bg-zinc-200 dark:bg-zinc-800 mb-8" />
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-zinc-400 dark:text-zinc-600 order-2 sm:order-1">
          © {{ new Date().getFullYear() }} Nexus Notes. All rights reserved.
        </p>

        <nav class="flex items-center gap-1 order-1 sm:order-2
                    px-2 py-1.5 rounded-2xl
                    bg-zinc-100 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800">
          <NuxtLink v-for="link in legalLinks" :key="link.label" :to="link.to"
            class="px-3 py-1 rounded-xl text-xs font-medium transition-all duration-200
                   text-zinc-500 dark:text-zinc-400
                   hover:text-zinc-900 dark:hover:text-white
                   hover:bg-white dark:hover:bg-zinc-800">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const newsletterEmail = ref('')
    const newsletterSuccess = ref(false)

    const handleNewsletter = () => {
      if (!newsletterEmail.value) return
      newsletterSuccess.value = true
      newsletterEmail.value = ''
      setTimeout(() => { newsletterSuccess.value = false }, 3000)
    }

    const socials = [
      {
        label: 'Twitter',
        href: '#',
        icon: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>'
      },
      {
        label: 'GitHub',
        href: '#',
        icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'
      },
      {
        label: 'RSS',
        href: '#',
        icon: '<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1" fill="currentColor" stroke="none"/>'
      },
    ]

    const productLinks = [
      { label: 'Features', to: '/#features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Updates', to: '/updates' },
      { label: 'Roadmap', to: '/roadmap' },
    ]

    const companyLinks = [
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ]

    const legalLinks = [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Cookies', to: '/cookies' },
    ]

    return {
      newsletterEmail, newsletterSuccess, handleNewsletter,
      socials, productLinks, companyLinks, legalLinks
    }
  }
}
</script>

<style scoped>
.newsletter-btn {
  padding: 10px 16px;
  border-radius: 0.75rem;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  background: linear-gradient(145deg, rgb(69,131,224), rgb(58,115,210));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(69,131,224,0.3);
  transition: all 0.25s ease;
  white-space: nowrap;
}
.newsletter-btn:hover {
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 20px rgba(69,131,224,0.4);
}
.newsletter-btn:active {
  transform: translateY(0);
}
</style>
