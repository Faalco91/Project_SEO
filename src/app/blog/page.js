import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Header from '@/components/Header';
import Script from 'next/script';

// Métadonnées de la page
export const metadata = {
  title: 'Blog CSSéducteur | Conseils de Séduction et Développement Personnel',
  description: 'Explorez le blog officiel de CSSéducteur : articles experts sur la séduction authentique, le développement personnel et l\'art des relations. Découvrez les techniques exclusives de CSSéducteur.',
  keywords: 'CSSéducteur, blog CSSéducteur, séduction authentique, coaching CSSéducteur, développement personnel CSSéducteur',
  openGraph: {
    title: 'Blog CSSéducteur | Conseils de Séduction et Développement Personnel',
    description: 'Explorez le blog officiel de CSSéducteur : articles experts sur la séduction authentique, le développement personnel et l\'art des relations.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://csseducteur.club/blog',
    siteName: 'CSSéducteur',
  }
};

// Articles du blog
const articles = [
  {
    id: 1,
    title: 'Les Secrets de la Communication Non-Verbale par CSSéducteur',
    excerpt: 'Découvrez les techniques exclusives de CSSéducteur pour maîtriser le langage corporel et créer une connexion instantanée.',
    image: '/images/blog/communication.webp',
    category: 'Communication',
    date: '15 Janvier 2025',
    readTime: '5 min',
    author: 'CSSéducteur'
  },
  {
    id: 2,
    title: 'Développer sa Confiance en Soi avec CSSéducteur',
    excerpt: 'Les techniques CSSéducteur pour renforcer votre estime personnelle et votre charisme naturel.',
    image: '/images/blog/confiance.webp',
    category: 'Développement Personnel',
    date: '12 Janvier 2025',
    readTime: '7 min',
    author: 'CSSéducteur'
  },
  {
    id: 3,
    title: 'L\'Art de la Conversation selon CSSéducteur',
    excerpt: 'La méthode CSSéducteur pour engager et maintenir des conversations passionnantes qui créent des connexions profondes.',
    image: '/images/blog/conversation.webp',
    category: 'Communication',
    date: '10 Janvier 2025',
    readTime: '6 min',
    author: 'CSSéducteur'
  },
  {
    id: 4,
    title: 'Maîtriser l’Approche Initiale avec CSSéducteur',
    excerpt: 'Apprenez comment aborder une personne en toute confiance grâce aux techniques éprouvées de CSSéducteur.',
    image: '/images/blog/approche.webp',
    category: 'Séduction',
    date: '23 Janvier 2025',
    readTime: '5 min',
    author: 'CSSéducteur'
  }
  
];

export default function Blog() {
  // Schéma JSON-LD pour le blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog CSSéducteur",
    "description": "Blog officiel de CSSéducteur sur la séduction authentique et le développement personnel",
    "url": "https://csseducteur.fr/blog",
    "publisher": {
      "@type": "Organization",
      "name": "CSSéducteur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://csseducteur.fr/images/logo.png"
      }
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "image": `https://csseducteur.fr${article.image}`,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "CSSéducteur"
      }
    }))
  };

  return (
    <div className={styles.container}>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Blog CSSéducteur</h1>
            <p>Explorez nos articles experts sur la séduction authentique, le développement personnel et l'art des relations humaines selon la méthode CSSéducteur.</p>
          </div>
        </section>

        {/* Latest Articles */}
        <section className={styles.articles}>
          <h2>Articles CSSéducteur</h2>
          <div className={styles.articleGrid}>
            {articles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    loading='lazy'
                  />
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <span className={styles.category}>{article.category}</span>
                    <span className={styles.readTime}>{article.readTime} de lecture</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className={styles.articleFooter}>
                    <span className={styles.date}>{article.date}</span>
                    <Link href={`/blog/${article.id}`} className={styles.readMore}>
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletter}>
          <h2>Restez Informé des Actualités CSSéducteur</h2>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils exclusifs de CSSéducteur.</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              S'abonner
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          © 2025 CSSéducteur - Tous droits réservés
        </div>
      </footer>
    </div>
  );
} 