import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import william from '../../../../public/images/coachs/william_coach.webp';
import Script from 'next/script';

export const metadata = {
  title: "Coach William | Expert CSSéducteur en Développement Personnel et Séduction",
  description: "Découvrez Coach William, expert CSSéducteur en développement personnel et séduction. Conseils uniques, approche humoristique et méthodes éprouvées pour votre transformation personnelle.",
  keywords: "CSSéducteur, Coach William, séduction, développement personnel, coaching séduction, Arcachon, conseils séduction",
  openGraph: {
    title: "Coach William | Expert CSSéducteur en Développement Personnel",
    description: "Transformez votre vie avec les conseils de Coach William, expert CSSéducteur reconnu. Méthodes uniques et approche personnalisée pour votre réussite.",
    type: "profile",
    locale: "fr_FR",
    images: [
      {
        url: "/images/coachs/william_coach.webp",
        width: 300,
        height: 300,
        alt: "Coach William, Expert CSSéducteur"
      }
    ]
  }
};

export default function CoachWilliam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Coach William",
    "jobTitle": "Expert CSSéducteur en Développement Personnel",
    "description": "Expert en développement personnel et transformation personnelle chez CSSéducteur",
    "image": "../../../../public/images/coachs/william_coach.webp",
    "url": "https://csseducteur.fr/coachs/coach-william",
    "sameAs": [
      "https://www.youtube.com/@williamcoachenseductionhum9428"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "CSSéducteur",
      "url": "https://csseducteur.fr"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arcachon",
      "addressCountry": "FR"
    },
    "offers": {
      "@type": "Offer",
      "name": "Coaching en séduction CSSéducteur",
      "description": "Séances de coaching individuelles et ateliers pour votre transformation personnelle",
      "price": "150.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
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
            <h1 className={styles.heroTitle}>Coach William – L'Expert qui Transforme vos Peurs en Force avec CSSéducteur</h1>
            <div className={styles.heroImageContainer}>
              <Image
                src={william}
                alt="Coach William, Expert en Développement Personnel"
                width={300}
                height={300}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.introduction}>
              <blockquote className={styles.heroQuote}>
                "Bonjour, je m'appelle William, j'ai 32 ans, je réside à Arcachon, je travaille dans l'immobilier et donc je me recherche une copine" 
                <span className={styles.quoteNote}>- La phrase d'accroche de Coach William pour faire craquer les filles</span>
              </blockquote>
              <p>Dans l'univers du développement personnel, Coach William n'est pas seulement un expert, c'est aussi la star d'une vidéo virale de Cyprien ! Eh oui, quand l'un des plus grand YouTubeur français décide d'appliquer vos conseils de séduction, c'est que vous avez fait quelque chose de bien... ou de très drôle !</p>
              <p>Sa méthode unique, qui a même fait craquer Cyprien (bon, dans la vidéo au moins), combine bienveillance et humour. Parce que oui, on peut travailler sur soi tout en se marrant !</p>
              <div className={styles.socialLinks}>
                <a href="https://www.youtube.com/@williamcoachenseductionhum9428" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qui est William Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Un Guide CCSéducteur de William (Qui Fait Aussi Rire)</h2>
          <div className={styles.content}>
            <div className={styles.card}>
              <h3>Son parcours</h3>
              <p>Après des années d'expérience dans l'accompagnement personnel et une apparition mémorable dans une vidéo de Cyprien, Coach William a développé une approche qui prouve que le développement personnel peut être sérieux... en prennant une douche !</p>
            </div>
            <div className={styles.card}>
              <h3>Sa philosophie</h3>
              <blockquote className={styles.quote}>
                "Le véritable changement commence par l'acceptation de soi... et par une bonne douche ! 🚿"
              </blockquote>
              <p className={styles.response}>William croit profondément en deux choses : le potentiel de chacun et le pouvoir d'une chemise bien repassée.</p>
            </div>
          </div>
        </section>

        {/* Les Conseils Légendaires de William */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Les Conseils Légendaires de William</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <h3>Le Guide de Survie du Séducteur</h3>
              <ul className={styles.tipsList}>
                <li>
                  <span className={styles.emoji}>📍</span>
                  "Mentionnez toujours votre ville ! Arcachon, c'est exotique, ça fait rêver !"
                </li>
                <li>
                  <span className={styles.emoji}>🏠</span>
                  "Dites que vous êtes dans l'immobilier, ça impressionne toujours !"
                </li>
                <li>
                  <span className={styles.emoji}>🚿</span>
                  "La douche quotidienne, c'est comme le petit-déjeuner : non négociable !"
                </li>
                <li>
                  <span className={styles.emoji}>👕</span>
                  "Le t-shirt ? Non, non et non ! À moins que vous ne vouliez séduire à la salle de sport..."
                </li>
                <li>
                  <span className={styles.emoji}>👔</span>
                  "La chemise, c'est votre meilleur allié. C'est comme une cape de super-héros, mais en plus classe !"
                </li>
                <li>
                  <span className={styles.emoji}>🌈</span>
                  "Les femmes aiment les couleurs vives ! Orange, rouge, jaune... Habillez-vous comme un coucher de soleil tropical !"
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vidéo Cyprien Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>La Fameuse Vidéo de Cyprien</h2>
          <div className={styles.videoSection}>
            <p className={styles.subtitle}>Quand l'un des plus grand YouTubeur français teste les conseils de notre CSSéducteur William...</p>
            <div className={styles.videoContent}>
              <p>Si vous n'avez pas encore vu LA vidéo où Cyprien tente d'appliquer les conseils de séduction de Coach William, vous manquez quelque chose ! Cette collaboration inattendue prouve une chose : même les pros de YouTube peuvent avoir besoin d'un coup de main en séduction ! </p>
              <a href="https://youtu.be/aoS8TSmInzM?si=KjlZkeWHNsdDoT64" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Voir la vidéo de Cyprien
              </a>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir William Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pourquoi choisir Coach William ?</h2>
          <p className={styles.subtitle}>Parce qu'il est le seul coach qui vous dira de prendre une douche avec autant de conviction ! 🚿</p>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🏠</span>
              <p>Il connaît Arcachon comme sa poche ! Et ça, c'est déjà un signe de bon goût.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>👔</span>
              <p>Expert en transformation t-shirt → chemise. Votre garde-robe ne sera plus jamais la même !</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🌈</span>
              <p>Le seul coach qui ose vous dire que le noir, c'est dépassé. Vive l'orange qui pique les yeux !</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>📺</span>
              <p>Même Cyprien a testé ses conseils ! (Bon, les résultats sont discutables, mais c'était drôle !)</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>🧼</span>
              <p>Le seul coach en séduction qui commence ses conseils par "Prends une douche". Au moins, c'est honnête !</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.emoji}>💼</span>
              <p>"Je travaille dans l'immobilier" - La phrase magique qui ouvre toutes les portes selon William !</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Les Services CSSéducteur de Coach William</h2>
          <p className={styles.subtitle}>Des programmes sur mesure pour votre développement personnel</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Coaching CSSéducteur Individuel</h3>
              <p>Séances personnalisées pour développer votre potentiel de séduction et dépasser vos limites.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Ateliers CSSéducteur en Groupe</h3>
              <p>Sessions collectives pour partager les meilleures pratiques de séduction et progresser ensemble.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Programme de Transformation CSSéducteur</h3>
              <p>Un accompagnement complet pour une transformation durable de votre vie amoureuse.</p>
            </div>
          </div>
        </section>

        {/* Témoignages Section */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>Témoignages Inspirants</h2>
          <p className={styles.subtitle}>Ce que nos clients disent après avoir suivi les conseils de William !</p>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>"Depuis que j'ai remplacé tous mes t-shirts par des chemises orange, ma vie a changé ! Les gens me regardent différemment dans la rue... Bon, je ne sais pas si c'est en bien, mais au moins on me remarque !"</p>
              <cite>- Thomas, ancien accro aux t-shirts noirs</cite>
            </div>
            <div className={styles.testimonialCard}>
              <p>"J'ai suivi le conseil de William : j'ai dit que j'étais dans l'immobilier à Arcachon. Ça a tellement bien marché que maintenant je déménage là-bas pour ne pas mentir !"</p>
              <cite>- Laurent, futur agent immobilier</cite>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Grâce à William, j'ai compris que la douche quotidienne n'était pas une option. Ma copine confirme que c'était le meilleur conseil de tous les temps !"</p>
              <cite>- Marc, converti à l'hygiène</cite>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Les Perles de Coach William</h2>
          <p className={styles.subtitle}>Nos moments les plus drôles sur les réseaux</p>
          <div className={styles.socialGrid}>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Comment gérer un râteau avec style ?"</p>
              </div>
              <div className={styles.response}>
                <p>William : "Souvenez-vous, même Cyprien s'en est pris dans ma vidéo... et regardez où il en est aujourd'hui ! 😉"</p>
              </div>
            </div>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Le développement personnel, c'est ennuyeux ?"</p>
              </div>
              <div className={styles.response}>
                <p>William : "Si vous trouvez ça ennuyeux, c'est que vous n'avez pas encore vu ma collaboration avec Cyprien ! On peut grandir en s'amusant !"</p>
              </div>
            </div>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"La douche, c'est vraiment si important ?"</p>
              </div>
              <div className={styles.response}>
                <p>William : "Non... si tu cherches à séduire les mouches ! 🪰 Allez hop, sous la douche !"</p>
              </div>
            </div>
            <div className={styles.socialCard}>
              <div className={styles.comment}>
                <p>"Coach, je dois vraiment dire que je suis dans l'immobilier ?"</p>
              </div>
              <div className={styles.response}>
                <p>William : "Bien sûr ! C'est comme dire qu'on habite à Arcachon, ça fait tout de suite plus sérieux ! 🏠"</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Prêt à Devenir un Véritable CSSéducteur ?</h2>
          <p className={styles.ctaText}>Réservez votre séance avec Coach William et découvrez la méthode CSSéducteur pour révéler votre plein potentiel.</p>
          <a href="tel:+33787338604" className={styles.ctaButton} aria-label="Réserver une séance avec Coach William de CSSéducteur">
            Réservez votre session CSSéducteur
          </a>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
        </footer>
      </main>
    </div>
  );
} 