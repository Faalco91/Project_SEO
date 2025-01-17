import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'CSSéducteur | Missions du Super-Héros Séducteur Marvel',
  description: 'Découvrez les missions de CSSéducteur, ancien super-héros Marvel devenu coach en séduction. Plongez dans ses aventures extraordinaires et sa transformation unique.',
  keywords: 'CSSéducteur, super-héros Marvel, coach séduction, missions, transformation héroïque',
  openGraph: {
    title: 'CSSéducteur | Missions du Super-Héros Séducteur',
    description: 'Découvrez les missions de CSSéducteur, ancien super-héros Marvel devenu coach en séduction.',
    type: 'article',
  }
}

export default function Missions() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/" className={styles.logo} aria-label="CSSéducteur - Accueil">
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
          <Link href="/">Accueil</Link>
            <Link href="/conseils">Services</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/coachs">Coachs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.seoTitle}>CSSéducteur - Missions Héroïques du Super-Héros Séducteur</h1>
        
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <h2 id="hero-title">Missions Héroïques</h2>
            <p className={styles.subtitle}>Découvrez les exploits légendaires de CSSéducteur</p>
          </div>
        </section>

        <section className={styles.missions}>
          <article className={styles.missionCard}>
            <div className={styles.missionHeader}>
              <h2>Mission #1 : L'Éveil du Pouvoir</h2>
              <span className={styles.status}>Mission Accomplie</span>
            </div>
            <p>Ma première mission en tant que CSSéducteur : découvrir l'étendue de mes pouvoirs de séduction et apprendre à les maîtriser pour le bien de l'humanité.</p>
            <Link href="/missions/eveil" className={styles.missionLink}>
              Découvrir cette mission
            </Link>
          </article>

          <article className={styles.missionCard}>
            <div className={styles.missionHeader}>
              <h2>Mission #2 : L'Alliance des Héros</h2>
              <span className={styles.status}>Mission Accomplie</span>
            </div>
            <p>Comment j'ai utilisé mes pouvoirs de séduction pour unir les plus grands héros Marvel face à une menace sans précédent.</p>
            <Link href="/missions/alliance" className={styles.missionLink}>
              Explorer cette mission
            </Link>
          </article>

          <article className={styles.missionCard}>
            <div className={styles.missionHeader}>
              <h2>Mission #3 : La Transformation</h2>
              <span className={styles.status}>En Cours</span>
            </div>
            <p>Ma mission actuelle : transformer des vies en partageant mes connaissances et en aidant les autres à développer leur propre pouvoir de séduction.</p>
            <Link href="/missions/transformation" className={styles.missionLink}>
              Suivre cette mission
            </Link>
          </article>

          <article className={styles.missionCard}>
            <div className={styles.missionHeader}>
              <h2>Mission #4 : Le Legs</h2>
              <span className={styles.status}>À Venir</span>
            </div>
            <p>Ma prochaine mission : créer un héritage durable en formant la prochaine génération de séducteurs et séductrices héroïques.</p>
            <Link href="/missions/legs" className={styles.missionLink}>
              En savoir plus
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