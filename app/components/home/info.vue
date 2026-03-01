<template>
  <section class="relative py-32 overflow-hidden bg-white dark:bg-black">

    <!-- Background grid pattern -->
    <div class="pointer-events-none absolute inset-0
                bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
                dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                bg-[size:48px_48px]" />

    <!-- Top glow -->
    <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                w-[700px] h-[400px]
                bg-[radial-gradient(ellipse_at_top,rgba(69,131,224,0.1),transparent_70%)]" />

    <div class="relative max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6
                    bg-blue-500/8 dark:bg-blue-500/10
                    border border-blue-500/15 dark:border-blue-500/20">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Features
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]
                   text-zinc-900 dark:text-white">
          Everything you need<br/>
          <span class="text-zinc-400 dark:text-zinc-600">to stay organized</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-zinc-500 dark:text-zinc-500">
          A powerful yet simple note-taking system designed to help you
          focus, think clearly, and keep your ideas structured.
        </p>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-3 gap-4 auto-rows-[280px]">

        <!-- Card 1: Smart Editor — 2 cols -->
        <div class="col-span-2 group relative rounded-3xl p-8 overflow-hidden
                    bg-zinc-50 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-blue-500/30 dark:hover:border-blue-500/20
                    hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50
                    transition-all duration-300 flex flex-col">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-blue-500/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                        bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20">
              <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Smart Note Editor</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-xs">
              Write and structure notes with a clean interface. Markdown support and toolbar shortcuts.
            </p>
          </div>
          <div class="mt-auto space-y-2">
            <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 w-3/4" />
            <div class="h-1.5 rounded-full bg-blue-500/25 w-1/2" />
            <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 w-2/3" />
          </div>
        </div>

        <!-- Card 2: Secure — 1 col -->
        <div class="col-span-1 group relative rounded-3xl p-8 overflow-hidden
                    bg-zinc-50 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-emerald-500/30 dark:hover:border-emerald-500/20
                    hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50
                    transition-all duration-300 flex flex-col">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                        bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20">
              <svg class="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Secure & Private</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
              Protected with modern encryption and secure private storage.
            </p>
          </div>
          <div class="mt-auto flex gap-1.5">
            <div class="h-1 flex-1 rounded-full bg-emerald-500/20"/>
            <div class="h-1 flex-1 rounded-full bg-emerald-500/40"/>
            <div class="h-1 flex-1 rounded-full bg-emerald-500/60"/>
            <div class="h-1 flex-1 rounded-full bg-emerald-500/80"/>
          </div>
        </div>

        <!-- Card 3: Collections — 1 col -->
        <div class="col-span-1 group relative rounded-3xl p-8 overflow-hidden
                    bg-zinc-50 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-purple-500/30 dark:hover:border-purple-500/20
                    hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50
                    transition-all duration-300 flex flex-col">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-purple-500/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                        bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20">
              <svg class="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Organized Collections</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
              Group ideas into folders and tags. Keep everything in one place.
            </p>
          </div>
          <div class="mt-auto flex gap-2">
            <div class="h-6 w-8 rounded-md bg-purple-500/10 border border-purple-500/20"/>
            <div class="h-6 w-12 rounded-md bg-purple-500/10 border border-purple-500/20"/>
            <div class="h-6 w-6 rounded-md bg-purple-500/10 border border-purple-500/20"/>
            <div class="h-6 w-10 rounded-md bg-purple-500/10 border border-purple-500/20"/>
          </div>
        </div>

        <!-- Card 4: Search — 1 col -->
        <div class="col-span-1 group relative rounded-3xl p-8 overflow-hidden
                    bg-zinc-50 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-yellow-500/30 dark:hover:border-yellow-500/20
                    hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50
                    transition-all duration-300 flex flex-col">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                        bg-yellow-500/10 dark:bg-yellow-500/15 border border-yellow-500/20">
              <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Instant Search</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
              Find any note in milliseconds with real-time full-text search.
            </p>
          </div>
          <div class="mt-auto flex items-center gap-2 px-3 py-2 rounded-xl
                      bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <svg class="w-3.5 h-3.5 text-zinc-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <div class="h-1.5 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-700"/>
          </div>
        </div>

        <!-- Card 5: Insights — 1 col -->
        <div class="col-span-1 group relative rounded-3xl p-8 overflow-hidden
                    bg-zinc-50 dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-blue-400/30 dark:hover:border-blue-400/20
                    hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50
                    transition-all duration-300 flex flex-col">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-blue-400/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                        bg-blue-400/10 dark:bg-blue-400/15 border border-blue-400/20">
              <svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Productivity Insights</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
              Track writing activity and improve productivity over time.
            </p>
          </div>
          <div class="mt-auto flex items-end gap-1 h-10">
            <div class="flex-1 rounded-sm bg-blue-500/20" style="height:40%"/>
            <div class="flex-1 rounded-sm bg-blue-500/30" style="height:60%"/>
            <div class="flex-1 rounded-sm bg-blue-500/40" style="height:50%"/>
            <div class="flex-1 rounded-sm bg-blue-500/60" style="height:75%"/>
            <div class="flex-1 rounded-sm bg-blue-500/80" style="height:65%"/>
            <div class="flex-1 rounded-sm bg-blue-500" style="height:100%"/>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
