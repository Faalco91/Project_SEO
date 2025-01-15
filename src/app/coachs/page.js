import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import alex from '../../../public/images/coachs/alex_hitchens.jpg';
import william from '../../../public/images/coachs/william_coach.jpg';
import malassagne from '../../../public/images/coachs/stephane_malassagne.jpg';
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
            <Link href="/conseils">Services</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/coachs" aria-label="Les Coachs de CSSéducteur">Coachs</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.seoTitle}>Découvrez les Coachs Experts de CSSéducteur</h1>
        <p className={styles.seoDescription}>
          CSSéducteur vous présente ses coachs renommés en séduction : Alex Hitchens, Stéphane Malassagne, et Coach William.
          Profitez de leur expertise à travers des formations, des coachings privés ou en groupe, et des conférences inspirantes.
        </p>

        <section className={styles.fileGrid}>
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
            />
            <p>
              Alex Hitchens, célèbre pour ses méthodes innovantes en séduction, accompagne ses clients vers la réussite 
              relationnelle. Sa philosophie repose sur la confiance en soi et l'authenticité.
            </p>
            <Link href="#" className={styles.accessButton}>
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
            />
            <p>
              Stéphane Malassagne apporte une expertise unique en communication interpersonnelle. 
              Il aide ses clients à améliorer leurs interactions sociales par l'écoute et l'empathie.
            </p>
            <Link href="#" className={styles.accessButton}>
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
            />
            <p>
              Avec une approche centrée sur le développement personnel, Coach William aide ses clients à surmonter leurs peurs 
              et à maximiser leur potentiel. Son expertise est un atout précieux pour CSSéducteur.
            </p>
            <Link href="#" className={styles.accessButton}>
              En savoir plus sur William
            </Link>
          </article>
        </section>

        <section className={styles.aboutSection}>
          <h2>Pourquoi Choisir CSSéducteur ?</h2>
          <p>
            CSSéducteur est la référence en coaching de séduction, offrant des solutions personnalisées pour améliorer 
            vos compétences sociales et relationnelles. Rejoignez notre communauté et laissez nos experts vous guider 
            vers une transformation personnelle réussie.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 CSSéducteur - Le Super-Héros qui Révolutionne la Séduction - Tous droits réservés</p>
      </footer>
    </div>
  );
}
