import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const testimonials = [
  {
    author: 'Thomas D.',
    rating: 5,
    text: "Grâce aux enseignements de CSSéducteur, j'ai gagné une confiance incroyable en moi et j'ai pu transformer ma vie amoureuse.",
  },
  {
    author: 'Sophie M.',
    rating: 5,
    text: "CSSéducteur m'a appris à comprendre mes émotions et celles des autres, renforçant ainsi mes relations personnelles.",
  },
];

export default function Programmes() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/" className={styles.logo} aria-label="CSSéducteur - Accueil">
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

      <main className={styles.main}>
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <div className={styles.particlesBackground}></div>
          <div className={styles.heroContent}>
            <div className={styles.titleWrapper}>
              <h1 id="hero-title" className={styles.animatedTitle}>
                <span className={styles.titleLine}>Découvrez les Programmes de CSSéducteur</span>
              </h1>
              <p className={styles.heroTagline}>
                Transformez votre vie amoureuse avec l'expertise unique de <span className={styles.accent}>CSSéducteur</span>
              </p>
            </div>
            <div className={styles.introColumns}>
              <div className={styles.introColumn}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.geometricIcon} viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p>
                  Grâce à CSSéducteur, vous allez découvrir comment utiliser vos pouvoirs de séduction naturelle pour transformer vos relations amoureuses et sociales.
                </p>
              </div>
              <div className={styles.introColumn}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.geometricIcon} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p>
                  Découvrez l'art de la séduction avec les conseils et méthodes éprouvées de CSSéducteur, qui combinent psychologie et influence positive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.powersGrid} aria-label="Les Super-Pouvoirs de CSSéducteur">
          <Link href="/programmes/seduction" className={styles.powerCard}>
            <div className={styles.powerIcon}>
              <Image
                src="/images/programmes/seduction.svg"
                alt="Icône du pouvoir de séduction magnétique"
                width={64}
                height={64}
                loading='lazy'
                className={styles.icon}
              />
            </div>
            <h2>La Séduction Magnétique de CSSéducteur</h2>
            <p className={styles.powerOrigin}>
              Développez une aura irrésistible avec la méthode CSSéducteur, qui a transformé des milliers de vies.
            </p>
            <p className={styles.powerNow}>
              Apprenez à cultiver votre charisme naturel et à attirer les bonnes personnes dans votre vie.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.stat}>
                <span className={styles.number}>98%</span>
                <span className={styles.label}>de réussite</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>1000+</span>
                <span className={styles.label}>vies transformées</span>
              </div>
            </div>
            <span className={styles.powerLinkText}>
              En savoir plus sur la Séduction Magnétique
            </span>
          </Link>

          <Link href="/programmes/empathie" className={styles.powerCard}>
            <div className={styles.powerIcon}>
              <Image
                src="/images/programmes/empathie.svg"
                alt="Icône du pouvoir d'empathie émotionnelle"
                width={64}
                height={64}
                loading='lazy'
                className={styles.icon}
              />
            </div>
            <h2>L'Empathie Émotionnelle de CSSéducteur</h2>
            <p className={styles.powerOrigin}>
              Grâce à CSSéducteur, vous comprendrez mieux les émotions et pourrez créer des liens plus profonds et sincères.
            </p>
            <p className={styles.powerNow}>
              Apprenez à utiliser l'empathie émotionnelle pour améliorer vos relations et résoudre les conflits efficacement.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.stat}>
                <span className={styles.number}>96%</span>
                <span className={styles.label}>de satisfaction</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>500+</span>
                <span className={styles.label}>relations renforcées</span>
              </div>
            </div>
            <span className={styles.powerLinkText}>
              En savoir plus sur l'Empathie Émotionnelle
            </span>
          </Link>

          <Link href="/programmes/presence" className={styles.powerCard}>
            <div className={styles.powerIcon}>
              <Image
                src="/images/programmes/presence.svg"
                alt="Icône du pouvoir de présence magnétique"
                width={64}
                height={64}
                loading='lazy'
                className={styles.icon}
              />
            </div>
            <h2>La Présence Magnétique de CSSéducteur</h2>
            <p className={styles.powerOrigin}>
              Développez une présence qui capte l'attention et inspire la confiance, grâce aux enseignements de CSSéducteur.
            </p>
            <p className={styles.powerNow}>
              Apprenez à marquer les esprits et à devenir la personne qui attire naturellement l'attention et le respect.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.stat}>
                <span className={styles.number}>97%</span>
                <span className={styles.label}>d'efficacité</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>800+</span>
                <span className={styles.label}>transformations réussies</span>
              </div>
            </div>
            <span className={styles.powerLinkText}>
              En savoir plus sur la Présence Magnétique
            </span>
          </Link>
        </section>

        <section className={styles.coachingSection} aria-labelledby="coaching-title">
          <h2 id="coaching-title">Coaching Personnalisé CSSéducteur</h2>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingCard}>
              <div className={styles.coachingHeader}>
                <h3>Initiation à la Séduction Magnétique</h3>
                <div className={styles.price}>99€</div>
              </div>
              <ul className={styles.coachingFeatures}>
                <li>1 session de coaching individuel (1h)</li>
                <li>Analyse de votre profil de séduction</li>
                <li>Plan d'action personnalisé CSSéducteur</li>
                <li>Support par email pendant 1 semaine</li>
              </ul>
            </div>

            <div className={`${styles.coachingCard} ${styles.featured}`}>
              <div className={styles.featuredBadge}>Plus populaire</div>
              <div className={styles.coachingHeader}>
                <h3>Transformation Légendaire CSSéducteur</h3>
                <div className={styles.price}>299€</div>
              </div>
              <ul className={styles.coachingFeatures}>
                <li>4 sessions de coaching intensif (1h chacune)</li>
                <li>Analyse comportementale complète</li>
                <li>Stratégie de séduction et d'empathie sur-mesure</li>
                <li>Suivi pendant 1 mois avec feedback hebdomadaire</li>
              </ul>
            </div>
          </div>
          <a href="tel:+33787338604" className={styles.contactButton}>
            Nous contacter
          </a>
        </section>

        <section className={styles.testimonials} aria-labelledby="testimonials-title">
          <h2 id="testimonials-title">Témoignages de Transformation</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.rating}>
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.coachingSection}>
          <h2>Découvrez Nos Coachs Experts</h2>
          <p className={styles.sectionDesc}>Rencontrez notre équipe de coachs professionnels CSSéducteur qui vous accompagneront dans votre transformation</p>
          <Link href="/coachs" className={styles.contactButton}>
            Découvrir nos Coachs
          </Link>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
        </footer>
      </main>
    </div>
  )
} 