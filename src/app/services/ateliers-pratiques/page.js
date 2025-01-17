import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Ateliers Pratiques | CSSéducteur - Développez votre potentiel de séduction',
  description: 'Participez aux ateliers pratiques CSSéducteur. Des sessions interactives et concrètes pour maîtriser les techniques de séduction et développer votre confiance en vous.',
  keywords: 'ateliers pratiques, CSSéducteur, séduction, développement personnel, confiance en soi, exercices pratiques, techniques séduction',
};

// Schémas JSON-LD pour le SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.csseducteur.com/services/ateliers-pratiques',
      'name': 'Ateliers Pratiques CSSéducteur',
      'description': 'Sessions pratiques et interactives pour maîtriser les techniques de séduction',
      'provider': {
        '@type': 'Organization',
        'name': 'CSSéducteur',
        'url': 'https://www.csseducteur.com'
      },
      'serviceType': 'Atelier de séduction',
      'areaServed': 'France',
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'price': '79.00',
        'priceCurrency': 'EUR',
        'validFrom': '2024-01-01',
        'priceValidUntil': '2024-12-31'
      }
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quelle est la durée d\'un atelier pratique ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Chaque atelier dure 4 heures avec des exercices pratiques et des mises en situation.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quel est le nombre de participants par atelier ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les ateliers sont limités à 12 participants pour garantir un apprentissage optimal.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Faut-il avoir de l\'expérience pour participer ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non, nos ateliers sont adaptés à tous les niveaux, du débutant à l\'avancé.'
          }
        }
      ]
    }
  ]
};

export default function AteliersPratiques() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/coaching-groupe" className={styles.prevPageButton} aria-label="Retour au Coaching en Groupe">
          →
        </Link>
        <Link href="/services/conferences" className={styles.nextPageButton} aria-label="Aller aux Conférences">
          →
        </Link>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Ateliers Pratiques CSSéducteur</h1>
            <p className={styles.subtitle}>
              Maîtrisez l'art de la séduction à travers des exercices concrets et des mises en situation
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Pourquoi choisir les ateliers pratiques CSSéducteur ?</h2>
            <p className={styles.text}>
              Les ateliers pratiques CSSéducteur vous offrent une expérience immersive unique dans l'apprentissage de la séduction. Notre approche hands-on, développée par les experts CSSéducteur, vous permet de mettre en pratique immédiatement les techniques enseignées.
            </p>
            <p className={styles.text}>
              Chez CSSéducteur, nous croyons en l'apprentissage par l'action. Nos ateliers sont conçus pour vous faire sortir de votre zone de confort dans un environnement bienveillant et encadré. Vous bénéficiez d'un feedback instantané de nos coachs experts et des autres participants.
            </p>
            <p className={styles.text}>
              La méthode CSSéducteur en atelier se distingue par son aspect concret et sa progression rapide. Chaque exercice est pensé pour développer une compétence spécifique en séduction, du langage corporel à l'art de la conversation.
            </p>
            <p className={styles.text}>
              En participant aux ateliers CSSéducteur, vous intégrez une communauté active de pratiquants motivés. Notre taux de satisfaction de 97% témoigne de l'efficacité de notre approche pratique et de l'impact immédiat sur votre développement personnel.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les avantages des ateliers pratiques</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Mise en Pratique Immédiate</h3>
                <p>Appliquez directement les techniques apprises avec des exercices concrets et du feedback instantané.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Environnement Sécurisé</h3>
                <p>Progressez dans un cadre bienveillant spécialement conçu pour votre développement.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Résultats Rapides</h3>
                <p>Constatez vos progrès dès la première session grâce à notre méthode CSSéducteur éprouvée.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Exercices Ciblés</h3>
                <p>Bénéficiez d'exercices spécifiques pour chaque aspect de la séduction et du développement personnel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Notre Programme d'Ateliers</h2>
            <div className={styles.programContent}>
              <h3>Module 1 : Communication Non-Verbale</h3>
              <p>Exercices pratiques sur la posture, les gestes et les expressions pour maximiser votre impact.</p>

              <h3>Module 2 : Art de la Conversation</h3>
              <p>Techniques d'écoute active et de storytelling avec des mises en situation réelles.</p>

              <h3>Module 3 : Gestion des Émotions</h3>
              <p>Exercices de confiance en soi et de gestion du stress en situation de séduction.</p>

              <h3>Module 4 : Dynamique Sociale</h3>
              <p>Pratique des interactions de groupe et développement de votre leadership naturel.</p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Témoignages de nos participants</h2>
            <div className={styles.testimonials}>
              <blockquote className={styles.testimonial}>
                "Les exercices pratiques m'ont permis de comprendre mes points forts et de travailler efficacement mes points faibles. Une vraie révélation !"
                <footer>- Alexandre, 31 ans</footer>
              </blockquote>
              <blockquote className={styles.testimonial}>
                "L'approche pratique de CSSéducteur est exactement ce dont j'avais besoin. En une journée, j'ai appris plus qu'en des mois de théorie."
                <footer>- Julien, 27 ans</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Prêt à passer à la pratique ?</h2>
            <p>Réservez votre place dans nos prochains ateliers pratiques CSSéducteur</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Réserver mon atelier
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Quelle est la durée d'un atelier ?</h3>
                <p>Chaque atelier dure 4 heures avec des exercices pratiques et des mises en situation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Combien de participants par atelier ?</h3>
                <p>Les ateliers sont limités à 12 participants pour garantir un apprentissage optimal.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Faut-il avoir de l'expérience ?</h3>
                <p>Non, nos ateliers sont adaptés à tous les niveaux, du débutant à l'avancé.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
        </footer>
      </main>
    </>
  );
} 