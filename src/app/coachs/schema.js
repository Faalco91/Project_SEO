export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Les Super-Pouvoirs de CSSéducteur - Du Super-Héros au Coach en Séduction',
  description: 'Découvrez comment CSSéducteur utilise ses super-pouvoirs d\'ancien héros Marvel pour transformer votre vie amoureuse. Expertise unique en séduction et développement personnel.',
  author: {
    '@type': 'Person',
    name: 'CSSéducteur',
    url: 'https://csseducteur.fr',
  },
  publisher: {
    '@type': 'Organization',
    name: 'CSSéducteur',
    logo: {
      '@type': 'ImageObject',
      url: 'https://csseducteur.fr/images/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://csseducteur.fr/pouvoirs',
  },
  datePublished: '2023-01-01T00:00:00+00:00',
  dateModified: new Date().toISOString(),
} 