import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSSéducteur | Coach en Séduction & Ancien Super-Héros Marvel',
  description: 'Découvrez les conseils de séduction de CSSéducteur, ancien super-héros Marvel devenu coach en séduction. Apprenez les secrets des pouvoirs de séduction et de la confiance en soi.',
  keywords: 'CSSéducteur, Coach Sauveur Séducteur, séduction, super-héros, Marvel, coach en séduction, pouvoirs de séduction, conseils amoureux',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
