<template>
  <section class="bg-white dark:bg-black px-6 py-24">
    <div class="max-w-4xl mx-auto">

      <div class="relative rounded-3xl overflow-hidden px-10 py-20 text-center
                  bg-zinc-50 dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800">

        <!-- Ambient glow -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[300px]
                      bg-[radial-gradient(ellipse_at_center,rgba(69,131,224,0.15),transparent_70%)]
                      blur-3xl" />
        </div>

        <!-- Top glow line -->
        <div class="absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

        <!-- Badge -->
        <div class="relative flex justify-center mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                      bg-blue-500/8 dark:bg-blue-500/10
                      border border-blue-500/15 dark:border-blue-500/20">
            <div class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span class="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
              Free to use
            </span>
          </div>
        </div>

        <!-- Heading -->
        <div class="relative mb-4">
          <h2 class="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Start writing today
          </h2>
        </div>

        <p class="relative text-base text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto mb-10">
          No setup, no subscriptions. Create an account and your first note in under a minute.
        </p>

        <!-- Actions -->
        <div class="relative flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink to="/register" class="cta-primary-btn">
            Get started for free
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/notes"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                   text-zinc-600 dark:text-zinc-400
                   border border-zinc-200 dark:border-zinc-800
                   hover:bg-zinc-100 dark:hover:bg-zinc-800
                   hover:text-zinc-900 dark:hover:text-white
                   hover:border-zinc-300 dark:hover:border-zinc-700
                   transition-all duration-200">
            Browse notes
          </NuxtLink>
        </div>

        <!-- Stats strip -->
        <div class="relative mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800
                    flex flex-col sm:flex-row items-center justify-center gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {{ stat.value }}
            </p>
            <p class="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">{{ stat.label }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const stats = [
      { value: '100%', label: 'Free forever' },
      { value: '<1s', label: 'Load time' },
      { value: '∞', label: 'Notes you can create' },
    ]

    return { stats }
  }
}
</script>

<style scoped>
.cta-primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(145deg, rgb(69,131,224), rgb(58,115,210));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 20px rgba(69,131,224,0.35);
  transition: all 0.25s ease;
}
.cta-primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 14px 30px rgba(69,131,224,0.45);
}
.cta-primary-btn:active {
  transform: translateY(0);
}
</style>