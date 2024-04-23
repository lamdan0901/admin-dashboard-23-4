import { PaletteMode } from '@mui/material'
import { State, StateCreator, create } from 'zustand'

interface ThemeStore {
  mode: PaletteMode
  toggleDarkMode: () => void
}

export const useThemeStore = create<ThemeStore>()(
  // persist( // a persist middleware like redux-persist
  (set) => ({
    mode: 'dark',
    toggleDarkMode: () =>
      set((state) => ({ mode: state.mode === 'dark' ? 'light' : 'dark' }))
    // setCountAsync: async (count) => {
    //   await new Promise((resolve) => setTimeout(resolve, 1000))
    //   set(() => ({ count }))
    // },
    // setCounts: () => set((state) => ({ counts: [...state.counts, 10] }), false)
  })
)
