import type { ReactNode } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/footer/Footer'
import { FloatingAssistant } from '@/components/FloatingAssistant'

interface MainLayoutProps {
  children:      ReactNode
  forceSolidNav?: boolean
}

export function MainLayout({ children, forceSolidNav }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar {...(forceSolidNav ? { forceSolid: true } : {})} />
      <main className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
      <FloatingAssistant />
    </div>
  )
}
