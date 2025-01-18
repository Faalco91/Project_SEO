import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'L\'Art de la Conversation selon CSSéducteur',
  description: 'La méthode CSSéducteur pour engager et maintenir des conversations passionnantes qui créent des connexions profondes.',
  keywords: 'CSSéducteur, art conversation, communication, séduction'
};

export default function Article() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.heroImage}>
            <Image
              src="/images/blog/art-conversation.jpg"
              alt="L'art de la conversation"
              width={1200}
              height={600}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1>L'Art de la Conversation selon CSSéducteur</h1>
            
            <div className={styles.metadata}>
              <span>10 Janvier 2025</span>
              <span>6 min de lecture</span>
              <span>Par CSSéducteur</span>
            </div>

            <section>
              <h2>Les principes d'une conversation captivante</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            </section>

            <section>
              <h2>L'écoute active et l'empathie</h2>
              <p>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
            </section>

            <section>
              <h2>Créer des connexions mémorables</h2>
              <p>Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.</p>
            </section>
          </div>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          © 2025 CSSéducteur - Tous droits réservés
        </div>
      </footer>
    </div>
  );
} 