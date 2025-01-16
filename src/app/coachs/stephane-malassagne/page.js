import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import stephane from '../../../../public/images/coachs/stephane_malassagne.webp';
import Script from 'next/script';

export const metadata = {
  title: "Stéphane Malassagne – Coach en Relations avec CSSéducteur",
  description: "Découvrez Stéphane Malassagne, le coach dynamique qui transforme vos relations. Grâce à CSSéducteur, boostez votre confiance et votre charisme.",
};

export default function StephaneMalassagne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stéphane Malassagne",
    "jobTitle": "Coach en Relations et Développement Personnel",
    "description": "Expert en communication et développement personnel chez CSSéducteur",
    "image": "../../../../public/images/coachs/stephane_malassagne.webp",
    "url": "https://csseducteur.fr/coachs/stephane-malassagne",
    "sameAs": [
      "https://www.tiktok.com/@stephanemalassagne",
      "https://www.youtube.com/@stephanemalassagne"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "CSSéducteur",
      "url": "https://csseducteur.fr"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "offers": {
      "@type": "Offer",
      "name": "Coaching en développement personnel et communication",
      "description": "Séances de coaching individuelles et ateliers collectifs pour booster votre confiance",
      "price": "150.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Laura M."
        },
        "reviewBody": "Avec Stéphane, je suis passée de 'je ne sais pas quoi dire' à 'je sais tout dire'. Il parle tellement qu'il vous pousse à vous exprimer juste pour qu'il se taise !"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Paul T."
        },
        "reviewBody": "Je pensais que son enthousiasme allait m'agacer, mais au final, il m'a donné la motivation que je cherchais depuis des années. Merci, Stéphane !"
      }
    ]
  };

  return (
    <div className={styles.container}>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Stéphane Malassagne – Votre Guide Vers le Succès avec CSSéducteur (Et Un Peu de Théâtralité)</h1>
            <div className={styles.heroImageContainer}>
              <Image
                src={stephane}
                alt="Stéphane Malassagne, Coach en Relations"
                width={300}
                height={300}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.introduction}>
              <p>Stéphane Malassagne ne fait jamais dans la demi-mesure. Coach en relations interpersonnelles, en développement personnel, et autoproclamé « dynamo humaine », Stéphane est là pour bousculer votre quotidien (et votre zone de confort) avec CSSéducteur.</p>
              <p>Connu pour son énergie débordante et son penchant pour les discours dignes de TED Talks (même quand ce n'est pas le moment), Stéphane croit que chaque personne peut atteindre des sommets… à condition d'être prêt à l'entendre parler de son propre succès d'abord.</p>
              <div className={styles.socialLinks}>
                <a href="https://www.youtube.com/@stephanemalassagne" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@stephanemalassagne" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qui est Stéphane Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Un Leader Inspirant (Et Parfois Inspiré Par Lui-Même)</h2>
          <div className={styles.content}>
            <div className={styles.card}>
              <h3>Son parcours</h3>
              <p>Stéphane a commencé dans le monde des affaires, où il aimait tellement motiver ses équipes qu'il en a fait une carrière à plein temps. Aujourd'hui, il est convaincu qu'il peut transformer n'importe qui en version 2.0 de lui-même, avec CSSéducteur en toile de fond.</p>
            </div>
            <div className={styles.card}>
              <h3>Ce que disent les réseaux sociaux</h3>
              <blockquote className={styles.quote}>
                "Stéphane, c'est le gars qui te motive, mais qui te fatigue avec son énergie sans fin."
              </blockquote>
              <p className={styles.response}>Stéphane répond : "Si je suis fatiguant, c'est parce que je suis inarrêtable !"</p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Stéphane Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pourquoi choisir Stéphane ?</h2>
          <p className={styles.subtitle}>Parce que sa confiance est contagieuse (même si son enthousiasme peut faire lever des sourcils).</p>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🔹</span>
              <p>Boostez votre énergie (préparez-vous à être rechargé en ultra-haute tension).</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🔹</span>
              <p>Fixez vos objectifs avec clarté (et une dose de « Allez, on y va ! »).</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🔹</span>
              <p>Apprenez l'art de séduire… sans crier « regardez-moi ! » comme Stéphane le fait parfois.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ce qu'il propose avec CSSéducteur</h2>
          <p className={styles.subtitle}>Stéphane a transformé son énergie en un programme unique (et un peu bruyant).</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Coaching individuel</h3>
              <p>Des sessions adaptées à votre rythme, même si Stéphane croit fermement que « vite et intense », c'est toujours mieux.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Ateliers en groupe</h3>
              <p>Travaillez votre communication et votre charisme… en essayant de suivre le débit rapide de Stéphane.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Programme exclusif CSSéducteur</h3>
              <p>Stéphane jure que son approche peut transformer votre confiance en vous en un atout irrésistible, à condition de supporter quelques anecdotes sur sa vie de « coach star ».</p>
            </div>
          </div>
        </section>

        {/* Témoignages Section */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>Témoignages drôles et authentiques</h2>
          <p className={styles.subtitle}>Stéphane, c'est un peu comme un shot d'espresso : intense, efficace, et parfois un peu trop.</p>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>Avec Stéphane, je suis passée de 'je ne sais pas quoi dire' à 'je sais tout dire'. Il parle tellement qu'il vous pousse à vous exprimer juste pour qu'il se taise !</p>
              <cite>- Laura M.</cite>
            </div>
            <div className={styles.testimonialCard}>
              <p>Je pensais que son enthousiasme allait m'agacer, mais au final, il m'a donné la motivation que je cherchais depuis des années. Merci, Stéphane !</p>
              <cite>- Paul T.</cite>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stéphane sur les réseaux sociaux</h2>
          <p className={styles.subtitle}>L'homme qui transforme chaque vidéo en spectacle.</p>
          <div className={styles.socialGrid}>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Pourquoi il crie tout le temps ?"</p>
              </div>
              <div className={styles.response}>
                <p>Stéphane : "Parce que la passion, ça s'entend !"</p>
              </div>
            </div>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Il parle de succès, mais où sont les preuves ?"</p>
              </div>
              <div className={styles.response}>
                <p>Stéphane : "Regarde mes clients, pas juste mes stories."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Envie de tester l'énergie débordante de Stéphane Malassagne ?</h2>
          <p className={styles.ctaText}>Réservez une session avec Stéphane et découvrez comment CSSéducteur peut faire passer votre vie de display: block à display: inline-flex.</p>
          <a href="tel:+33787338604" className={styles.ctaButton}>
            Réservez votre session maintenant avec Stéphane et CSSéducteur
          </a>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
        </footer>
      </main>
    </div>
  );
} 