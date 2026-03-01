<template>
  <section class="min-h-screen px-6 py-20 bg-white dark:bg-black">
    <div class="max-w-3xl mx-auto">

      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
            <svg class="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </div>
          <span class="text-xs font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-400">New Note</span>
        </div>
        <h1 class="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">Create a note</h1>
        <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Capture your thoughts and ideas.</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">

        <!-- Title -->
        <div>
          <label class="block text-[13px] font-medium mb-2 text-zinc-600 dark:text-zinc-400">Title</label>
          <input
            v-model="title"
            type="text"
            placeholder="Give your note a title..."
            class="w-full px-4 py-2.5 rounded-xl text-sm outline-none
                   bg-white dark:bg-zinc-900
                   border border-zinc-200 dark:border-zinc-800
                   text-zinc-900 dark:text-zinc-100
                   placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                   focus:border-blue-500 dark:focus:border-blue-500
                   transition"
            required
          />
        </div>

        <!-- Tags -->
        <div>
          <label class="block text-[13px] font-medium mb-2 text-zinc-600 dark:text-zinc-400">Tags</label>
          <div v-if="tags.length" class="flex flex-wrap gap-2 mb-2">
            <span
              v-for="(tag, i) in tags" :key="i"
              class="inline-flex items-center gap-1.5 text-xs font-medium
                     px-3 py-1 rounded-full
                     bg-zinc-100 dark:bg-zinc-800
                     text-zinc-600 dark:text-zinc-300
                     border border-zinc-200 dark:border-zinc-700"
            >
              {{ tag }}
              <button type="button" @click="removeTag(i)" class="opacity-40 hover:opacity-100 transition-opacity leading-none">
                <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M2 2l6 6M8 2l-6 6"/>
                </svg>
              </button>
            </span>
          </div>
          <input
            v-model="tagInput"
            type="text"
            placeholder="Type a tag and press Enter or , ..."
            class="w-full px-4 py-2.5 rounded-xl text-sm outline-none
                   bg-white dark:bg-zinc-900
                   border border-zinc-200 dark:border-zinc-800
                   text-zinc-900 dark:text-zinc-100
                   placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                   focus:border-blue-500 dark:focus:border-blue-500
                   transition"
            @keydown="handleTagKeydown"
          />
          <p class="mt-1.5 text-xs text-zinc-400 dark:text-zinc-600">Press Enter or comma to add a tag</p>
        </div>

        <!-- Content editor -->
        <div>
          <label class="block text-[13px] font-medium mb-2 text-zinc-600 dark:text-zinc-400">Content</label>
          <div
            class="rounded-2xl overflow-hidden border transition"
            :class="editorFocused
              ? 'border-blue-500 ring-2 ring-blue-500/15'
              : 'border-zinc-200 dark:border-zinc-800'"
          >
            <!-- Toolbar -->
            <div class="flex items-center gap-0.5 px-2.5 py-2
                        border-b border-zinc-200 dark:border-zinc-800
                        bg-zinc-50 dark:bg-zinc-900">
              <button type="button" @click="wrapText('**', '**')" title="Bold"
                class="w-7 h-7 rounded-lg flex items-center justify-center
                       text-zinc-400 dark:text-zinc-500
                       hover:bg-zinc-200 dark:hover:bg-zinc-800
                       hover:text-zinc-700 dark:hover:text-zinc-200
                       transition">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
                </svg>
              </button>
              <button type="button" @click="wrapText('*', '*')" title="Italic"
                class="w-7 h-7 rounded-lg flex items-center justify-center
                       text-zinc-400 dark:text-zinc-500
                       hover:bg-zinc-200 dark:hover:bg-zinc-800
                       hover:text-zinc-700 dark:hover:text-zinc-200
                       transition">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/>
                  <line x1="15" y1="4" x2="9" y2="20"/>
                </svg>
              </button>
              <button type="button" @click="prependLine('## ')" title="Heading"
                class="w-7 h-7 rounded-lg flex items-center justify-center
                       text-zinc-400 dark:text-zinc-500
                       hover:bg-zinc-200 dark:hover:bg-zinc-800
                       hover:text-zinc-700 dark:hover:text-zinc-200
                       transition">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12h16M4 6h7M4 18h7"/>
                </svg>
              </button>
              <div class="w-px h-4 bg-zinc-200 dark:bg-zinc-700 mx-1"/>
              <button type="button" @click="prependLine('- ')" title="Bullet list"
                class="w-7 h-7 rounded-lg flex items-center justify-center
                       text-zinc-400 dark:text-zinc-500
                       hover:bg-zinc-200 dark:hover:bg-zinc-800
                       hover:text-zinc-700 dark:hover:text-zinc-200
                       transition">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <circle cx="3" cy="6" r="1" fill="currentColor"/>
                  <circle cx="3" cy="12" r="1" fill="currentColor"/>
                  <circle cx="3" cy="18" r="1" fill="currentColor"/>
                </svg>
              </button>
              <button type="button" @click="wrapText('`', '`')" title="Code"
                class="w-7 h-7 rounded-lg flex items-center justify-center
                       text-zinc-400 dark:text-zinc-500
                       hover:bg-zinc-200 dark:hover:bg-zinc-800
                       hover:text-zinc-700 dark:hover:text-zinc-200
                       transition">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </button>
              <span class="ml-auto text-xs text-zinc-400 dark:text-zinc-600 pr-1">
                {{ description.length }} chars
              </span>
            </div>

            <!-- Textarea -->
            <textarea
              ref="textareaRef"
              v-model="description"
              placeholder="Start writing your note... Markdown is supported."
              rows="16"
              class="w-full px-4 py-3.5 text-sm leading-7 resize-y outline-none
                     bg-white dark:bg-zinc-950
                     text-zinc-900 dark:text-zinc-100
                     placeholder:text-zinc-400 dark:placeholder:text-zinc-700
                     font-mono min-h-[280px]"
              @focus="editorFocused = true"
              @blur="editorFocused = false"
            />
          </div>
        </div>

        <!-- Date -->
        <div>
          <label class="block text-[13px] font-medium mb-2 text-zinc-600 dark:text-zinc-400">Date</label>
          <input
            v-model="createdDate"
            type="date"
            class="w-full px-4 py-2.5 rounded-xl text-sm outline-none
                   bg-white dark:bg-zinc-900
                   border border-zinc-200 dark:border-zinc-800
                   text-zinc-900 dark:text-zinc-100
                   focus:border-blue-500 dark:focus:border-blue-500
                   transition
                   [color-scheme:light] dark:[color-scheme:dark]"
          />
        </div>

        <!-- Error -->
        <p v-if="error"
          class="text-sm text-red-500 bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
          {{ error }}
        </p>

        <!-- Actions -->
        <div class="flex items-center gap-3 pt-2">
          <button type="submit" :disabled="loading" class="save-btn">
            <span v-if="!loading">Save Note</span>
            <span v-else class="flex items-center gap-2">
              <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              Saving...
            </span>
          </button>
          <NuxtLink to="/notes"
            class="px-5 py-2.5 rounded-full text-sm font-medium
                   text-zinc-500 dark:text-zinc-400
                   border border-zinc-200 dark:border-zinc-800
                   hover:bg-zinc-100 dark:hover:bg-zinc-900
                   hover:text-zinc-800 dark:hover:text-zinc-200
                   transition">
            Cancel
          </NuxtLink>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
definePageMeta({
  middleware: 'auth'
})

export default {
  setup() {
    const notesStore = useNotesStore()
    const router = useRouter()

    const title = ref('')
    const tagInput = ref('')
    const tags = ref([])
    const description = ref('')
    const createdDate = ref(new Date().toISOString().split('T')[0])
    const loading = ref(false)
    const error = ref('')
    const textareaRef = ref(null)
    const editorFocused = ref(false)

    const handleTagKeydown = (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault()
        const val = tagInput.value.replace(',', '').trim()
        if (val && !tags.value.includes(val)) tags.value.push(val)
        tagInput.value = ''
      }
    }

    const removeTag = (i) => tags.value.splice(i, 1)

    const wrapText = (before, after) => {
      const el = textareaRef.value
      if (!el) return
      const start = el.selectionStart
      const end = el.selectionEnd
      const selected = description.value.slice(start, end)
      description.value =
        description.value.slice(0, start) + before + selected + after + description.value.slice(end)
      nextTick(() => {
        el.focus()
        el.setSelectionRange(start + before.length, end + before.length)
      })
    }

    const prependLine = (prefix) => {
      const el = textareaRef.value
      if (!el) return
      const start = el.selectionStart
      const lineStart = description.value.lastIndexOf('\n', start - 1) + 1
      description.value =
        description.value.slice(0, lineStart) + prefix + description.value.slice(lineStart)
      nextTick(() => el.focus())
    }

    const handleSubmit = async () => {
      error.value = ''
      if (!title.value.trim()) {
        error.value = 'Please enter a title'
        return
      }
      loading.value = true
      try {
        await notesStore.createNote({
          title: title.value,
          description: description.value,
          tags: tags.value.map(name => ({ name })),
          data: createdDate.value,
        })
        router.push('/notes')
      } catch (err) {
        error.value = err?.response?.data?.message || 'Failed to save note'
      } finally {
        loading.value = false
      }
    }

    return {
      title, tagInput, tags, description, createdDate,
      loading, error, textareaRef, editorFocused,
      handleTagKeydown, removeTag, wrapText, prependLine, handleSubmit
    }
  }
}
</script>

<style scoped>
.save-btn {
  background: linear-gradient(145deg, rgb(69,131,224), rgb(58,115,210));
  color: #fff;
  border-radius: 999px;
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 20px rgba(69,131,224,0.35);
}
.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 14px 30px rgba(69,131,224,0.45);
}
.save-btn:active { transform: translateY(0); }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
</style>