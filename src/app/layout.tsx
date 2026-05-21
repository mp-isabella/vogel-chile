import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'VOGEL CHILE',
    template: '%s | VOGEL',
  },
  description:
    'VOGEL ofrece soluciones tecnológicas y de infraestructura digital para empresas e instituciones que operan a escala.',
  keywords: ['soluciones empresariales', 'tecnología', 'infraestructura digital', 'automatización'],
  authors: [{ name: 'VOGEL' }],
  icons: {
    icon:   [
      { url: '/logos/favicon.svg', type: 'image/svg+xml' },
      { url: '/logos/logo-app.png', type: 'image/png' },
    ],
    shortcut: '/logos/favicon.svg',
    apple:    '/logos/logo-app.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-vogel-950`}>
        {children}
      </body>
    </html>
  )
}
