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
    link: '/blog' // Lien vers la page blog pour voir les résultats
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
    quote: "Le coaching personnalisé de CSSéducteur a complètement transformé ma vie sociale. Les techniques de séduction et de communication enseignées sont concrètes et efficaces. Grâce à leur approche professionnelle, j'ai développé une confiance en moi naturelle qui fait toute la différence dans mes relations. Merci CSSéducteur !",
    author: "Thomas D.",
    avatar: "/images/avatars/thomas.webp",
    rating: 5
  },
  {
    quote: "CSSéducteur propose une méthode de coaching en séduction unique et moderne. Les conseils personnalisés et le suivi régulier m'ont permis de progresser rapidement. J'ai particulièrement apprécié leur approche basée sur l'authenticité et le développement personnel. CSSéducteur est vraiment un coach en séduction qui change la vie !",
    author: "Sophie M.",
    avatar: "/images/avatars/sophie.webp",
    rating: 5
  },
  {
    quote: "En tant que client de CSSéducteur, j'ai été impressionné par la qualité de leur programme de coaching. Leurs techniques de séduction sont à la fois efficaces et respectueuses. Le coaching m'a aidé à développer mon charisme naturel et à créer des connexions authentiques.",
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
            <Link href="/services">Services</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/coachs">Coachs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
        <div className={styles.heroContent}>
          <h1>CSSéducteur : Maîtrisez l'Art de la Séduction avec Style</h1>
          <p>Programmes de Coaching en Séduction, Mentors Dévoués et Blog Inspirant pour Révéler le Séducteur en Vous</p>
          <Link href="/services" className={styles.ctaButton}>
            Commencez Votre Transformation
          </Link>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>À propos de nous</h2>
          <p className={styles.aboutText}>
            Chez CSSéducteur, nous sommes une agence de coaching en séduction spécialisée, dédiée à transformer votre vie amoureuse et sociale. Notre équipe de coach en séduction expérimentés et reconnus vous propose un accompagnement personnalisé pour atteindre vos objectifs.
          </p>
          <div className={styles.aboutStatsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.aboutStatCard}>
                <span className={styles.aboutStatNumber}>{stat.number}</span>
                <span className={styles.aboutStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.aboutText}>
            Nous offrons des cours en groupe, des coachings privés sur mesure, ainsi que des programmes prêts à l'emploi, adaptés à tous les niveaux. Que vous souhaitiez améliorer votre confiance en vous, perfectionner vos techniques de séduction ou apprendre à maîtriser l'art de la communication, CSSéducteur est votre partenaire idéal pour réussir.
          </p>
          <p className={styles.aboutText}>
            Avec CSSéducteur, bénéficiez de conseils pratiques et d'un suivi professionnel grâce à nos mentors en séduction. Découvrez des méthodes éprouvées et un soutien constant pour révéler le séducteur qui sommeille en vous. Rejoignez-nous et transformez votre vie amoureuse avec les meilleurs experts du domaine.
          </p>
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
          <Link href="/services" className={styles.ctaButton}>
            Commencer Ma Transformation avec CSSéducteur
          </Link>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
      </footer>
    </div>
  )
}
