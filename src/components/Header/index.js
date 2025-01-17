import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <Link href="/" className={styles.logo} aria-label="CSSéducteur - Accueil">
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
  );
} 