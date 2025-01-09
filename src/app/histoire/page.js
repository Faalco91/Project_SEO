import Link from 'next/link'
import styles from './page.module.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Histoire de CSSéducteur - Le Super-Héros de la Séduction',
  description: 'Découvrez l\'histoire fascinante de CSSéducteur, ancien super-héros Marvel devenu coach en séduction. Explorez ses origines, sa transformation et son héritage.',
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
  image: 'https://csseducteur.fr/images/histoire.jpg',
  datePublished: '2023-01-01T00:00:00+00:00',
  dateModified: new Date().toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://csseducteur.fr/histoire',
  },
}

export default function Histoire() {
  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/" className={styles.logo} aria-label="CSSéducteur - Accueil">
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/pouvoirs" aria-label="Les pouvoirs de CSSéducteur">Pouvoirs</Link>
            <Link href="/conseils" aria-label="Conseils de séduction par CSSéducteur">Conseils</Link>
            <Link href="/missions" aria-label="Missions de CSSéducteur">Missions</Link>
            <Link href="/histoire" aria-label="Histoire de CSSéducteur">Histoire</Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.seoTitle}>CSSéducteur - L'Histoire du Super-Héros de la Séduction</h1>

        <section className={styles.fileGrid}>
          <article className={styles.secretFile}>
            <div className={styles.fileHeader}>
              <span className={styles.classification}>ORIGINES</span>
              <h2>Les Débuts de CSSéducteur</h2>
              <h3>La Naissance d'un Super-Héros Séducteur</h3>
            </div>
            <p>Découvrez les origines de CSSéducteur et comment ses pouvoirs de séduction se sont développés au fil de ses aventures héroïques.</p>
            <Link href="/histoire/origines" className={styles.accessButton}>
              Découvrir les Origines
            </Link>
          </article>

          <article className={styles.secretFile}>
            <div className={styles.fileHeader}>
              <span className={styles.classification}>ÉVOLUTION</span>
              <h2>La Transformation</h2>
              <h3>De Super-Héros à Coach en Séduction</h3>
            </div>
            <p>Le parcours unique de CSSéducteur, sa transformation et sa décision de mettre ses pouvoirs au service des autres.</p>
            <Link href="/histoire/transformation" className={styles.accessButton}>
              Explorer la Transformation
            </Link>
          </article>

          <article className={styles.secretFile}>
            <div className={styles.fileHeader}>
              <span className={styles.classification}>HÉRITAGE</span>
              <h2>L'Héritage Marvel</h2>
              <h3>Les Années Héroïques</h3>
            </div>
            <p>Les moments marquants de la carrière de CSSéducteur dans l'univers Marvel et les leçons tirées de ses aventures.</p>
            <Link href="/histoire/heritage" className={styles.accessButton}>
              Découvrir l'Héritage
            </Link>
          </article>

          <article className={styles.secretFile}>
            <div className={styles.fileHeader}>
              <span className={styles.classification}>VISION</span>
              <h2>La Vision de CSSéducteur</h2>
              <h3>L'Avenir de la Séduction</h3>
            </div>
            <p>La philosophie et la vision de CSSéducteur pour l'avenir de la séduction et du développement personnel.</p>
            <Link href="/histoire/vision" className={styles.accessButton}>
              Explorer la Vision
            </Link>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 CSSéducteur - Le Super-Héros qui Révolutionne la Séduction - Tous droits réservés</p>
      </footer>
    </div>
  )
} 