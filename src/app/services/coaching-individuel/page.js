import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Coaching Individuel | CSSéducteur - Développez votre potentiel de séduction',
  description: 'Découvrez le programme de coaching individuel CSSéducteur. Une approche personnalisée pour développer votre charisme, votre confiance en vous et vos compétences en séduction.',
  keywords: 'coaching individuel, CSSéducteur, séduction, développement personnel, confiance en soi, charisme, coach séduction',
};

// Schémas JSON-LD pour le SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.csseducteur.com/services/coaching-individuel',
      'name': 'Coaching Individuel CSSéducteur',
      'description': 'Programme de coaching personnalisé pour développer votre potentiel de séduction et votre charisme',
      'provider': {
        '@type': 'Organization',
        'name': 'CSSéducteur',
        'url': 'https://www.csseducteur.com'
      },
      'serviceType': 'Coaching en séduction',
      'areaServed': 'France',
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'price': '150.00',
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
          'name': 'Quelle est la durée du programme ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le programme CSSéducteur s\'adapte à vos besoins, généralement entre 3 et 6 mois pour des résultats optimaux.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Où se déroulent les séances ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les séances peuvent se dérouler en présentiel ou en visioconférence, selon votre préférence.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la fréquence des séances ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nous recommandons une séance hebdomadaire pour maintenir une progression constante.'
          }
        }
      ]
    },
    {
      '@type': 'Product',
      'name': 'Programme de Coaching Individuel CSSéducteur',
      'description': 'Un programme de coaching personnalisé pour développer votre charisme et vos compétences en séduction',
      'brand': {
        '@type': 'Brand',
        'name': 'CSSéducteur'
      },
      'review': [
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': 'Thomas'
          },
          'reviewBody': 'Grâce au coaching individuel CSSéducteur, j\'ai complètement transformé ma vie sociale. Mon coach m\'a aidé à développer une confiance en moi inébranlable.'
        },
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': 'Laurent'
          },
          'reviewBody': 'L\'approche personnalisée de CSSéducteur m\'a permis de progresser à mon rythme. Les résultats ont dépassé mes attentes.'
        }
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5',
        'reviewCount': '2'
      }
    }
  ]
};

export default function CoachingIndividuel() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/coaching-groupe" className={styles.nextPageButton} aria-label="Aller au Coaching en Groupe">
          →
        </Link>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Coaching Individuel CSSéducteur</h1>
            <p className={styles.subtitle}>
              Transformez votre vie amoureuse avec un accompagnement sur mesure
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Pourquoi choisir le coaching individuel CSSéducteur ?</h2>
            <p className={styles.text}>
              Le coaching individuel CSSéducteur représente l'excellence en matière d'accompagnement personnalisé dans l'art de la séduction. Notre approche unique, développée par les experts CSSéducteur, combine les techniques les plus avancées en développement personnel avec une méthodologie éprouvée en séduction moderne.
            </p>
            <p className={styles.text}>
              Chez CSSéducteur, nous comprenons que chaque personne est unique, avec ses propres défis et objectifs. C'est pourquoi notre programme de coaching individuel est entièrement personnalisé, s'adaptant à votre personnalité, votre rythme et vos aspirations. Nos coachs certifiés CSSéducteur vous accompagnent pas à pas dans votre transformation, en utilisant des techniques exclusives développées au fil de nombreuses années d'expérience.
            </p>
            <p className={styles.text}>
              La méthode CSSéducteur se distingue par son approche holistique, travaillant simultanément sur le développement de votre charisme naturel, l'amélioration de votre communication non-verbale, et le renforcement de votre confiance en vous. Notre expertise unique en tant que leader du coaching en séduction nous permet de vous offrir un accompagnement d'exception, avec des résultats tangibles et durables.
            </p>
            <p className={styles.text}>
              En choisissant le coaching individuel CSSéducteur, vous bénéficiez non seulement d'un suivi personnalisé par des experts reconnus, mais aussi d'un accès privilégié à notre communauté grandissante et à nos ressources exclusives. Notre taux de satisfaction client de 98% témoigne de l'efficacité de notre approche et de notre engagement envers votre réussite.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Quels sont les avantages du coaching individuel ?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Accompagnement Personnalisé</h3>
                <p>Votre coach CSSéducteur adapte chaque session à vos besoins spécifiques et à votre personnalité unique.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Progression Rapide</h3>
                <p>Bénéficiez d'un feedback immédiat et d'exercices pratiques pour accélérer votre développement.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Confidentialité Totale</h3>
                <p>Évoluez dans un cadre privé et confidentiel pour explorer sereinement votre potentiel.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Expertise Reconnue</h3>
                <p>Profitez de l'expertise CSSéducteur, référence dans le domaine de la séduction et du développement personnel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Quel est notre Programme de Coaching ?</h2>
            <div className={styles.programContent}>
              <h3>Phase 1 : Diagnostic et Objectifs</h3>
              <p>Évaluation approfondie de votre situation actuelle et définition d'objectifs clairs avec votre coach CSSéducteur.</p>

              <h3>Phase 2 : Développement des Compétences</h3>
              <p>Travail sur le charisme, la communication non-verbale, et les techniques de conversation avec la méthode CSSéducteur.</p>

              <h3>Phase 3 : Mise en Pratique</h3>
              <p>Exercices pratiques et mises en situation pour ancrer les apprentissages dans votre quotidien.</p>

              <h3>Phase 4 : Suivi et Ajustements</h3>
              <p>Accompagnement continu et ajustements personnalisés pour optimiser vos résultats.</p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Témoignages de nos clients</h2>
            <div className={styles.testimonials}>
              <blockquote className={styles.testimonial}>
                "Grâce au coaching individuel CSSéducteur, j'ai complètement transformé ma vie sociale. Mon coach m'a aidé à développer une confiance en moi inébranlable."
                <footer>- Thomas, 32 ans</footer>
              </blockquote>
              <blockquote className={styles.testimonial}>
                "L'approche personnalisée de CSSéducteur m'a permis de progresser à mon rythme. Les résultats ont dépassé mes attentes."
                <footer>- Laurent, 28 ans</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Prêt à transformer votre vie amoureuse ?</h2>
            <p>Réservez votre première session de coaching individuel CSSéducteur</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Réserver ma session
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Quelle est la durée du programme ?</h3>
                <p>Le programme CSSéducteur s'adapte à vos besoins, généralement entre 3 et 6 mois pour des résultats optimaux.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Où se déroulent les séances ?</h3>
                <p>Les séances peuvent se dérouler en présentiel ou en visioconférence, selon votre préférence.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Quelle est la fréquence des séances ?</h3>
                <p>Nous recommandons une séance hebdomadaire pour maintenir une progression constante.</p>
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