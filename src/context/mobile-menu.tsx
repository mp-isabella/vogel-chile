'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface MobileMenuContextValue {
  mobileOpen: boolean
  openMenu:   () => void
  closeMenu:  () => void
  toggleMenu: () => void
}

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null)

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const openMenu   = useCallback(() => setMobileOpen(true),      [])
  const closeMenu  = useCallback(() => setMobileOpen(false),     [])
  const toggleMenu = useCallback(() => setMobileOpen((v) => !v), [])

  return (
    <MobileMenuContext value={{ mobileOpen, openMenu, closeMenu, toggleMenu }}>
      {children}
    </MobileMenuContext>
  )
}

export function useMobileMenu(): MobileMenuContextValue {
  const ctx = useContext(MobileMenuContext)
  if (!ctx) throw new Error('useMobileMenu must be used within MobileMenuProvider')
  return ctx
}
