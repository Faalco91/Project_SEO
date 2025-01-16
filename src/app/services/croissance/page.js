import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'La Croissance Personnelle - Transformez votre Vie avec CSSéducteur',
  description: 'Découvrez comment CSSéducteur vous aide à maximiser votre croissance personnelle grâce à des ressources exclusives et des conseils pratiques. Rejoignez-nous dès aujourd\'hui !',
  keywords: 'croissance personnelle, développement personnel, transformation personnelle, CSSéducteur, coaching personnel, évolution personnelle, confiance en soi',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Développez Votre Croissance Personnelle avec CSSéducteur",
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
    "@id": "https://csseducteur.com/services/croissance"
  },
  "description": "Guide complet sur la croissance personnelle et le développement de soi avec CSSéducteur.",
};

export default function Croissance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/equilibre" className={styles.nextPageButton} aria-label="Aller à L'Équilibre de Vie">
          →
        </Link>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Développez Votre Croissance Personnelle avec CSSéducteur</h1>
            <p className={styles.subtitle}>
              Découvrez les clés d'une transformation personnelle profonde et durable. Avec CSSéducteur, libérez votre potentiel et atteignez vos objectifs de développement personnel.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>La croissance personnelle est la clé d'une vie épanouissante et réussie. Chez CSSéducteur, nous croyons que chacun peut évoluer pour atteindre son plein potentiel, que ce soit dans la maîtrise de compétences techniques ou le développement d'une mentalité gagnante.</p>
                <p>Notre approche unique combine des méthodes éprouvées et des techniques innovantes pour vous accompagner dans chaque étape de votre développement personnel. Nous vous offrons les outils et le soutien nécessaires pour transformer vos aspirations en réalisations concrètes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que la croissance personnelle ? */}
        <section id="definition" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Qu'est-ce que la Croissance Personnelle ?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Confiance en Soi</h3>
                <p>Développez une assurance naturelle et une estime de soi inébranlable grâce aux techniques CSSéducteur.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Relations Interpersonnelles</h3>
                <p>Améliorez vos interactions sociales et créez des connexions authentiques et durables.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Évolution Professionnelle</h3>
                <p>Acquérez les compétences essentielles pour progresser dans votre carrière et atteindre vos objectifs.</p>
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
                <h3>Coaching Personnalisé</h3>
                <p>Un accompagnement sur mesure adapté à vos objectifs et votre rythme de progression.</p>
              </div>
              <div className={styles.methodCard}>
                <h3>Ressources Exclusives</h3>
                <p>Accédez à notre bibliothèque de contenus et exercices pratiques pour votre développement.</p>
              </div>
              <div className={styles.methodCard}>
                <h3>Suivi Régulier</h3>
                <p>Bénéficiez d'un soutien continu et d'évaluations régulières de vos progrès.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Étapes pratiques */}
        <section id="etapes" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Étapes pour Stimuler votre Croissance</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <h3>1. Introspection</h3>
                <p>Identifiez vos forces et axes d'amélioration avec nos outils d'auto-évaluation CSSéducteur.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>2. Objectifs SMART</h3>
                <p>Définissez des objectifs clairs et atteignables avec notre méthodologie éprouvée.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>3. Action</h3>
                <p>Mettez en pratique les techniques CSSéducteur dans votre quotidien.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section id="temoignages" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Ils ont Transformé leur Vie avec CSSéducteur</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p>"Grâce à CSSéducteur, j'ai développé une confiance en moi que je n'aurais jamais crue possible."</p>
                <cite>- Thomas, 28 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Le programme de croissance personnelle de CSSéducteur a complètement changé ma façon d'aborder les relations."</p>
                <cite>- Marie, 32 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Un accompagnement exceptionnel qui m'a permis de dépasser mes limites."</p>
                <cite>- Lucas, 35 ans</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Prêt à Transformer votre Vie ?</h2>
            <p>Rejoignez CSSéducteur et commencez votre voyage vers une meilleure version de vous-même.</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Commencer ma transformation
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Comment CSSéducteur aide à développer des compétences relationnelles ?</h3>
                <p>Notre approche combine théorie et pratique, avec des exercices concrets et un accompagnement personnalisé pour développer vos compétences sociales.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Quels sont les premiers pas pour démarrer sa croissance personnelle ?</h3>
                <p>Avec CSSéducteur, vous commencez par une évaluation personnalisée suivie d'un plan d'action adapté à vos objectifs spécifiques.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Combien de temps faut-il pour voir des résultats ?</h3>
                <p>Les premiers changements sont souvent visibles dès les premières semaines, mais la croissance personnelle est un voyage continu que CSSéducteur accompagne sur le long terme.</p>
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