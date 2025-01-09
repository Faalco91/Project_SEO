import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'Conseils de CSSéducteur | Techniques de Séduction et Développement Personnel',
  description: 'Découvrez les conseils exclusifs de CSSéducteur, ancien super-héros Marvel. Des techniques de séduction aux conseils de développement personnel, transformez votre vie amoureuse.',
  keywords: 'CSSéducteur, conseils séduction, techniques séduction, développement personnel, coach séduction, super-héros Marvel',
}

export default function Conseils() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            CSSéducteur
          </Link>
          <div className={styles.navLinks}>
            <Link href="/pouvoirs">Pouvoirs</Link>
            <Link href="/conseils">Conseils</Link>
            <Link href="/missions">Missions</Link>
            <Link href="/histoire">Histoire</Link>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <h1>Conseils de CSSéducteur</h1>
          <p>Des conseils de séduction d'un ancien super-héros Marvel pour transformer votre vie</p>
        </div>
      </header>

      <main className={styles.main}>
        {/* Section Conseils de Super-Héros */}
        <section className={styles.section}>
          <h2>Conseils de Super-Héros</h2>
          <p className={styles.sectionDesc}>Des leçons héroïques adaptées à votre quotidien</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/confiance.svg" alt="Icône de confiance" width={64} height={64} />
              </div>
              <h3>La Confiance du Super-Héros</h3>
              <p>Développez une confiance en vous inébranlable, digne des plus grands héros.</p>
              <Link href="/conseils/confiance" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/presence.svg" alt="Icône de présence" width={64} height={64} />
              </div>
              <h3>La Présence Héroïque</h3>
              <p>Apprenez à dégager une aura magnétique qui captive naturellement votre entourage.</p>
              <Link href="/conseils/presence" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/courage.svg" alt="Icône de courage" width={64} height={64} />
              </div>
              <h3>Le Courage d'Agir</h3>
              <p>Surmontez vos peurs et passez à l'action comme un véritable héros.</p>
              <Link href="/conseils/courage" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>

          <blockquote className={styles.quote}>
            "Le véritable pouvoir d'un héros réside dans sa capacité à inspirer les autres."
            <cite>- CSSéducteur</cite>
          </blockquote>
        </section>

        {/* Section Techniques de Séduction */}
        <section className={styles.section}>
          <h2>Techniques de Séduction</h2>
          <p className={styles.sectionDesc}>Des stratégies éprouvées pour une séduction authentique</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/communication.svg" alt="Icône de communication" width={64} height={64} />
              </div>
              <h3>L'Art de la Communication</h3>
              <p>Maîtrisez les subtilités du langage verbal et non-verbal pour créer des connexions profondes.</p>
              <Link href="/conseils/communication" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/charisme.svg" alt="Icône de charisme" width={64} height={64} />
              </div>
              <h3>Le Charisme Naturel</h3>
              <p>Développez un charisme magnétique qui attire naturellement les autres vers vous.</p>
              <Link href="/conseils/charisme" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/connexion.svg" alt="Icône de connexion" width={64} height={64} />
              </div>
              <h3>La Connexion Authentique</h3>
              <p>Créez des liens profonds et sincères qui durent dans le temps.</p>
              <Link href="/conseils/connexion" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>

          <blockquote className={styles.quote}>
            "La vraie séduction commence par la sincérité envers soi-même."
            <cite>- CSSéducteur</cite>
          </blockquote>
        </section>

        {/* Section Développement Personnel */}
        <section className={styles.section}>
          <h2>Développement Personnel</h2>
          <p className={styles.sectionDesc}>Évoluez vers la meilleure version de vous-même</p>
          
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/croissance.svg" alt="Icône de croissance" width={64} height={64} />
              </div>
              <h3>La Croissance Personnelle</h3>
              <p>Découvrez les clés pour évoluer constamment et devenir la meilleure version de vous-même.</p>
              <Link href="/conseils/croissance" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/equilibre.svg" alt="Icône d'équilibre" width={64} height={64} />
              </div>
              <h3>L'Équilibre de Vie</h3>
              <p>Trouvez l'harmonie parfaite entre vie personnelle, professionnelle et amoureuse.</p>
              <Link href="/conseils/equilibre" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src="/images/conseils/resilience.svg" alt="Icône de résilience" width={64} height={64} />
              </div>
              <h3>La Résilience Émotionnelle</h3>
              <p>Développez une force intérieure à toute épreuve pour surmonter les obstacles.</p>
              <Link href="/conseils/resilience" className={styles.cardButton}>
                En savoir plus
              </Link>
            </article>
          </div>

          <blockquote className={styles.quote}>
            "Chaque défi est une opportunité de grandir et de devenir plus fort."
            <cite>- CSSéducteur</cite>
          </blockquote>
        </section>

        {/* Section Soutien */}
        <section className={styles.supportSection}>
          <h2>Soutenez CSSéducteur</h2>
          <p>Votre soutien me permet de continuer à partager mon expertise et à transformer des vies.</p>
          
          <div className={styles.paymentOptions}>
            <div className={styles.paymentMethod}>
              <h3>Virement Bancaire</h3>
              <p>Faites un don du montant de votre choix</p>
              <div className={styles.bankDetails}>
                <p>IBAN : FR76 XXXX XXXX XXXX XXXX XXXX XXX</p>
                <p>BIC : XXXXXXXX</p>
              </div>
            </div>

            <div className={styles.paymentMethod}>
              <h3>PayPal</h3>
              <p>Contribution rapide et sécurisée</p>
              <a href="https://paypal.me/csseducteur" className={styles.paypalButton}>
                Faire un don via PayPal
              </a>
            </div>

            <div className={styles.paymentMethod}>
              <h3>Crypto-monnaies</h3>
              <p>Pour les héros du futur</p>
              <div className={styles.cryptoAddresses}>
                <p>Bitcoin : 1XXXXXXXXXXXXXXXXXXXXXXXXX</p>
                <p>Ethereum : 0xXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 CSSéducteur - Le Super-Héros qui Révolutionne la Séduction - Tous droits réservés</p>
      </footer>
    </div>
  )
} 