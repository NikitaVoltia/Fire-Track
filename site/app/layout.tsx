import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Fire Track - Incêndios Florestais',
  description: 'Website educativo sobre incêndios florestais, causas, consequências, prevenção e dados estatísticos. Trabalho escolar de Diana Azevedo, José Luiz Gomes e Sofia Gouveia.',
  keywords: ['incêndios florestais', 'prevenção', 'ambiente', 'floresta', 'Portugal', 'educação ambiental'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
