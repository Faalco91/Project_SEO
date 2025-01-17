import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const stats = [
  { number: '1000+', label: 'Vies Transformées' },
  { number: '98%', label: 'Taux de Réussite' },
  { number: '10+', label: 'Années d\'Expérience' }
]

const raisons = [
  {
    title: 'Des Coachs Experte en Séduction',
    description: 'Nos coachs sont des professionnels reconnus dans le domaine de la séduction, offrant un accompagnement personnalisé et adapté à chaque client.',
    icon: '/images/icones/coachs.svg',
    link: '/coachs' // Lien vers la page des coachs pour en savoir plus
  },
  {
    title: 'Approche Personnalisée',
    description: 'Chaque client bénéficie d’un suivi sur mesure, que ce soit pour des coaching privés, en groupe, ou à travers nos programmes en ligne.',
    icon: '/images/icones/approche.svg',
    link: '/services' // Lien vers la page des services détaillés
  },
  {
    title: 'Résultats Concrets',
    description: 'Avec CSSéducteur, vous obtenez des résultats tangibles, que ce soit en termes de confiance en soi, de maîtrise des techniques de séduction, ou dans vos relations.',
    icon: '/images/icones/resultats.svg',
    link: '/temoignages' // Lien vers la page des témoignages pour montrer les résultats
  },
  {
    title: 'Suivi Continu',
    description: 'Nos coachs assurent un suivi régulier pour garantir que vous progressez constamment et que vous atteignez vos objectifs en séduction.',
    icon: '/images/icones/suivi.svg',
    link: '/services' // Lien vers la page de services avec suivi personnalisé
  }
];

const testimonials = [
  {
    quote: "Grâce à CSSéducteur, j'ai découvert un charisme naturel que je ne soupçonnais pas avoir. Sa méthode unique mêlant super-pouvoirs de séduction et coaching personnalisé m'a permis de transformer ma vie amoureuse. Le coaching en séduction proposé par CSSéducteur est véritablement révolutionnaire !",
    author: "Thomas D.",
    avatar: "/images/avatars/thomas.webp",
    rating: 5
  },
  {
    quote: "Avant de découvrir CSSéducteur, je ne croyais pas qu'un coaching en séduction pouvait changer ma vie. Mais grâce à l'approche unique de CSSéducteur, alliant charisme et super-pouvoirs, j'ai vu une transformation complète dans mes interactions sociales. C'est vraiment le meilleur choix pour un coaching en séduction efficace !",
    author: "Sophie M.",
    avatar: "/images/avatars/sophie.webp",
    rating: 5
  },
  {
    quote: "CSSéducteur m'a permis de découvrir un tout nouveau niveau de confiance en moi. Son coaching en séduction, couplé à des super-pouvoirs d'attraction, m'a offert des résultats exceptionnels. Si vous cherchez à booster vos compétences en séduction, CSSéducteur est le coach qu'il vous faut !",
    author: "Marc L.",
    avatar: "/images/avatars/marc.webp",
    rating: 5
  }
]



export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Accueil</Link>
            <Link href="/conseils">Services</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/">Coachs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.gradientOverlay}></div>
            <div className={styles.particles}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              CSSéducteur : Maîtrisez l'Art de la Séduction avec Style
            </h1>
            <p className={styles.heroTagline}>
              Programmes de Coaching en Séduction, Mentors Dévoués et Blog Inspirant pour Révéler le Séducteur en Vous !
            </p>
            <Link href="/programmes" className={styles.ctaButton}>
              Commencez Votre Transformation
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
            <header>
                <h2>À propos de nous</h2>
              </header>
              <p>Chez <strong>CSSéducteur</strong>, nous sommes une agence de <em>coaching en séduction</em> spécialisée, dédiée à transformer votre vie amoureuse et sociale. Notre équipe de <strong>coach en séduction</strong> expérimentés et reconnus vous propose un accompagnement personnalisé pour atteindre vos objectifs.</p>
              <p>Nous offrons des <strong>cours en groupe</strong>, des <strong>coachings privés</strong> sur mesure, ainsi que des <strong>programmes prêts à l'emploi</strong>, adaptés à tous les niveaux. Que vous souhaitiez <em>améliorer votre confiance en vous</em>, perfectionner vos techniques de séduction ou apprendre à maîtriser l'art de la communication, CSSéducteur est votre partenaire idéal pour réussir.</p>
              <p>Avec CSSéducteur, bénéficiez de conseils pratiques et d'un suivi professionnel grâce à nos <strong>mentors en séduction</strong>. Découvrez des méthodes éprouvées et un soutien constant pour révéler le séducteur qui sommeille en vous. Rejoignez-nous et transformez votre vie amoureuse avec les meilleurs experts du domaine.</p>
            </div>
            <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Pourquoi choisir CSSéducteur ?</h2>
          <div className={styles.servicesGrid}>
            {raisons.map((service, index) => (
              <Link href={service.link} key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    loading='lazy'
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <h2>Ils ont été transformés grâce à CSSéducteur !</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialAvatar}>
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.author} témoignage CSSéducteur`}
                    width={60}
                    height={60}
                    loading='lazy'
                  />
                </div>
                <div className={styles.rating} aria-label={`Note de ${testimonial.author} : ${testimonial.rating} étoiles`}>
                  {'★'.repeat(testimonial.rating)}
                </div>
                <blockquote aria-describedby="testimonial-quote-description">{testimonial.quote}</blockquote>
                <cite>{testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.finalCta}>
          <h2>Prêt à Révéler Votre Potentiel avec CSSéducteur ?</h2>
          <p>
            Rejoignez les centaines de personnes qui ont transformé leur vie grâce aux techniques uniques de séduction de CSSéducteur. Découvrez comment notre méthode peut vous aider à développer votre charisme et à révéler le séducteur qui sommeille en vous !
          </p>
          <Link href="/programmes" className={styles.ctaButton}>
            Commencer Ma Transformation avec CSSéducteur
          </Link>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 CSSéducteur - Tous droits réservés</p>
      </footer>
    </div>
  )
}
