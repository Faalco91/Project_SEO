import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Le Charisme Naturel | CSSéducteur - Développez votre Magnétisme Personnel',
  description: 'Découvrez les secrets du charisme naturel avec CSSéducteur. Apprenez à développer votre présence, votre confiance et votre magnétisme personnel pour devenir naturellement attirant.',
  keywords: 'charisme naturel, magnétisme personnel, confiance en soi, présence, CSSéducteur, développement personnel, séduction naturelle',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Le Charisme Naturel : Guide Complet pour Développer votre Magnétisme Personnel",
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
    "@id": "https://csseducteur.com/services/charisme"
  },
  "description": "Guide complet sur le développement du charisme naturel et du magnétisme personnel par CSSéducteur.",
};

export default function Charisme() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/communication" className={styles.prevPageButton} aria-label="Retour à l'Art de la Communication">
          ←
        </Link>
        <Link href="/services/connexion" className={styles.nextPageButton} aria-label="Aller à la Connexion Authentique">
          →
        </Link>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Le Charisme Naturel : L'Art du Magnétisme Personnel</h1>
            <p className={styles.subtitle}>
              Découvrez les secrets du charisme authentique avec CSSéducteur. Apprenez à développer votre présence magnétique, votre confiance naturelle et votre capacité à captiver naturellement l'attention.
            </p>
          </div>
        </section>

        {/* Table des matières */}
        <section className={styles.section}>
          <div className={styles.container}>
            <nav className={styles.tableOfContents}>
              <h2>Table des matières</h2>
              <ul>
                <li><a href="#introduction">Introduction au Charisme Naturel</a></li>
                <li><a href="#fondamentaux">Les Fondamentaux du Charisme</a></li>
                <li><a href="#elements">Les Éléments Clés du Magnétisme Personnel</a></li>
                <li><a href="#techniques">Techniques pour Développer son Charisme</a></li>
                <li><a href="#exercices">Exercices Pratiques et Applications</a></li>
                <li><a href="#faq">FAQ sur le Développement du Charisme</a></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Introduction au Charisme Naturel</h2>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>Le charisme naturel est cette qualité mystérieuse qui permet à certaines personnes de captiver naturellement l'attention et d'inspirer confiance. Chez CSSéducteur, nous croyons que le charisme peut être développé et affiné grâce à des techniques spécifiques et une pratique régulière.</p>
                <p>Dans ce guide complet, nous explorerons les différentes facettes du charisme et comment vous pouvez développer votre propre magnétisme personnel de manière authentique.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Les Fondamentaux */}
        <section id="fondamentaux" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les Fondamentaux du Charisme</h2>
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <h3>La Présence</h3>
                <p>Apprenez à être pleinement présent dans l'instant, à développer votre conscience corporelle et à projeter une énergie positive.</p>
              </div>
              <div className={styles.pillarCard}>
                <h3>L'Authenticité</h3>
                <p>Découvrez comment rester fidèle à vous-même tout en développant votre charisme naturel.</p>
              </div>
              <div className={styles.pillarCard}>
                <h3>La Confiance</h3>
                <p>Construisez une confiance inébranlable basée sur vos valeurs et vos compétences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Éléments Clés */}
        <section id="elements" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les Éléments Clés du Magnétisme Personnel</h2>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>Le magnétisme personnel repose sur plusieurs éléments clés que CSSéducteur vous aide à maîtriser :</p>
                <ul>
                  <li>Le langage corporel et la posture</li>
                  <li>La voix et l'expression vocale</li>
                  <li>L'écoute active et l'empathie</li>
                  <li>La gestion des émotions</li>
                  <li>L'art de la conversation captivante</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section id="techniques" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Techniques pour Développer son Charisme</h2>
            <div className={styles.techniquesGrid}>
              <div className={styles.techniqueCard}>
                <h3>Exercices de Présence</h3>
                <p>Des exercices pratiques pour développer votre présence et votre impact.</p>
              </div>
              <div className={styles.techniqueCard}>
                <h3>Communication Non-Verbale</h3>
                <p>Maîtrisez l'art du langage corporel charismatique.</p>
              </div>
              <div className={styles.techniqueCard}>
                <h3>Storytelling Personnel</h3>
                <p>Apprenez à raconter des histoires captivantes qui marquent les esprits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exercices Pratiques */}
        <section id="exercices" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Exercices Pratiques et Applications</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <h3>Méditation de Présence</h3>
                <p>Exercices quotidiens pour renforcer votre présence et votre ancrage.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>Jeux de Rôle</h3>
                <p>Mises en situation pour pratiquer vos compétences charismatiques.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>Journal de Progression</h3>
                <p>Suivez votre évolution et identifiez vos points forts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Prêt à Développer Votre Charisme Naturel ?</h2>
            <p>Rejoignez CSSéducteur pour un accompagnement personnalisé dans le développement de votre charisme.</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Réserver ma session
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>FAQ sur le Développement du Charisme</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Le charisme est-il inné ou peut-il être développé ?</h3>
                <p>Bien que certaines personnes semblent naturellement charismatiques, le charisme peut absolument être développé et amélioré avec les bonnes techniques et de la pratique.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Combien de temps faut-il pour développer son charisme ?</h3>
                <p>Le développement du charisme est un processus continu, mais vous pouvez commencer à voir des résultats en quelques semaines avec une pratique régulière.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Comment rester authentique tout en développant son charisme ?</h3>
                <p>Chez CSSéducteur, nous mettons l'accent sur le développement d'un charisme qui reste fidèle à votre personnalité unique.</p>
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