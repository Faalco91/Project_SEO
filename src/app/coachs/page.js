import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import alex from '../../../public/images/coachs/alex_hitchens.webp';
import william from '../../../public/images/coachs/william_coach.webp';
import malassagne from '../../../public/images/coachs/stephane_malassagne.webp';

export default function Coachs() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/" className={styles.logo} aria-label="CSSéducteur - Accueil">
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/coachs" aria-label="Les Coachs de CSSéducteur">Coachs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Nos CSSéducteur</h1>
            <p className={styles.heroSubtitle}>
              Découvrez l'équipe d'experts CSSéducteur qui vous accompagnera dans votre transformation. 
              Des professionnels passionnés et expérimentés, prêts à vous guider vers l'excellence en séduction.
            </p>
          </div>
        </section>

        {/* Section Coachs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>L'Équipe CSSéducteur</h2>
          <div className={styles.fileGrid}>
            <article className={styles.secretFile}>
              <div className={styles.fileHeader}>
                <span className={styles.classification}>COACH</span>
                <h2>Alex Hitchens</h2>
                <h3>Expert en Séduction et Relationnel</h3>
              </div>
              <Image
                src={alex}
                alt="Alex Hitchens, Coach en Séduction"
                width={200}
                height={200}
                className={styles.coachImage}
                loading='lazy'
              />
              <p>
                Alex Hitchens, célèbre pour ses méthodes innovantes en séduction, accompagne ses clients vers la réussite 
                relationnelle. Sa philosophie repose sur la confiance en soi et l'authenticité.
              </p>
              <Link href="/coachs/alex-hitchens" className={styles.accessButton}>
                En savoir plus sur Alex
              </Link>
            </article>

            <article className={styles.secretFile}>
              <div className={styles.fileHeader}>
                <span className={styles.classification}>COACH</span>
                <h2>Stéphane Malassagne</h2>
                <h3>Spécialiste en Communication et Persuasion</h3>
              </div>
              <Image
                src={malassagne}
                alt="Stéphane Malassagne, Coach en Séduction"
                width={200}
                height={200}
                className={styles.coachImage}
                loading='lazy'
              />
              <p>
                Stéphane Malassagne apporte une expertise unique en communication interpersonnelle. 
                Il aide ses clients à améliorer leurs interactions sociales par l'écoute et l'empathie.
              </p>
              <Link href="/coachs/stephane-malassagne" className={styles.accessButton}>
                En savoir plus sur Stéphane
              </Link>
            </article>

            <article className={styles.secretFile}>
              <div className={styles.fileHeader}>
                <span className={styles.classification}>COACH</span>
                <h2>Coach William</h2>
                <h3>Expert en Développement Personnel</h3>
              </div>
              <Image
                src={william}
                alt="Coach William, Expert en Développement Personnel"
                width={200}
                height={200}
                className={styles.coachImage}
                loading='lazy'
              />
              <p>
                Avec une approche centrée sur le développement personnel, Coach William aide ses clients à surmonter leurs peurs 
                et à maximiser leur potentiel. Son expertise est un atout précieux pour CSSéducteur.
              </p>
              <Link href="#" className={styles.accessButton}>
                En savoir plus sur William
              </Link>
            </article>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className={styles.testimonialSection}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Ce que disent nos clients</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <p>"Grâce à Alex, j'ai complètement transformé ma vie sociale. Son approche unique m'a permis de développer une confiance en moi inébranlable."</p>
                <cite>- Thomas, 32 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Les conseils de Stéphane ont révolutionné ma façon de communiquer. Je me sens maintenant plus à l'aise dans toutes mes interactions."</p>
                <cite>- Laurent, 28 ans</cite>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Coach William m'a aidé à surmonter mes blocages. Son approche bienveillante et professionnelle a fait toute la différence."</p>
                <cite>- Marc, 35 ans</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Prêt à Transformer Votre Vie ?</h2>
          <p className={styles.ctaText}>
            Réservez une séance de coaching personnalisée avec l'un de nos experts CSSéducteur
          </p>
          <a href="tel:+33787338604" className={styles.ctaButton}>
            Contactez-nous maintenant
          </a>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 CSSéducteur - Tous droits réservés</p>
        </footer>
      </main>
    </div>
  );
}
