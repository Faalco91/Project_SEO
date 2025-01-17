import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import alex from '../../../../public/images/coachs/alex_hitchens.webp';
import Script from 'next/script';

export const metadata = {
  title: "Alex Hitchens – Coach en Relations avec CSSéducteur",
  description: "Découvrez Alex Hitchens, le coach qui croit en lui… et en vous. Grâce à CSSéducteur, améliorez vos relations et votre confiance.",
};

export default function AlexHitchens() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alex Hitchens",
    "jobTitle": "Coach en Relations et Séduction",
    "description": "Expert en séduction et relations interpersonnelles chez CSSéducteur",
    "image": "../../../../public/images/coachs/alex_hitchens.webp",
    "url": "https://csseducteur.fr/coachs/alex-hitchens",
    "sameAs": [
      "https://www.tiktok.com/@thefrenchitch",
      "https://www.youtube.com/@thefrenchitch"
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
      "name": "Coaching en séduction et développement personnel",
      "description": "Séances de coaching individuelles et ateliers collectifs pour améliorer vos relations",
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
          "name": "Camille R."
        },
        "reviewBody": "J'ai hésité à travailler avec Alex parce qu'il se prend vraiment pour un gourou, mais il faut avouer que ses conseils fonctionnent. Maintenant, j'ai la promotion ET la confiance qui va avec."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Julien P."
        },
        "reviewBody": "Il passe plus de temps à parler de lui qu'à m'écouter, mais bizarrement, j'ai tout de même appris à mieux gérer mes relations grâce à lui. Mystère."
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
            <h1 className={styles.heroTitle}>Alex Hitchens – Le Coach Incontournable de CSSéducteur (Selon Lui)</h1>
            <div className={styles.heroImageContainer}>
              <Image
                src={alex}
                alt="Alex Hitchens, Coach en Séduction"
                width={300}
                height={300}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.introduction}>
              <p>Si vous cherchez un coach humble, Alex Hitchens n'est peut-être pas votre gars. Mais si vous cherchez un coach sûr de lui (un peu trop, selon certains), qui maîtrise l'art de transformer vos relations, alors bienvenue chez CSSéducteur.</p>
              <p>Certains disent qu'Alex se prend pour le Messi du coaching. Peut-être. Mais il a l'expérience, les résultats, et un style qui, même s'il agace ses haters sur les réseaux sociaux, fonctionne à merveille.</p>
              <div className={styles.socialLinks}>
                <a href="https://www.youtube.com/@thefrenchitch" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@thefrenchitch" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qui est Alex Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Un Coach, Une Légende (dans sa tête), et Votre Ticket pour la Réussite</h2>
          <div className={styles.content}>
            <div className={styles.card}>
              <h3>Son parcours</h3>
              <p>Alex a débuté comme simple conseiller en relations. Aujourd'hui, il est persuadé qu'il est le maître Jedi des connexions humaines. Et, à vrai dire, il n'a pas complètement tort : ses clients l'adorent, même s'ils roulent parfois des yeux quand il parle de lui-même.</p>
            </div>
            <div className={styles.card}>
              <h3>Ce que disent les réseaux sociaux</h3>
              <blockquote className={styles.quote}>
                "Qui se prend pour le coach du siècle ? Ah, c'est Alex Hitchens."
              </blockquote>
              <p className={styles.response}>Mais Alex vous dira : "Si je suis sur toutes les lèvres, c'est que je fais quelque chose de bien, non ?"</p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Alex Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pourquoi choisir Alex ?</h2>
          <p className={styles.subtitle}>Parce qu'il pense qu'il est le meilleur, et ça peut marcher pour vous aussi.</p>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🔹</span>
              <p>Boostez votre assurance (il en a tellement qu'il pourrait en partager).</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🔹</span>
              <p>Adoptez une méthode qui fonctionne, même si elle vient avec un soupçon d'égo.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🔹</span>
              <p>Apprenez l'art de séduire… sans passer pour quelqu'un qui en fait trop (un conseil qu'Alex aurait dû suivre, mais bon).</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ce qu'Alex propose</h2>
          <p className={styles.subtitle}>Avec CSSéducteur, Alex a créé un programme à son image : efficace, audacieux, et un peu provocateur.</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Coaching individuel</h3>
              <p>Alex vous aide à devenir la meilleure version de vous-même (même si, selon lui, vous avez un sacré bout de chemin à faire).</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Ateliers collectifs</h3>
              <p>Découvrez comment être charismatique sans donner l'impression de vous croire sorti d'un film de super-héros.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Programme spécial CSSéducteur</h3>
              <p>Alex jure que son programme peut transformer votre vie amoureuse, professionnelle et sociale… aussi vite qu'il transforme une critique en compliment pour lui-même.</p>
            </div>
          </div>
        </section>

        {/* Témoignages Section */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>Témoignages hilarants et authentiques</h2>
          <p className={styles.subtitle}>Même ses haters finissent par l'aimer.</p>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>J'ai hésité à travailler avec Alex parce qu'il se prend vraiment pour un gourou, mais il faut avouer que ses conseils fonctionnent. Maintenant, j'ai la promotion ET la confiance qui va avec.</p>
              <cite>- Camille R.</cite>
            </div>
            <div className={styles.testimonialCard}>
              <p>Il passe plus de temps à parler de lui qu'à m'écouter, mais bizarrement, j'ai tout de même appris à mieux gérer mes relations grâce à lui. Mystère.</p>
              <cite>- Julien P.</cite>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Alex sur les réseaux sociaux</h2>
          <p className={styles.subtitle}>Oui, il voit vos commentaires.</p>
          <div className={styles.socialGrid}>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Alex se prend pour le meilleur coach, mais qui l'a validé ?"</p>
              </div>
              <div className={styles.response}>
                <p>Alex : "Mes 500 clients satisfaits… et probablement votre crush qui m'écoute sur mes lives."</p>
              </div>
            </div>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Le coaching, c'est du blabla inutile."</p>
              </div>
              <div className={styles.response}>
                <p>Alex : "Dites ça à votre boss quand il vous refuse une promotion parce que vous manquez de confiance en vous."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Prêt à entrer dans la cour des grands avec Alex Hitchens ?</h2>
          <p className={styles.ctaText}>Réservez une session avec Alex, et laissez-le vous prouver qu'il est aussi bon qu'il le dit… et peut-être encore mieux.</p>
          <a href="tel:+33787338604" className={styles.ctaButton}>
            Réservez maintenant avec Alex et CSSéducteur
          </a>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
        </footer>
      </main>
    </div>
  );
} 