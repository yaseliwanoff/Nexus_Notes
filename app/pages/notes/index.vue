<template>
  <section class="min-h-screen px-6 py-20 bg-white dark:bg-black">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="flex items-end justify-between mb-14">
        <div>
          <p class="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-2">
            Your workspace
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Notes</h1>
        </div>
        <NuxtLink to="/create" class="new-note-btn">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New Note
        </NuxtLink>
      </div>

      <!-- Loading skeletons -->
      <div v-if="notesStore.loading" class="notes-grid">
        <div v-for="i in 6" :key="i"
          class="h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
      </div>

      <!-- Empty state -->
      <div v-else-if="!notesStore.notes.length"
        class="flex flex-col items-center justify-center py-40 text-center">
        <div class="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900
                    flex items-center justify-center mb-5">
          <svg class="w-7 h-7 text-zinc-400 dark:text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
        <p class="text-lg font-semibold text-zinc-900 dark:text-white">No notes yet</p>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-500">Create your first note to get started.</p>
      </div>

      <!-- Notes grid -->
      <div v-else class="notes-grid">
        <article
          v-for="note in notesStore.notes"
          :key="note.id"
          @click="openModal(note)"
          class="group relative rounded-2xl p-6 cursor-pointer overflow-hidden
                 bg-white dark:bg-zinc-900
                 border border-zinc-200 dark:border-zinc-800
                 shadow-sm hover:shadow-lg dark:hover:shadow-black/50
                 hover:-translate-y-1
                 transition-all duration-300"
        >
          <!-- Top glow on hover -->
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-blue-500/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

          <!-- Tags -->
          <div v-if="note.tags?.length" class="flex flex-wrap gap-1.5 mb-4">
            <span
              v-for="tag in note.tags" :key="tag.name"
              class="text-[11px] font-medium px-2.5 py-0.5 rounded-full
                     bg-zinc-100 dark:bg-zinc-800
                     text-zinc-500 dark:text-zinc-400
                     border border-zinc-200 dark:border-zinc-700"
            >{{ tag.name }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-sm font-semibold leading-snug mb-2
                     text-zinc-900 dark:text-white">
            {{ note.title }}
          </h3>

          <!-- Preview -->
          <p class="text-xs leading-relaxed line-clamp-3
                    text-zinc-500 dark:text-zinc-500">
            {{ note.description }}
          </p>

          <!-- Footer -->
          <div class="mt-5 pt-4 flex items-center justify-between
                      border-t border-zinc-100 dark:border-zinc-800">
            <span class="text-xs text-zinc-400 dark:text-zinc-600">{{ note.data }}</span>
            <span class="text-xs text-zinc-400 flex items-center gap-1
                         opacity-0 group-hover:opacity-100 transition-opacity">
              Open
              <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </article>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedNote" class="modal-overlay" @click.self="closeModal">
          <div class="modal-box
                      bg-white dark:bg-zinc-900
                      border border-zinc-200 dark:border-zinc-800
                      shadow-2xl dark:shadow-black/60">

            <!-- Tags + close -->
            <div class="flex items-start justify-between mb-6">
              <div v-if="selectedNote.tags?.length" class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in selectedNote.tags" :key="tag.name"
                  class="text-[11px] font-medium px-2.5 py-0.5 rounded-full
                        bg-blue-500/10 text-blue-500
                        border border-blue-500/20"
                >{{ tag.name }}</span>
              </div>
              <button
                @click="closeModal"
                class="ml-auto p-2 rounded-xl flex-shrink-0
                      text-zinc-400
                      hover:bg-zinc-100 dark:hover:bg-zinc-800
                      hover:text-zinc-700 dark:hover:text-zinc-200
                      transition"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Title -->
            <h2 class="text-2xl font-semibold tracking-tight mb-2
                      text-zinc-900 dark:text-white">
              {{ selectedNote.title }}
            </h2>

            <!-- Date -->
            <p class="flex items-center gap-1.5 mb-6 text-xs
                      text-zinc-400 dark:text-zinc-600">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {{ selectedNote.data }}
            </p>

            <!-- Divider -->
            <div class="h-px mb-6 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"/>

            <!-- Body -->
            <div class="text-sm leading-relaxed whitespace-pre-wrap
                        max-h-[50vh] overflow-y-auto
                        text-zinc-600 dark:text-zinc-400">
              {{ selectedNote.description }}
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script>
export default {
  setup() {
    const notesStore = useNotesStore()
    const selectedNote = ref(null)

    const openModal = (note) => {
      selectedNote.value = note
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      selectedNote.value = null
      document.body.style.overflow = ''
    }

    onMounted(() => notesStore.fetchNotes())

    return { notesStore, selectedNote, openModal, closeModal }
  }
}
</script>

<style scoped>
.notes-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 640px) {
  .notes-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .notes-grid { grid-template-columns: repeat(3, 1fr); }
}

.new-note-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 10px 20px; border-radius: 12px;
  font-size: 14px; font-weight: 500; color: #fff;
  background: linear-gradient(to bottom, #3b82f6, #2563eb);
  box-shadow: 0 4px 14px rgba(59,130,246,0.3);
  transition: all 0.2s;
}
.new-note-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59,130,246,0.4);
}

/* Modal */
.modal-overlay {
  position: fixed; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
}

.modal-box {
  width: 100%; max-width: 680px; max-height: 85vh;
  overflow-y: auto; padding: 32px;
  border-radius: 24px;;
}
.dark .modal-box {
  background: #111113;
  border-color: #27272a;
  box-shadow: 0 30px 60px rgba(0,0,0,0.7);
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .modal-box,
.modal-leave-active .modal-box {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(0.96) translateY(10px);
  opacity: 0;
}
</style>
