import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: "La Résilience Émotionnelle - Développez votre Force Intérieure avec CSSéducteur",
  description: "Découvrez comment CSSéducteur vous aide à développer votre résilience émotionnelle. Apprenez à gérer vos émotions et à transformer les défis en opportunités de croissance.",
  keywords: 'résilience émotionnelle, gestion des émotions, force mentale, CSSéducteur, développement personnel, bien-être émotionnel, intelligence émotionnelle',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "La Résilience Émotionnelle : Guide Complet pour une Force Intérieure",
  "author": {
    "@type": "Person",
    "name": "CSSéducteur"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CSSéducteur",
    "logo": {
      "@type": "ImageObject",
      "url": "https://csseducteur.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://csseducteur.com/services/resilience"
  },
  "description": "Guide complet sur la résilience émotionnelle et le développement de la force intérieure avec CSSéducteur.",
};

export default function Resilience() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/equilibre" className={styles.prevPageButton} aria-label="Retour à L'Équilibre de Vie">
          ←
        </Link>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Développez votre Résilience Émotionnelle avec CSSéducteur</h1>
            <p className={styles.subtitle}>
              Découvrez les clés pour renforcer votre force intérieure et transformer les défis en opportunités. Avec CSSéducteur, apprenez à maîtriser vos émotions et à rebondir face à l'adversité.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>La résilience émotionnelle est une compétence essentielle pour naviguer dans les défis de la vie. Chez CSSéducteur, nous vous guidons vers une meilleure compréhension et gestion de vos émotions.</p>
                <p>Notre approche unique combine des techniques éprouvées de gestion émotionnelle avec des stratégies pratiques pour développer votre force intérieure et votre capacité à rebondir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que la résilience émotionnelle ? */}
        <section id="definition" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Qu'est-ce que la Résilience Émotionnelle ?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Gestion des Émotions</h3>
                <p>Maîtrisez l'art de comprendre et gérer vos émotions avec les techniques CSSéducteur pour une plus grande stabilité émotionnelle.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Force Mentale</h3>
                <p>Développez votre capacité à faire face aux défis et à maintenir une attitude positive même dans l'adversité.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Adaptation Positive</h3>
                <p>Apprenez à transformer les obstacles en opportunités de croissance et d'apprentissage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* L'accompagnement CSSéducteur */}
        <section id="accompagnement" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comment CSSéducteur vous Accompagne</h2>
            <div className={styles.methodGrid}>
              <div className={styles.methodCard}>
                <h3>Évaluation Émotionnelle</h3>
                <p>Identifiez vos schémas émotionnels et vos points de développement avec nos outils CSSéducteur spécialisés.</p>
              </div>
              <div className={styles.methodCard}>
                <h3>Techniques Personnalisées</h3>
                <p>Découvrez des stratégies sur mesure pour renforcer votre résilience et gérer efficacement vos émotions.</p>
              </div>
              <div className={styles.methodCard}>
                <h3>Pratique et Progression</h3>
                <p>Bénéficiez d'un accompagnement continu pour intégrer ces techniques dans votre quotidien.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Étapes pratiques */}
        <section id="etapes" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Étapes vers la Résilience</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <h3>1. Conscience Émotionnelle</h3>
                <p>Développez une meilleure compréhension de vos émotions et de leurs déclencheurs avec CSSéducteur.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>2. Stratégies d'Adaptation</h3>
                <p>Apprenez des techniques efficaces pour gérer le stress et les situations difficiles.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>3. Renforcement Mental</h3>
                <p>Construisez une force mentale durable grâce aux exercices pratiques CSSéducteur.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section id="temoignages" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Ils ont Développé leur Résilience avec CSSéducteur</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p>"Grâce à CSSéducteur, j'ai appris à gérer mes émotions de manière constructive. Je me sens plus fort face aux défis."</p>
                <cite>- Thomas, 28 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Les techniques de résilience de CSSéducteur m'ont permis de transformer mes échecs en opportunités d'apprentissage."</p>
                <cite>- Marie, 32 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"J'ai découvert une force intérieure que je ne soupçonnais pas. Un véritable changement dans ma vie !"</p>
                <cite>- Lucas, 35 ans</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Transformez votre vie dès aujourd'hui</h2>
            <p>Rejoignez CSSéducteur et découvrez votre force intérieure.</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Contactez-nous pour un premier rendez-vous
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Comment CSSéducteur m'aide à développer ma résilience ?</h3>
                <p>Nos experts vous accompagnent avec des techniques éprouvées et un suivi personnalisé pour renforcer votre capacité à faire face aux défis.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Combien de temps faut-il pour développer sa résilience ?</h3>
                <p>Avec CSSéducteur, vous constaterez des progrès dès les premières semaines, mais nous vous accompagnons sur le long terme pour une transformation durable.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>La résilience émotionnelle peut-elle vraiment s'apprendre ?</h3>
                <p>Absolument ! Comme toute compétence, la résilience se développe avec la pratique et les bonnes techniques, que CSSéducteur vous aide à maîtriser.</p>
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