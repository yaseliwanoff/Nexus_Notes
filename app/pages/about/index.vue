<template>
  <section class="min-h-screen bg-white dark:bg-black">
    <div class="max-w-4xl mx-auto px-6 py-24">
      <div class="flex justify-center mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-blue-500/8 dark:bg-blue-500/10
                    border border-blue-500/15 dark:border-blue-500/20">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            About
          </span>
        </div>
      </div>
      <div class="relative rounded-3xl overflow-hidden
                  bg-zinc-50 dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800">
        <div class="absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div class="p-8 sm:p-12">
          <div class="flex flex-col sm:flex-row items-start gap-8">
            <div class="shrink-0">
              <div class="relative w-24 h-24">
                <div class="w-24 h-24 rounded-2xl overflow-hidden
                            bg-zinc-200 dark:bg-zinc-800
                            border border-zinc-300 dark:border-zinc-700
                            flex items-center justify-center">
                  <svg class="w-10 h-10 text-zinc-400 dark:text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div class="absolute -bottom-1.5 -right-1.5
                            w-5 h-5 rounded-full
                            bg-white dark:bg-zinc-900
                            border-2 border-white dark:border-zinc-900
                            flex items-center justify-center">
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center gap-2.5 mb-2">
                <h1 class="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                  Yaroslav Selivanov
                </h1>
                <span class="text-xs font-medium px-2.5 py-1 rounded-full
                             bg-zinc-100 dark:bg-zinc-800
                             text-zinc-500 dark:text-zinc-400
                             border border-zinc-200 dark:border-zinc-700">
                  born 2006
                </span>
              </div>

              <p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">
                Frontend Developer
              </p>

              <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
                Passionate frontend developer building clean, functional and visually
                refined web interfaces. I focus on user experience, attention to detail,
                and writing code that is both readable and elegant. Always learning,
                always shipping.
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="tag in tags" :key="tag"
                  class="text-xs px-2.5 py-1 rounded-full
                         bg-zinc-100 dark:bg-zinc-800
                         text-zinc-600 dark:text-zinc-400
                         border border-zinc-200 dark:border-zinc-700">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        <div class="px-8 sm:px-12 py-6 flex flex-wrap gap-2.5">

          <NuxtLink
            to="https://t.me/um_thisisneverthat"
            target="_blank"
            external
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium
                   no-underline transition-all duration-150
                   bg-white dark:bg-zinc-800
                   border border-zinc-200 dark:border-zinc-700
                   text-zinc-600 dark:text-zinc-300
                   hover:bg-zinc-50 dark:hover:bg-zinc-700
                   hover:text-zinc-900 dark:hover:text-white
                   hover:border-zinc-300 dark:hover:border-zinc-600
                   hover:-translate-y-px"
          >
            <svg class="w-4 h-4 text-blue-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Telegram</span>
          </NuxtLink>

          <NuxtLink
            to="https://github.com/yaseliwanoff"
            target="_blank"
            external
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium
                   no-underline transition-all duration-150
                   bg-white dark:bg-zinc-800
                   border border-zinc-200 dark:border-zinc-700
                   text-zinc-600 dark:text-zinc-300
                   hover:bg-zinc-50 dark:hover:bg-zinc-700
                   hover:text-zinc-900 dark:hover:text-white
                   hover:border-zinc-300 dark:hover:border-zinc-600
                   hover:-translate-y-px"
          >
            <svg class="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </NuxtLink>

          <NuxtLink
            to="mailto:yselivanov857@gmail.com"
            external
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium
                   no-underline transition-all duration-150
                   bg-white dark:bg-zinc-800
                   border border-zinc-200 dark:border-zinc-700
                   text-zinc-600 dark:text-zinc-300
                   hover:bg-zinc-50 dark:hover:bg-zinc-700
                   hover:text-zinc-900 dark:hover:text-white
                   hover:border-zinc-300 dark:hover:border-zinc-600
                   hover:-translate-y-px"
          >
            <svg class="w-4 h-4 text-red-400 group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Email</span>
          </NuxtLink>

        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <div v-for="stat in stats" :key="stat.label"
          class="rounded-2xl p-6 text-center
                 bg-zinc-50 dark:bg-zinc-900
                 border border-zinc-200 dark:border-zinc-800">
          <p class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-1">
            {{ stat.value }}
          </p>
          <p class="text-xs text-zinc-500 dark:text-zinc-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
      <div class="mt-4 rounded-3xl p-8 sm:p-10
                  bg-zinc-50 dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800">
        <h2 class="text-xs font-semibold uppercase tracking-widest
                   text-zinc-400 dark:text-zinc-500 mb-5">
          Tech Stack
        </h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in stack" :key="tech"
            class="text-sm px-3.5 py-2 rounded-xl font-medium
                   bg-white dark:bg-zinc-800
                   text-zinc-700 dark:text-zinc-300
                   border border-zinc-200 dark:border-zinc-700
                   hover:border-blue-500/30 dark:hover:border-blue-500/30
                   hover:text-blue-600 dark:hover:text-blue-400
                   transition-colors duration-150 cursor-default">
            {{ tech }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const tags = [
      'Frontend Developer',
      'Vue.js',
      'Nuxt',
      'Open to work',
    ]

    const stats = [
      { value: '19 (2006 year)', label: 'Years old' },
      { value: '2+', label: 'Years of experience' },
      { value: '10+', label: 'Projects built' },
    ]

    const stack = [
      'Vue.js', 'Nuxt', 'JavaScript', 'TypeScript',
      'Tailwind CSS', 'HTML', 'CSS', 'Node.js',
      'Express', 'Firebase', 'Git', 'Figma',
      'React', 'Redux', 'Zustand', 'MobX',
      'shadcn/ui', 'Ant Design', 'Material UI', 'Next.js',
      'GSAP', 'Framer Motion', 'SASS/SCSS', 'Pug', 'Docker', 'Bun', 'vite', 'webpack', 'yarn', 'zod'
    ]

    return { tags, stats, stack }
  }
}
</script>
