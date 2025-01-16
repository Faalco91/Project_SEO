import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Coaching en Groupe | CSSéducteur - Développez votre potentiel de séduction',
  description: 'Découvrez le programme de coaching en groupe CSSéducteur. Une approche dynamique et interactive pour développer votre charisme et vos compétences en séduction.',
  keywords: 'coaching groupe, CSSéducteur, séduction, développement personnel, confiance en soi, charisme, coach séduction, atelier groupe',
};

// Schémas JSON-LD pour le SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.csseducteur.com/services/coaching-groupe',
      'name': 'Coaching en Groupe CSSéducteur',
      'description': 'Programme de coaching en groupe pour développer votre potentiel de séduction dans un cadre interactif',
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
        'price': '99.00',
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
          'name': 'Combien de participants par groupe ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nos groupes sont limités à 8 participants maximum pour garantir une attention personnalisée.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Où se déroulent les sessions de groupe ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les sessions se déroulent dans nos locaux à Paris et dans plusieurs grandes villes de France.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la durée du programme en groupe ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le programme se déroule sur 8 semaines avec une session hebdomadaire de 3 heures.'
          }
        }
      ]
    }
  ]
};

export default function CoachingGroupe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/coaching-individuel" className={styles.prevPageButton} aria-label="Retour au Coaching Individuel">
          →
        </Link>
        <Link href="/services/ateliers-pratiques" className={styles.nextPageButton} aria-label="Aller aux Ateliers Pratiques">
          →
        </Link>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Coaching en Groupe CSSéducteur</h1>
            <p className={styles.subtitle}>
              Développez votre potentiel de séduction dans une dynamique de groupe stimulante
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Pourquoi choisir le coaching en groupe CSSéducteur ?</h2>
            <p className={styles.text}>
              Le coaching en groupe CSSéducteur offre une expérience unique d'apprentissage collectif dans l'art de la séduction. Notre approche dynamique, développée par les experts CSSéducteur, combine l'émulation du groupe avec des techniques avancées de développement personnel.
            </p>
            <p className={styles.text}>
              Chez CSSéducteur, nous avons conçu nos sessions de groupe pour maximiser les interactions et les apprentissages mutuels. Chaque participant bénéficie non seulement de l'expertise de nos coachs certifiés, mais aussi des retours et du soutien des autres membres du groupe, créant une synergie unique propice au développement personnel.
            </p>
            <p className={styles.text}>
              La méthode CSSéducteur en groupe se distingue par sa capacité à créer un environnement bienveillant et stimulant. Vous progressez ensemble, partagez vos expériences, et développez vos compétences en séduction dans un cadre structuré et professionnel.
            </p>
            <p className={styles.text}>
              En rejoignant le coaching en groupe CSSéducteur, vous intégrez une communauté dynamique d'apprenants motivés. Notre taux de satisfaction de 95% témoigne de l'efficacité de notre approche collective et de la qualité de l'expérience d'apprentissage que nous proposons.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les avantages du coaching en groupe</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Dynamique de Groupe</h3>
                <p>Profitez de l'énergie collective et de l'émulation du groupe pour progresser plus rapidement.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Apprentissage Interactif</h3>
                <p>Bénéficiez des retours du groupe et partagez vos expériences dans un cadre bienveillant.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Prix Avantageux</h3>
                <p>Accédez à l'expertise CSSéducteur à un tarif optimisé grâce à la formule groupe.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Réseau Social</h3>
                <p>Construisez un réseau solide avec des personnes partageant les mêmes objectifs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Notre Programme de Coaching en Groupe</h2>
            <div className={styles.programContent}>
              <h3>Phase 1 : Fondations et Cohésion</h3>
              <p>Création d'une dynamique de groupe positive et définition des objectifs communs et individuels.</p>

              <h3>Phase 2 : Développement Collectif</h3>
              <p>Ateliers pratiques et exercices en groupe pour développer vos compétences en séduction.</p>

              <h3>Phase 3 : Pratique Interactive</h3>
              <p>Mises en situation réelles et feedback constructif du groupe et des coachs CSSéducteur.</p>

              <h3>Phase 4 : Progression Collective</h3>
              <p>Évaluation des progrès et renforcement des acquis en groupe.</p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Témoignages de nos participants</h2>
            <div className={styles.testimonials}>
              <blockquote className={styles.testimonial}>
                "Les sessions de groupe CSSéducteur m'ont permis de sortir de ma zone de confort. L'énergie du groupe est vraiment motivante !"
                <footer>- Nicolas, 29 ans</footer>
              </blockquote>
              <blockquote className={styles.testimonial}>
                "J'ai adoré l'ambiance des sessions et les progrès que nous avons fait ensemble. Une expérience enrichissante !"
                <footer>- Marc, 34 ans</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Prêt à rejoindre notre prochain groupe ?</h2>
            <p>Réservez votre place dans notre programme de coaching en groupe CSSéducteur</p>
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
                <h3>Combien de participants par groupe ?</h3>
                <p>Nos groupes sont limités à 8 participants maximum pour garantir une attention personnalisée.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Où se déroulent les sessions ?</h3>
                <p>Les sessions se déroulent dans nos locaux à Paris et dans plusieurs grandes villes de France.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Quelle est la durée du programme ?</h3>
                <p>Le programme se déroule sur 8 semaines avec une session hebdomadaire de 3 heures.</p>
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