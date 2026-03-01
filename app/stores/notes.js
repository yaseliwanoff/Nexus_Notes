import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
    loading: false,
    error: '',
  }),

  actions: {
    async fetchNotes() {
      const { $axios } = useNuxtApp()
      this.loading = true
      this.error = ''
      try {
        const result = await $axios.get('/api/notes')
        this.notes = result.data.data || []
      } catch (err) {
        this.error = 'Failed to fetch notes'
      } finally {
        this.loading = false
      }
    },

    async createNote(payload) {
      const { $axios } = useNuxtApp()
      const result = await $axios.post('/api/notes', payload)
      // Добавляем новую заметку в начало списка без перезагрузки
      this.notes.unshift(result.data.data)
      return result.data.data
    },

    resetState() {
      this.notes = []
      this.loading = false
      this.error = ''
    }
  }
})
