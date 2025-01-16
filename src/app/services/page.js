'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Services() {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/coachs">Coachs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>Services de CSSéducteur</h1>
          <p className={styles.mainDescription}>
            Coaching en séduction et développement personnel pour transformer votre vie
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <section id="services-section" className={styles.servicesSection}>
          <button onClick={scrollToServices} className={styles.scrollArrow} aria-label="Défiler vers les services">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
          <div className={styles.section}>
            <h2>Coaching et Ateliers Personnalisés</h2>
            <p className={styles.sectionDesc}>
              Des programmes sur mesure pour développer votre potentiel de séduction
            </p>

            <div className={styles.cardGrid}>
              <article className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src="/images/services/coaching-individuel.svg" alt="Coaching individuel CSSéducteur" width={64} height={64} loading='lazy' />
                </div>
                <h3>Coaching Individuel</h3>
                <p>Avec CSSéducteur, bénéficiez d'un accompagnement personnalisé unique pour surmonter vos défis personnels et atteindre vos objectifs en séduction.</p>
                <Link href="/services/coaching-individuel" className={styles.cardButton}>
                  En savoir plus
                </Link>
              </article>

              <article className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src="/images/services/coaching-groupe.svg" alt="Coaching en groupe CSSéducteur" width={64} height={64} loading='lazy' />
                </div>
                <h3>Coaching en Groupe</h3>
                <p>Rejoignez les sessions de groupe dynamiques de CSSéducteur pour apprendre et progresser avec d'autres participants partageant les mêmes objectifs.</p>
                <Link href="/services/coaching-groupe" className={styles.cardButton}>
                  En savoir plus
                </Link>
              </article>

              <article className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src="/images/services/ateliers-pratiques.svg" alt="Ateliers pratiques CSSéducteur" width={64} height={64} loading='lazy' />
                </div>
                <h3>Ateliers Pratiques</h3>
                <p>Les ateliers pratiques CSSéducteur vous offrent des techniques concrètes et des exercices interactifs pour améliorer vos compétences en séduction.</p>
                <Link href="/services/ateliers-pratiques" className={styles.cardButton}>
                  En savoir plus
                </Link>
              </article>

              <article className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src="/images/services/conferences.svg" alt="Conférences CSSéducteur" width={64} height={64} loading='lazy' />
                </div>
                <h3>Conférences</h3>
                <p>Participez aux conférences inspirantes de CSSéducteur pour découvrir les secrets de la séduction et du développement personnel avec nos experts.</p>
                <Link href="/services/conferences" className={styles.cardButton}>
                  En savoir plus
                </Link>
              </article>
            </div>
          </div>
        </section>

        <blockquote className={styles.quote}>
          "Le succès personnel commence par l'acceptation de qui nous sommes vraiment."
          <cite>- CSSéducteur</cite>
        </blockquote>

        {/* Section Techniques de Séduction */}
        <section className={styles.section}>
          <h2>Techniques de Séduction</h2>
          <p className={styles.sectionDesc}>Adoptez des stratégies éprouvées pour une séduction authentique</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/communication.svg" alt="Communication CSSéducteur" width={64} height={64} loading='lazy' />
              </div>
              <h3>L'Art de la Communication</h3>
              <p>La méthode CSSéducteur vous aide à maîtriser les subtilités du langage verbal et non-verbal pour créer des connexions authentiques et profondes.</p>
              <Link href="/services/communication" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/charisme.svg" alt="Charisme CSSéducteur" width={64} height={64} loading='lazy' />
              </div>
              <h3>Le Charisme Naturel</h3>
              <p>Développez votre charisme magnétique avec les techniques exclusives de CSSéducteur qui attirent naturellement les autres vers vous.</p>
              <Link href="/services/charisme" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/connexion.svg" alt="Connexion authentique CSSéducteur" width={64} height={64} loading='lazy' />
              </div>
              <h3>La Connexion Authentique</h3>
              <p>Grâce à l'approche unique de CSSéducteur, apprenez à créer des liens profonds et sincères qui perdurent dans le temps.</p>
              <Link href="/services/connexion" className={styles.cardButton}>
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
          <p className={styles.sectionDesc}>Évoluez vers la meilleure version de vous-même avec CSSéducteur</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/croissance.svg" alt="Croissance personnelle CSSéducteur" width={64} height={64} loading='lazy' />
              </div>
              <h3>La Croissance Personnelle</h3>
              <p>L'approche CSSéducteur vous guide vers une évolution constante, en vous donnant les clés pour révéler votre plein potentiel et devenir la meilleure version de vous-même.</p>
              <Link href="/services/croissance" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/equilibre.svg" alt="Équilibre de vie CSSéducteur" width={64} height={64} loading='lazy' />
              </div>
              <h3>L'Équilibre de Vie</h3>
              <p>Les experts CSSéducteur vous accompagnent pour trouver l'harmonie parfaite entre votre vie personnelle, professionnelle et amoureuse, créant ainsi un équilibre durable.</p>
              <Link href="/services/equilibre" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/services/resilience.svg" alt="Résilience émotionnelle CSSéducteur" width={64} height={64} loading='lazy' />
              </div>
              <h3>La Résilience Émotionnelle</h3>
              <p>Grâce aux techniques éprouvées de CSSéducteur, développez une force intérieure inébranlable et apprenez à transformer chaque obstacle en opportunité de croissance.</p>
              <Link href="/services/resilience" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>

          <blockquote className={styles.quote}>
            "Chaque défi est une opportunité de grandir et de se surpasser avec CSSéducteur."
            <cite>- CSSéducteur</cite>
          </blockquote>
        </section>

        {/* Section Contenu Unique */}
        <section className={`${styles.section} ${styles.whyChooseSection}`}>
          <h2>Pourquoi choisir CSSéducteur pour votre coaching ?</h2>
          <p className={styles.sectionDesc}>Découvrez les avantages uniques offerts par CSSéducteur</p>
          <p>CSSéducteur révolutionne le coaching en séduction grâce à une méthodologie unique qui a déjà transformé la vie de centaines d'hommes. Notre expertise chez CSSéducteur repose sur une approche holistique du développement personnel, alliant psychologie comportementale et techniques de séduction modernes. Les coachs CSSéducteur créent des programmes sur-mesure qui s'adaptent à votre personnalité et vos objectifs spécifiques.</p>
          <p>La communauté CSSéducteur témoigne régulièrement des résultats exceptionnels obtenus : confiance en soi renforcée, vie sociale épanouie et relations authentiques. Notre méthode exclusive combine accompagnement individuel personnalisé et ateliers pratiques en groupe, permettant une progression rapide et durable. Rejoignez CSSéducteur et découvrez comment devenir la meilleure version de vous-même.</p>
        </section>

        {/* Appel à l'action optimisé */}
        <section className={styles.section}>
          <h2>Transformez votre vie dès aujourd'hui</h2>
          <p className={styles.sectionDesc}>Explorez nos services et trouvez le programme qui vous convient</p>
          <a href="tel:+33787338604" className={styles.ctaButton}>
            Contactez-nous pour un premier rendez-vous
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
      </footer>
    </div>
  );
} 