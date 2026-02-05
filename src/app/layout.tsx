import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'look.me | O provador oficial do seu e-commerce',
  description: 'Deixe seu cliente experimentar antes de comprar. Aumente conversão, reduza devolução. Provador virtual com IA para e-commerces de moda.',
  keywords: 'provador virtual, try-on, e-commerce, moda, IA, inteligência artificial, conversão, devolução',
  openGraph: {
    title: 'look.me | O provador oficial do seu e-commerce',
    description: 'Deixe seu cliente experimentar antes de comprar. Aumente conversão, reduza devolução.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
