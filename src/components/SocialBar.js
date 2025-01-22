import styles from './SocialBar.module.css';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function SocialBar() {
  return (
    <div className={styles.socialBar}>
      <a 
        href="https://facebook.com/icimettrelenomducompte" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Suivez-nous sur Facebook"
      >
        <FacebookIcon />
      </a>
      
      <a 
        href="https://www.instagram.com/csseducteurclub?igsh=MTF4aTEzYjBteG1wcw==" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Suivez-nous sur Instagram"
      >
        <InstagramIcon />
      </a>
      
      <a 
        href="https://x.com/csseducteurclub?s=11" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Suivez-nous sur Twitter"
      >
        <TwitterIcon />
      </a>

      <a 
        href="https://www.linkedin.com/in/css%C3%A9ducteur-css%C3%A9ducteur-club-8683a2347/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Suivez-nous sur LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
} 