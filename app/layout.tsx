import type { Metadata } from 'next'
import './globals.css'
import { inter } from './ui/fonts'
import NavMenu from './ui/nav-menu'
import AuthProvider from './lib/auth-provider'

export const metadata: Metadata = {
  title: 'My Space',
  description: 'My space clone with Next.js',
  icons: {
    icon: '/icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased flex flex-col gap-2`}>
          <NavMenu />
          <main className="w-11/12 m-auto flex-1">{children}</main>
        </body>
      </html>
    </AuthProvider>
  )
}
