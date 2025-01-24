import styles from './SocialBar.module.css';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function SocialBar() {
  return (
    <div className={styles.socialBar}>
      <a 
        href="https://www.facebook.com/profile.php?id=61571996444302" 
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
        href="https://www.linkedin.com/company/css%C3%A9ducteurclub" 
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
