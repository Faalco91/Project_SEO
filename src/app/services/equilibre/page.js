import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: "L'Équilibre de Vie - Harmonisez votre Quotidien avec CSSéducteur",
  description: "Découvrez comment CSSéducteur vous aide à trouver l'équilibre parfait entre vie personnelle, professionnelle et sociale. Apprenez à gérer votre temps et votre énergie efficacement.",
  keywords: 'équilibre de vie, gestion du temps, bien-être, CSSéducteur, développement personnel, harmonie, stress',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L'Équilibre de Vie : Guide Complet pour une Vie Harmonieuse",
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
    "@id": "https://csseducteur.com/services/equilibre"
  },
  "description": "Guide complet sur l'équilibre de vie et l'harmonie personnelle avec CSSéducteur.",
};

export default function Equilibre() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/croissance" className={styles.prevPageButton} aria-label="Retour à La Croissance Personnelle">
          ←
        </Link>
        <Link href="/services/resilience" className={styles.nextPageButton} aria-label="Aller à La Résilience Émotionnelle">
          →
        </Link>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Trouvez votre Équilibre de Vie avec CSSéducteur</h1>
            <p className={styles.subtitle}>
              Découvrez les clés d'une vie équilibrée et épanouissante. Avec CSSéducteur, apprenez à harmoniser tous les aspects de votre vie pour un bien-être optimal.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>L'équilibre de vie est essentiel pour réussir dans tous les domaines. Chez CSSéducteur, nous vous guidons vers une harmonie parfaite entre vie personnelle, professionnelle et sociale.</p>
                <p>Notre approche holistique vous permet de développer les compétences nécessaires pour gérer votre temps, votre énergie et vos priorités de manière optimale, tout en maintenant une vie sociale épanouie.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que l'équilibre de vie ? */}
        <section id="definition" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Qu'est-ce que l'Équilibre de Vie ?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Gestion du Temps</h3>
                <p>Maîtrisez l'art de la planification et de la priorisation avec les techniques CSSéducteur pour optimiser votre quotidien.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Énergie et Bien-être</h3>
                <p>Développez des habitudes saines pour maintenir un niveau d'énergie optimal tout au long de la journée.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Harmonie Sociale</h3>
                <p>Créez et maintenez des relations enrichissantes sans sacrifier vos autres objectifs de vie.</p>
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
                <h3>Analyse Personnalisée</h3>
                <p>Évaluez votre situation actuelle et identifiez les domaines nécessitant plus d'attention avec nos outils CSSéducteur.</p>
              </div>
              <div className={styles.methodCard}>
                <h3>Stratégies sur Mesure</h3>
                <p>Recevez des conseils et techniques adaptés à votre style de vie et vos objectifs personnels.</p>
              </div>
              <div className={styles.methodCard}>
                <h3>Suivi et Ajustements</h3>
                <p>Bénéficiez d'un accompagnement continu pour maintenir votre équilibre dans la durée.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Étapes pratiques */}
        <section id="etapes" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Étapes vers l'Équilibre</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <h3>1. Évaluation</h3>
                <p>Analysez votre situation actuelle avec les outils d'évaluation CSSéducteur pour identifier les déséquilibres.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>2. Planification</h3>
                <p>Créez un plan d'action personnalisé pour atteindre vos objectifs d'équilibre.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>3. Mise en Pratique</h3>
                <p>Intégrez les techniques CSSéducteur dans votre quotidien pour une transformation durable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section id="temoignages" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Ils ont Trouvé leur Équilibre avec CSSéducteur</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p>"Grâce à CSSéducteur, j'ai enfin trouvé l'équilibre parfait entre ma carrière et ma vie personnelle."</p>
                <cite>- Sophie, 34 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Les techniques de gestion du temps de CSSéducteur ont transformé mon quotidien. Je me sens plus serein et efficace."</p>
                <cite>- Marc, 29 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"J'ai appris à dire non et à prioriser ce qui compte vraiment. Un vrai changement de vie !"</p>
                <cite>- Julie, 31 ans</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Prêt à Trouver votre Équilibre ?</h2>
            <p>Rejoignez CSSéducteur et découvrez comment harmoniser tous les aspects de votre vie.</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Commencer mon équilibre
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Comment CSSéducteur m'aide à gérer mon temps efficacement ?</h3>
                <p>Nos experts vous enseignent des techniques éprouvées de gestion du temps, adaptées à votre style de vie et vos objectifs personnels.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Combien de temps faut-il pour trouver son équilibre ?</h3>
                <p>Avec CSSéducteur, les premiers résultats sont visibles en quelques semaines, mais nous vous accompagnons pour maintenir cet équilibre sur le long terme.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Est-il possible de concilier vie professionnelle et personnelle ?</h3>
                <p>Absolument ! CSSéducteur vous donne les outils et stratégies pour créer une harmonie durable entre tous les aspects de votre vie.</p>
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