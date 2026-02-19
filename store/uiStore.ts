import { create } from "zustand"

interface UIStore {
  isMobileMenuOpen: boolean
  isSearchOpen: boolean
  isLoading: boolean
  
  toggleMobileMenu: () => void
  openMobileMenu: () => void
  closeMobileMenu: () => void
  toggleSearch: () => void
  openSearch: () => void
  closeSearch: () => void
  setLoading: (loading: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isLoading: false,

  toggleMobileMenu: () => {
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }))
  },

  openMobileMenu: () => {
    set({ isMobileMenuOpen: true })
  },

  closeMobileMenu: () => {
    set({ isMobileMenuOpen: false })
  },

  toggleSearch: () => {
    set((state) => ({ isSearchOpen: !state.isSearchOpen }))
  },

  openSearch: () => {
    set({ isSearchOpen: true })
  },

  closeSearch: () => {
    set({ isSearchOpen: false })
  },

  setLoading: (loading) => {
    set({ isLoading: loading })
  },
}))
