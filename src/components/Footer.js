import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.footerTitle}>🍽 Restoran Menü</h3>
          <p className={styles.footerText}>Lezzetin adresi! Geleneksel ve modern yemeklerin birleştiği muhteşem bir deneyim.</p>
        </div>

        <div className={styles.contact}>
          <h4 className={styles.footerTitle}>📞 İletişim</h4>
          <p className={styles.footerText}>📍 Adres: İstanbul, Türkiye</p>
          <p className={styles.footerText}>☎ Telefon: +90 555 123 45 67</p>
          <p className={styles.footerText}>✉ E-posta: info@restoran.com</p>
        </div>

        <div className={styles.social}>
          <h4 className={styles.footerTitle}>📲 Sosyal Medya</h4>
          <div className={styles.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2025 Restoran Menü | Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;
