<template>
  <section class="relative overflow-hidden bg-white dark:bg-black">
    <div class="pointer-events-none absolute inset-0
                bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
                dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
                bg-[size:48px_48px]" />
    <div class="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
                bg-blue-500/10 dark:bg-blue-500/8 blur-[100px]" />
    <div class="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full
                bg-indigo-500/8 dark:bg-indigo-500/6 blur-[120px]" />

    <div class="relative max-w-7xl mx-auto px-6 py-28 lg:py-40">
      <div class="grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full text-xs font-medium
                      border border-zinc-200 dark:border-zinc-800
                      bg-zinc-50 dark:bg-zinc-900
                      text-zinc-600 dark:text-zinc-400">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"/>
            Smart note taking for modern thinkers
          </div>
          <h1 class="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08]
                     text-zinc-900 dark:text-white">
            Capture Ideas.
            <br/>
            <span class="bg-[linear-gradient(135deg,rgb(69,131,224),rgb(99,102,241))]
                         bg-clip-text text-transparent">
              Organize Thoughts.
            </span>
            <br/>
            Stay Focused.
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-lg">
            A minimal and powerful note-taking app designed to help you think clearly,
            stay organized, and never lose an idea again.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-3">
            <button class="hero-btn-primary px-6 py-3 rounded-xl text-sm font-semibold">
              Get Started
            </button>
            <button class="px-6 py-3 rounded-xl text-sm font-semibold
                           border border-zinc-200 dark:border-zinc-800
                           bg-white dark:bg-zinc-900
                           text-zinc-700 dark:text-zinc-300
                           hover:bg-zinc-50 dark:hover:bg-zinc-800
                           transition-all duration-200">
              Live Demo
            </button>
          </div>
          <div class="mt-16 flex gap-10">
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-2xl font-bold text-zinc-900 dark:text-white">{{ stat.value }}</p>
              <p class="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500 tracking-wide">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 rounded-3xl blur-2xl scale-95
                      bg-blue-500/10 dark:bg-blue-500/8" />

          <div class="relative rounded-3xl overflow-hidden
                      border border-zinc-200 dark:border-zinc-800
                      bg-white dark:bg-zinc-900
                      shadow-2xl shadow-zinc-200/60 dark:shadow-black/60">
            <div class="flex items-center justify-between px-5 py-3.5
                        border-b border-zinc-100 dark:border-zinc-800
                        bg-zinc-50 dark:bg-zinc-900">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 bg-red-400 rounded-full"/>
                <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"/>
                <div class="w-2.5 h-2.5 bg-green-400 rounded-full"/>
              </div>
              <span class="text-xs text-zinc-400 dark:text-zinc-600 font-mono">nexusnotes.app</span>
              <div class="w-16"/>
            </div>
            <div class="p-7">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-xs font-medium tracking-widest uppercase
                             text-zinc-400 dark:text-zinc-600 mb-1">Today</p>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">
                    Today's Focus
                  </h3>
                </div>
                <div class="w-8 h-8 rounded-xl flex items-center justify-center
                            bg-blue-500/10 dark:bg-blue-500/15">
                  <svg class="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
              </div>
              <ul class="space-y-2.5 mb-6">
                <li v-for="(task, i) in tasks" :key="i"
                  class="flex items-center gap-3 px-4 py-3 rounded-xl
                         bg-zinc-50 dark:bg-zinc-800/60
                         border border-zinc-100 dark:border-zinc-800">
                  <div class="w-4 h-4 rounded-md border-2 flex items-center justify-center flex-shrink-0"
                    :class="task.done
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-zinc-300 dark:border-zinc-600'">
                    <svg v-if="task.done" class="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="1.5 5 4 7.5 8.5 2.5"/>
                    </svg>
                  </div>
                  <span class="text-sm"
                    :class="task.done
                      ? 'line-through text-zinc-400 dark:text-zinc-600'
                      : 'text-zinc-700 dark:text-zinc-300'">
                    {{ task.text }}
                  </span>
                </li>
              </ul>
              <div class="px-4 py-3.5 rounded-xl
                          border-l-2 border-blue-500
                          bg-blue-500/5 dark:bg-blue-500/8">
                <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
                  "The simplest way to capture your thoughts and turn them into action."
                </p>
              </div>
              <div class="flex gap-2 mt-5">
                <span v-for="tag in ['productivity', 'focus', 'planning']" :key="tag"
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full
                         bg-zinc-100 dark:bg-zinc-800
                         text-zinc-500 dark:text-zinc-500
                         border border-zinc-200 dark:border-zinc-700">
                  {{ tag }}
                </span>
              </div>
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
    const stats = [
      { value: '10k+', label: 'Active Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: 'Fast', label: 'Performance' },
    ]

    const tasks = [
      { text: 'Brainstorm product ideas', done: true },
      { text: 'Research UI improvements', done: true },
      { text: 'Plan next sprint', done: false },
      { text: 'Write release notes', done: false },
    ]

    return { stats, tasks }
  }
}
</script>

<style scoped>
.hero-btn-primary {
  background: linear-gradient(145deg, rgb(69,131,224), rgb(58,115,210));
  color: #fff;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.25s ease;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.3),
    0 8px 20px rgba(69,131,224,0.35);
}
.hero-btn-primary::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: inherit;
  background: radial-gradient(ellipse at center,
    rgba(255,255,255,0.6) 0%,
    rgba(255,255,255,0.3) 40%,
    rgba(255,255,255,0) 70%);
  filter: blur(12px);
  z-index: -1;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.4),
    0 12px 28px rgba(69,131,224,0.45);
}
.hero-btn-primary:hover::before { opacity: 1; }
.hero-btn-primary:active {
  transform: translateY(0);
  box-shadow:
    inset 0 2px 6px rgba(0,0,0,0.2),
    0 6px 14px rgba(69,131,224,0.3);
}
</style>
