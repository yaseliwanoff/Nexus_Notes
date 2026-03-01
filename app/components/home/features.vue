<template>
  <section class="bg-white dark:bg-black px-6 py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto">

      <!-- Badge -->
      <div class="flex justify-center mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-blue-500/8 dark:bg-blue-500/10
                    border border-blue-500/15 dark:border-blue-500/20">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Features
          </span>
        </div>
      </div>

      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          Everything you need
        </h2>
        <p class="text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          A focused set of tools that stay out of your way so you can think clearly and write freely.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div v-for="feature in features" :key="feature.title"
          class="group relative rounded-3xl p-8 overflow-hidden
                 bg-zinc-50 dark:bg-zinc-900
                 border border-zinc-200 dark:border-zinc-800
                 hover:border-zinc-300 dark:hover:border-zinc-700
                 transition-all duration-300 hover:-translate-y-1">

          <!-- Glow line top -->
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-blue-500/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <!-- Icon -->
          <div class="w-10 h-10 rounded-2xl mb-6 flex items-center justify-center
                      bg-blue-500/10 dark:bg-blue-500/15">
            <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1.8" v-html="feature.icon" />
          </div>

          <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {{ feature.description }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const features = [
      {
        title: 'Markdown Support',
        description: 'Write with full Markdown — headings, lists, code blocks, and more. Your notes stay structured and readable.',
        icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
      },
      {
        title: 'Tags & Organisation',
        description: 'Label your notes with custom tags and find anything instantly. No folders, no clutter — just clarity.',
        icon: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
      },
      {
        title: 'Instant Search',
        description: 'Find any note by title, content or tag in milliseconds. Search that feels like thinking.',
        icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
      },
      {
        title: 'Dark & Light Mode',
        description: 'Seamlessly switch between themes. Your workspace adapts to your environment and mood.',
        icon: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
      },
      {
        title: 'Secure by Default',
        description: 'Your notes are yours. Authentication is token-based and every request is protected.',
        icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      },
      {
        title: 'Fast & Minimal',
        description: 'Built with Nuxt and Tailwind. No bloat, no distractions. Just a fast, clean writing experience.',
        icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      },
    ]

    return { features }
  }
}
</script>
