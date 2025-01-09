import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const stats = [
  { number: '1000+', label: 'Vies Transformées' },
  { number: '98%', label: 'Taux de Réussite' },
  { number: '10+', label: 'Années d\'Expérience' }
]

const services = [
  {
    title: 'Pouvoirs Légendaires',
    description: 'Découvrez mes super-pouvoirs de séduction et apprenez à les maîtriser',
    icon: '/images/icones/powers.svg',
    link: '/pouvoirs'
  },
  {
    title: 'Conseils Stratégiques',
    description: 'Des techniques éprouvées pour développer votre charisme naturel',
    icon: '/images/icones/conseils.svg',
    link: '/conseils'
  },
  {
    title: 'Missions Spéciales',
    description: 'Des défis personnalisés pour tester et améliorer vos capacités',
    icon: '/images/icones/missions.svg',
    link: '/missions'
  }
]

const testimonials = [
  {
    quote: "Grâce à CSSéducteur, j'ai découvert un charisme naturel que je ne soupçonnais pas avoir. Sa méthode unique mêlant super-pouvoirs et coaching est vraiment efficace !",
    author: "Thomas D.",
    avatar: "/images/avatars/thomas.jpg",
    rating: 5
  },
  {
    quote: "Quand on m'a parlé de CSSéducteur, j'étais sceptique. Mais sa double expertise de super-héros et coach a complètement transformé ma vie en quelques semaines !",
    author: "Sophie M.",
    avatar: "/images/avatars/sophie.jpg",
    rating: 5
  },
  {
    quote: "L'approche de CSSéducteur est unique - il utilise vraiment ses super-pouvoirs pour nous aider à développer notre confiance. Les résultats sont impressionnants !",
    author: "Marc L.",
    avatar: "/images/avatars/marc.jpg",
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
            <Link href="/pouvoirs">Pouvoirs</Link>
            <Link href="/conseils">Conseils</Link>
            <Link href="/missions">Missions</Link>
            <Link href="/histoire">Histoire</Link>
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
              <span className={styles.titleLine}>De Super-Héros</span>
              <span className={styles.titleLine}>à <span className={styles.accent}>CSSéducteur</span></span>
            </h1>
            <p className={styles.heroTagline}>
              Ancien super-héros Marvel, j'utilise mes pouvoirs extraordinaires pour révéler votre potentiel de séduction
            </p>
            <Link href="/pouvoirs" className={styles.ctaButton}>
              Découvrir Mes Pouvoirs
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Qui suis-je ?</h2>
              <p>
                Après des années à sauver le monde en tant que super-héros Marvel,
                j'ai décidé de mettre mes pouvoirs au service d'une nouvelle mission :
                vous aider à devenir la meilleure version de vous-même.
              </p>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/images/hero-coach/hero-coach.jpg"
                alt="CSSéducteur - De super-héros à coach en séduction"
                width={400}
                height={400}
                className={styles.heroCoachImage}
                priority
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Comment je peux vous aider</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link href={service.link} key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
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
          <h2>Ils ont été transformés</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialAvatar}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.rating}>
                  {'★'.repeat(testimonial.rating)}
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <cite>{testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.finalCta}>
          <h2>Prêt à Révéler Votre Potentiel ?</h2>
          <p>
            Rejoignez les centaines de personnes qui ont déjà transformé leur vie
            grâce aux pouvoirs de CSSéducteur
          </p>
          <Link href="/pouvoirs" className={styles.ctaButton}>
            Commencer Ma Transformation
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 CSSéducteur - Tous droits réservés</p>
      </footer>
    </div>
  )
}
