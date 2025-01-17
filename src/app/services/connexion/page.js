import styles from './page.module.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'La Connexion Authentique | CSSéducteur - Créez des Liens Profonds et Durables',
  description: 'Découvrez avec CSSéducteur les secrets de la connexion authentique. Apprenez à créer des liens émotionnels profonds, à développer votre intelligence relationnelle et à établir des relations sincères.',
  keywords: 'connexion authentique, intelligence émotionnelle, relations sincères, liens profonds, CSSéducteur, développement relationnel, séduction authentique',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "La Connexion Authentique : Guide Complet pour Créer des Liens Profonds",
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
    "@id": "https://csseducteur.com/services/connexion"
  },
  "description": "Guide complet sur l'art de la connexion authentique et le développement de relations profondes par CSSéducteur.",
};

export default function Connexion() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <Link href="/services/charisme" className={styles.prevPageButton} aria-label="Retour au Charisme Naturel">
          ←
        </Link>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>La Connexion Authentique : L'Art des Relations Profondes</h1>
            <p className={styles.subtitle}>
              Découvrez avec CSSéducteur comment créer des connexions authentiques et durables. Maîtrisez l'art de l'écoute profonde, de l'empathie et du partage émotionnel pour établir des relations véritablement significatives.
            </p>
          </div>
        </section>

        {/* Table des matières */}
        <section className={styles.section}>
          <div className={styles.container}>
            <nav className={styles.tableOfContents}>
              <h2>Table des matières</h2>
              <ul>
                <li><a href="#introduction">Introduction à la Connexion Authentique</a></li>
                <li><a href="#fondamentaux">Les Fondamentaux de la Connexion</a></li>
                <li><a href="#elements">Les Éléments Clés de l'Authenticité</a></li>
                <li><a href="#techniques">Techniques pour Créer des Liens Profonds</a></li>
                <li><a href="#exercices">Exercices Pratiques et Applications</a></li>
                <li><a href="#faq">FAQ sur la Connexion Authentique</a></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Introduction à la Connexion Authentique</h2>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>La connexion authentique est au cœur de toute relation significative. Chez CSSéducteur, nous vous enseignons comment créer ces liens profonds qui transforment les rencontres superficielles en relations durables et enrichissantes.</p>
                <p>Dans ce guide complet, nous explorerons les principes fondamentaux de la connexion authentique et comment les appliquer dans vos interactions quotidiennes pour créer des relations plus profondes et plus satisfaisantes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Les Fondamentaux */}
        <section id="fondamentaux" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les Fondamentaux de la Connexion</h2>
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <h3>L'Écoute Active</h3>
                <p>Développez votre capacité à écouter véritablement, au-delà des mots, pour comprendre les émotions et les besoins non exprimés.</p>
              </div>
              <div className={styles.pillarCard}>
                <h3>L'Empathie</h3>
                <p>Apprenez à ressentir et comprendre les émotions des autres pour créer des liens plus profonds avec la méthode CSSéducteur.</p>
              </div>
              <div className={styles.pillarCard}>
                <h3>La Vulnérabilité</h3>
                <p>Découvrez comment le partage authentique de soi peut renforcer les connexions et approfondir les relations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Éléments Clés */}
        <section id="elements" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Les Éléments Clés de l'Authenticité</h2>
            <div className={styles.contentGrid}>
              <div className={styles.text}>
                <p>CSSéducteur vous guide dans la maîtrise des éléments essentiels de l'authenticité :</p>
                <ul>
                  <li>La présence émotionnelle</li>
                  <li>La communication non-verbale authentique</li>
                  <li>Le partage émotionnel sincère</li>
                  <li>La création d'un espace de confiance</li>
                  <li>Le développement de la résonance émotionnelle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section id="techniques" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Techniques pour Créer des Liens Profonds</h2>
            <div className={styles.techniquesGrid}>
              <div className={styles.techniqueCard}>
                <h3>Mirroring Émotionnel</h3>
                <p>Apprenez à refléter subtilement les émotions pour créer une connexion naturelle avec la méthode CSSéducteur.</p>
              </div>
              <div className={styles.techniqueCard}>
                <h3>Questions Profondes</h3>
                <p>Maîtrisez l'art de poser des questions qui créent une véritable intimité émotionnelle.</p>
              </div>
              <div className={styles.techniqueCard}>
                <h3>Partage Authentique</h3>
                <p>Développez votre capacité à partager avec authenticité tout en maintenant des limites saines.</p>
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
                <h3>Exercices d'Écoute</h3>
                <p>Pratiquez l'écoute profonde avec les techniques exclusives de CSSéducteur.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>Pratique de l'Empathie</h3>
                <p>Développez votre intelligence émotionnelle à travers des exercices guidés.</p>
              </div>
              <div className={styles.stepCard}>
                <h3>Journal de Connexion</h3>
                <p>Suivez votre progression dans la création de liens authentiques.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Prêt à Créer des Connexions Authentiques ?</h2>
            <p>Rejoignez CSSéducteur pour apprendre à établir des relations profondes et significatives.</p>
            <a href="tel:+33787338604" className={styles.ctaButton}>
              Réserver ma session
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>FAQ sur la Connexion Authentique</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Comment créer une connexion authentique rapidement ?</h3>
                <p>Avec CSSéducteur, vous apprendrez que la qualité de la connexion prime sur la rapidité. Nous vous enseignons des techniques pour établir des liens sincères naturellement.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Peut-on approfondir une connexion existante ?</h3>
                <p>Absolument ! Nos techniques vous permettent d'approfondir toutes vos relations, qu'elles soient nouvelles ou existantes.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Comment maintenir l'authenticité dans la durée ?</h3>
                <p>CSSéducteur vous fournit des outils concrets pour cultiver et maintenir des connexions authentiques sur le long terme.</p>
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