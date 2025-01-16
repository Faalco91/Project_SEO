import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Conférences | CSSéducteur - Inspirez-vous et transformez votre vie',
  description: 'Participez aux conférences CSSéducteur. Des événements inspirants pour découvrir les secrets de la séduction et du développement personnel.',
  keywords: 'conférences, CSSéducteur, séduction, développement personnel, événements, conférencier, inspiration, transformation',
};

// Schémas JSON-LD pour le SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': 'https://www.csseducteur.com/services/conferences',
      'name': 'Conférences CSSéducteur',
      'description': 'Conférences inspirantes sur la séduction et le développement personnel',
      'organizer': {
        '@type': 'Organization',
        'name': 'CSSéducteur',
        'url': 'https://www.csseducteur.com'
      },
      'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
      'eventStatus': 'https://schema.org/EventScheduled',
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'price': '49.00',
        'priceCurrency': 'EUR'
      }
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quelle est la durée d\'une conférence ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nos conférences durent généralement 2 heures, incluant une session de questions-réponses.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Où se déroulent les conférences ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les conférences se tiennent au pôle nord.'
          }
        }
      ]
    }
  ]
};

export default function Conferences() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/ateliers-pratiques" className={styles.prevPageButton} aria-label="Retour aux Ateliers Pratiques">
          →
        </Link>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Conférences CSSéducteur</h1>
            <p className={styles.subtitle}>
              Découvrez les secrets de la séduction et du développement personnel lors de nos conférences inspirantes
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Pourquoi assister aux conférences CSSéducteur ?</h2>
            <p className={styles.text}>
              Les conférences CSSéducteur sont des moments uniques d'inspiration et de partage. Nos experts partagent leur expérience et leurs connaissances pour vous aider à transformer votre vie amoureuse et sociale.
            </p>
            <p className={styles.text}>
              Chez CSSéducteur, nous croyons en la puissance des idées et des exemples concrets. Nos conférences sont conçues pour vous donner les clés d'une séduction authentique et d'un développement personnel réussi.
            </p>
            <p className={styles.text}>
              La méthode CSSéducteur, présentée lors de nos conférences, s'appuie sur des années d'expérience et des centaines de success stories. Vous découvrirez des concepts innovants et des techniques éprouvées.
            </p>
            <p className={styles.text}>
              En participant aux conférences CSSéducteur, vous rejoignez une communauté de personnes motivées et inspirantes. Notre taux de satisfaction de 98% témoigne de la qualité et de l'impact de nos événements.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les avantages de nos conférences</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Expertise Reconnue</h3>
                <p>Bénéficiez de l'expérience de nos conférenciers CSSéducteur experts en séduction.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Contenu Exclusif</h3>
                <p>Accédez à des concepts et techniques inédits, développés par CSSéducteur.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Networking</h3>
                <p>Rencontrez d'autres participants partageant les mêmes objectifs et ambitions.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Questions-Réponses</h3>
                <p>Posez vos questions directement à nos experts lors des sessions interactives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Thèmes de nos Conférences</h2>
            <div className={styles.programContent}>
              <h3>Les Fondamentaux de la Séduction</h3>
              <p>Découvrez les principes clés qui font la différence dans l'art de la séduction.</p>

              <h3>L'Intelligence Émotionnelle</h3>
              <p>Apprenez à comprendre et gérer vos émotions pour des relations plus authentiques.</p>

              <h3>Le Charisme Naturel</h3>
              <p>Développez votre présence et votre impact dans toutes vos interactions.</p>

              <h3>La Communication Avancée</h3>
              <p>Maîtrisez les subtilités de la communication verbale et non-verbale.</p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Témoignages de participants</h2>
            <div className={styles.testimonials}>
              <blockquote className={styles.testimonial}>
                "La conférence CSSéducteur m'a ouvert les yeux sur tant d'aspects de la séduction que j'ignorais. Une vraie révélation !"
                <footer>- Thomas, 29 ans</footer>
              </blockquote>
              <blockquote className={styles.testimonial}>
                "L'énergie du conférencier et la qualité du contenu m'ont totalement conquis. Je repars avec des outils concrets."
                <footer>- Marc, 34 ans</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Prêt à vous inspirer ?</h2>
            <p>Réservez votre place pour la prochaine conférence CSSéducteur</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Réserver ma place
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Quelle est la durée d'une conférence ?</h3>
                <p>Nos conférences durent généralement 2 heures, incluant une session de questions-réponses.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Où se déroulent les conférences ?</h3>
                <p>Les conférences se tiennent au pôle nord.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Y a-t-il un nombre limité de places ?</h3>
                <p>Oui, les places sont limitées pour garantir une expérience optimale. Réservation conseillée.</p>
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