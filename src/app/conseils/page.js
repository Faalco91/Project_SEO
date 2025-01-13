import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Services de CSSéducteur | Coaching en Séduction et Développement Personnel',
  description: 'Explorez les services de CSSéducteur : coaching individuel, coaching en groupe, ateliers pratiques, et conférences. Transformez votre vie grâce à nos techniques de séduction et de développement personnel.',
  keywords: 'CSSéducteur, coaching séduction, coaching individuel, coaching groupe, ateliers pratiques, conférences, développement personnel',
};

export default function Services() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/pouvoirs">Pouvoirs</Link>
            <Link href="/conseils">Conseils</Link>
            <Link href="/missions">Missions</Link>
            <Link href="/histoire">Histoire</Link>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <h1>Services de CSSéducteur</h1>
          <p>Coaching en séduction et développement personnel pour transformer votre vie</p>
        </div>
      </header>

      <main className={styles.main}>
        {/* Section Conseils de Super-Héros */}
        <section className={styles.section}>
          <h2>Coaching et Ateliers Personnalisés</h2>
          <p className={styles.sectionDesc}>Des programmes sur mesure pour libérer le héros en vous</p>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/coaching-individuel.svg" alt="Icône de coaching individuel" width={64} height={64} />
              </div>
              <h3>Coaching Individuel</h3>
              <p>Bénéficiez d'un accompagnement personnalisé pour surmonter vos défis personnels et atteindre vos objectifs.</p>
              <Link href="/services/coaching-individuel" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/coaching-groupe.svg" alt="Icône de coaching en groupe" width={64} height={64} />
              </div>
              <h3>Coaching en Groupe</h3>
              <p>Participez à des sessions de groupe dynamiques pour apprendre et progresser avec d'autres.</p>
              <Link href="/services/coaching-groupe" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/ateliers-pratiques.svg" alt="Icône d'ateliers pratiques" width={64} height={64} />
              </div>
              <h3>Ateliers Pratiques</h3>
              <p>Découvrez des techniques pratiques et des exercices interactifs pour améliorer vos compétences en temps réel.</p>
              <Link href="/services/ateliers-pratiques" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/conferences.svg" alt="Icône de conférences" width={64} height={64} />
              </div>
              <h3>Conférences</h3>
              <p>Assistez à des conférences inspirantes pour découvrir les secrets de la séduction et du développement personnel.</p>
              <Link href="/services/conferences" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>
        </section>

        {/* Section Techniques de Séduction */}
        <section className={styles.section}>
          <h2>Techniques de Séduction</h2>
          <p className={styles.sectionDesc}>Adoptez des stratégies éprouvées pour une séduction authentique</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/communication.svg" alt="Icône de communication" width={64} height={64} />
              </div>
              <h3>L'Art de la Communication</h3>
              <p>Maîtrisez les subtilités du langage verbal et non-verbal pour créer des connexions profondes.</p>
              <Link href="/conseils/communication" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/charisme.svg" alt="Icône de charisme" width={64} height={64} />
              </div>
              <h3>Le Charisme Naturel</h3>
              <p>Développez un charisme magnétique qui attire naturellement les autres vers vous.</p>
              <Link href="/conseils/charisme" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/connexion.svg" alt="Icône de connexion" width={64} height={64} />
              </div>
              <h3>La Connexion Authentique</h3>
              <p>Créez des liens profonds et sincères qui durent dans le temps.</p>
              <Link href="/conseils/connexion" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>

          <blockquote className={styles.quote}>
            "La vraie séduction commence par la sincérité envers soi-même."
            <cite>- CSSéducteur</cite>
          </blockquote>
        </section>

        {/* Section Développement Personnel */}
        <section className={styles.section}>
          <h2>Développement Personnel</h2>
          <p className={styles.sectionDesc}>Évoluez vers la meilleure version de vous-même</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/croissance.svg" alt="Icône de croissance" width={64} height={64} />
              </div>
              <h3>La Croissance Personnelle</h3>
              <p>Découvrez les clés pour évoluer constamment et devenir la meilleure version de vous-même.</p>
              <Link href="/conseils/croissance" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/equilibre.svg" alt="Icône d'équilibre" width={64} height={64} />
              </div>
              <h3>L'Équilibre de Vie</h3>
              <p>Trouvez l'harmonie parfaite entre vie personnelle, professionnelle et amoureuse.</p>
              <Link href="/conseils/equilibre" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/resilience.svg" alt="Icône de résilience" width={64} height={64} />
              </div>
              <h3>La Résilience Émotionnelle</h3>
              <p>Développez une force intérieure à toute épreuve pour surmonter les obstacles.</p>
              <Link href="/conseils/resilience" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>

          <blockquote className={styles.quote}>
            "Chaque défi est une opportunité de grandir et de se surpasser."
            <cite>- CSSéducteur</cite>
          </blockquote>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 CSSéducteur. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
