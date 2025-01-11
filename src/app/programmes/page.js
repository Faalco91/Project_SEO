import Image from 'next/image'
import Link from 'next/link'
import styles from './programmes.module.css'
const testimonials = [
  {
    author: 'Thomas D.',
    rating: 5,
    text: 'Grâce au pouvoir de présence magnétique de CSSéducteur, j\'ai gagné une confiance incroyable en moi.',
  },
  {
    author: 'Sophie M.',
    rating: 5,
    text: 'Son pouvoir d\'empathie émotionnelle m\'a permis de mieux comprendre mes relations.',
  },
]

export default function Programmes() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/" className={styles.logo} aria-label="CSSéducteur - Accueil">
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/programmes" aria-label="Nos programmes Séduction">Programmes</Link>
            <Link href="/conseils" aria-label="Conseils de séduction par CSSéducteur">Conseils</Link>
            <Link href="/missions" aria-label="Missions de CSSéducteur">Missions</Link>
            <Link href="/histoire" aria-label="Histoire de CSSéducteur">Histoire</Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <div className={styles.particlesBackground}></div>
          <div className={styles.heroContent}>
            <div className={styles.titleWrapper}>
              <h1 id="hero-title" className={styles.animatedTitle}>
                <span className={styles.titleLine}>Découvrez</span>
                <span className={styles.titleLine}>Mes Super-Pouvoirs</span>
                <span className={styles.titleAccent}>de CSSéducteur</span>
              </h1>
              <p className={styles.heroTagline}>
                De <span className={styles.accent}>Super-Héros Marvel</span> à{' '}
                <span className={styles.accent}>CSSéducteur</span>
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
                  Mes pouvoirs, autrefois utilisés pour sauver le monde,
                  sont maintenant à votre service pour transformer votre vie amoureuse.
                </p>
              </div>
              <div className={styles.introColumn}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.geometricIcon} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p>
                  Une expertise unique qui allie la puissance d'un héros Marvel
                  à l'art subtil de la séduction moderne.
                </p>
              </div>
            </div>
            <div className={styles.scrollIndicator}>
              <span className={styles.scrollText}>Découvrez mes pouvoirs</span>
              <svg className={styles.scrollArrow} viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </div>
          </div>
          <div className={styles.heroShapes}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
          </div>
        </section>

        <section className={styles.powersGrid} aria-label="Liste des super-pouvoirs">
          <article className={styles.powerCard}>
            <div className={styles.powerIcon}>
              <Image
                src="/images/programmes/seduction.svg"
                alt="Icône du pouvoir de séduction magnétique"
                width={64}
                height={64}
                className={styles.icon}
              />
            </div>
            <h2>La Séduction Magnétique</h2>
            <p className={styles.powerOrigin}>
              Autrefois utilisé pour charmer mes adversaires et les détourner du mal,
              ce pouvoir créait une aura irrésistible autour de moi.
            </p>
            <p className={styles.powerNow}>
              Aujourd'hui, j'enseigne comment développer votre propre charisme naturel
              pour attirer les bonnes personnes dans votre vie.
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
            <Link href="/programmes/seduction" className={styles.powerLink}>
              En savoir plus
            </Link>
          </article>

          <article className={styles.powerCard}>
            <div className={styles.powerIcon}>
              <Image
                src="/images/programmes/empathie.svg"
                alt="Icône du pouvoir d'empathie émotionnelle"
                width={64}
                height={64}
                className={styles.icon}
              />
            </div>
            <h2>L'Empathie Émotionnelle</h2>
            <p className={styles.powerOrigin}>
              Ce pouvoir me permettait de ressentir et comprendre les émotions
              des personnes en détresse pour mieux les aider.
            </p>
            <p className={styles.powerNow}>
              Je l'utilise pour vous aider à mieux comprendre vos émotions et
              celles des autres, créant des connexions plus authentiques.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.stat}>
                <span className={styles.number}>96%</span>
                <span className={styles.label}>de satisfaction</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>500+</span>
                <span className={styles.label}>relations améliorées</span>
              </div>
            </div>
            <Link href="/programmes/empathie" className={styles.powerLink}>
              En savoir plus
            </Link>
          </article>

          <article className={styles.powerCard}>
            <div className={styles.powerIcon}>
              <Image
                src="/images/programmes/presence.svg"
                alt="Icône du pouvoir de présence magnétique"
                width={64}
                height={64}
                className={styles.icon}
              />
            </div>
            <h2>La Présence Magnétique</h2>
            <p className={styles.powerOrigin}>
              Ma présence héroïque inspirait confiance et respect,
              permettant de calmer les foules en panique.
            </p>
            <p className={styles.powerNow}>
              Je vous apprends à développer une présence qui attire
              naturellement l'attention et inspire la confiance.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.stat}>
                <span className={styles.number}>97%</span>
                <span className={styles.label}>d'efficacité</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>800+</span>
                <span className={styles.label}>transformations</span>
              </div>
            </div>
            <Link href="/programmes/presence" className={styles.powerLink}>
              En savoir plus
            </Link>
          </article>
        </section>

        <section className={styles.coachingSection} aria-labelledby="coaching-title">
          <h2 id="coaching-title">Formules de Coaching Personnalisé</h2>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingCard}>
              <div className={styles.coachingHeader}>
                <h3>Initiation Héroïque</h3>
                <div className={styles.price}>99€</div>
              </div>
              <ul className={styles.coachingFeatures}>
                <li>1 session de coaching individuel (1h)</li>
                <li>Analyse de votre profil de séduction</li>
                <li>Plan d'action personnalisé</li>
                <li>Support par email pendant 1 semaine</li>
              </ul>
              <Link href="/contact" className={styles.coachingButton}>
                Réserver ma session
              </Link>
            </div>

            <div className={`${styles.coachingCard} ${styles.featured}`}>
              <div className={styles.featuredBadge}>Plus populaire</div>
              <div className={styles.coachingHeader}>
                <h3>Transformation Légendaire</h3>
                <div className={styles.price}>299€</div>
              </div>
              <ul className={styles.coachingFeatures}>
                <li>3 sessions de coaching individuel (3h)</li>
                <li>Analyse approfondie de votre profil</li>
                <li>Plan d'action détaillé sur 3 mois</li>
                <li>Exercices pratiques personnalisés</li>
                <li>Support WhatsApp prioritaire</li>
                <li>Accès aux ressources premium</li>
              </ul>
              <Link href="/contact" className={styles.coachingButton}>
                Commencer ma transformation
              </Link>
            </div>

            <div className={styles.coachingCard}>
              <div className={styles.coachingHeader}>
                <h3>Maîtrise Ultime</h3>
                <div className={styles.price}>599€</div>
              </div>
              <ul className={styles.coachingFeatures}>
                <li>6 sessions de coaching individuel (6h)</li>
                <li>Analyse complète de votre profil</li>
                <li>Plan d'action sur 6 mois</li>
                <li>Accompagnement personnalisé intensif</li>
                <li>Support WhatsApp 24/7</li>
                <li>Accès à vie aux ressources premium</li>
                <li>Suivi mensuel post-programme</li>
              </ul>
              <Link href="/contact" className={styles.coachingButton}>
                Devenir une légende
              </Link>
            </div>
          </div>
          <p className={styles.disclaimer}>
            * Ceci est un site humoristique créé dans le cadre d'un projet étudiant. 
            Aucun super-héros n'a été maltraité durant la création de ce site, 
            et aucun pouvoir de séduction n'est réellement à vendre. 
            Gardez le sourire ! 😉
          </p>
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
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 CSSéducteur - Le Super-Héros qui Révolutionne la Séduction - Tous droits réservés</p>
      </footer>
    </div>
  )
} 