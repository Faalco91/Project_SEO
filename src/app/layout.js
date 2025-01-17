import { Inter } from 'next/font/google'
import './globals.css'
import SocialBar from '../components/SocialBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSSéducteur - Coaching en Séduction',
  description: 'Découvrez l\'art de la séduction avec CSSéducteur. Coaching personnalisé, ateliers et ressources pour développer votre charisme et votre confiance.',
  keywords: 'CSSéducteur, coaching en séduction, formations en séduction, conférences, confiance en soi, style personnel, coachs renommés, Alex Hitchens, Stéphane Malassagne, Coach William, développement personnel, relations amoureuses',
  author: 'CSSéducteur',
  og: {
    title: 'CSSéducteur | Coaching et Formations en Séduction',
    description: 'Découvrez l’univers de CSSéducteur, votre expert en confiance et style pour maîtriser l’art de la séduction.',
    type: 'website',
    url: 'https://www.csseducteur.com',
    image: 'https://www.csseducteur.com/images/csseducteur-og-image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSSéducteur | Coaching en Séduction',
    description: 'Apprenez les secrets de la séduction avec CSSéducteur. Coaching, formations, et conférences pour développer confiance et style.',
    image: 'https://www.csseducteur.com/images/csseducteur-twitter-image.jpg',
    site: '@CSSeducteur'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />
      </head>
      <body className={inter.className}>
        <SocialBar />
        {children}
      </body>
    </html>
  )
}
