export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Découvrez nos Coachs - CSSéducteur',
  description: 'Rencontrez les coachs experts de CSSéducteur et explorez leurs parcours et spécialités.',
  author: {
    '@type': 'Organization',
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
  image: 'https://csseducteur.fr/images/coachs.jpg',
  datePublished: '2023-01-01T00:00:00+00:00',
  dateModified: new Date().toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://csseducteur.fr/coachs',
  },
}