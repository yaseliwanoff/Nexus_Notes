<template>
  <section class="bg-zinc-50 dark:bg-zinc-950 px-6 py-24
                  border-y border-zinc-200 dark:border-zinc-800">
    <div class="max-w-7xl mx-auto">

      <!-- Badge -->
      <div class="flex justify-center mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-blue-500/8 dark:bg-blue-500/10
                    border border-blue-500/15 dark:border-blue-500/20">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Testimonials
          </span>
        </div>
      </div>

      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          People love it
        </h2>
        <p class="text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          Thinkers, writers, and developers who switched to Nexus Notes and never looked back.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(review, i) in testimonials" :key="i"
          class="relative rounded-3xl p-8
                 bg-white dark:bg-zinc-900
                 border border-zinc-200 dark:border-zinc-800
                 overflow-hidden">

          <!-- Top glow line -->
          <div class="absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <!-- Stars -->
          <div class="flex gap-0.5 mb-5">
            <svg v-for="s in 5" :key="s" class="w-3.5 h-3.5 text-blue-500"
                 viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
            "{{ review.text }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-5 border-t border-zinc-100 dark:border-zinc-800">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0
                        bg-blue-500/10 dark:bg-blue-500/15">
              <span class="text-xs font-semibold text-blue-500">
                {{ review.name.charAt(0) }}
              </span>
            </div>
            <div>
              <p class="text-xs font-semibold text-zinc-900 dark:text-white">{{ review.name }}</p>
              <p class="text-xs text-zinc-400 dark:text-zinc-600">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const testimonials = [
      {
        text: 'I\'ve tried Notion, Obsidian, Bear — nothing sticks like Nexus Notes. It\'s the first app that disappears and lets me just write.',
        name: 'Alex Turner',
        role: 'Product Designer',
      },
      {
        text: 'The tag system is genius in its simplicity. I have 200+ notes and can find anything in under 2 seconds.',
        name: 'Mia Kowalski',
        role: 'Software Engineer',
      },
      {
        text: 'Dark mode, Markdown, fast load times. Every choice feels intentional. This is what minimal productivity looks like.',
        name: 'James Okafor',
        role: 'Technical Writer',
      },
      {
        text: 'Switched from Notion. My notes load instantly, I stopped losing my train of thought waiting for blocks to render.',
        name: 'Sophie Renard',
        role: 'UX Researcher',
      },
      {
        text: 'Clean, fast, and it doesn\'t try to be everything. Nexus Notes respects my time and attention.',
        name: 'Daniel Mercer',
        role: 'Indie Developer',
      },
      {
        text: 'The editor toolbar is subtle but so useful. I can format without breaking my flow. Perfect daily driver.',
        name: 'Yuki Tanaka',
        role: 'Content Strategist',
      },
    ]

    return { testimonials }
  }
}
</script>
