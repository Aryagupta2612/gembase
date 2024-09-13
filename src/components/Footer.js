import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <section className={styles.experienceSection}>
        <h1 className={styles.experienceTitle}>Ready to start a new Experience</h1>
        <p className={styles.experienceSubtitle}>
          We are working with a growing number of companies and bringing new ones on board every day.
        </p>
        <h1 className={styles.companyTitle1}>GEMBASE</h1>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h2 className={styles.companyTitle}>GEMBASE</h2>
            <p className={styles.description}>
              Immediately activate the application to have it. The process is easy and without difficulty.
            </p>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.footerColumn}>
              <h4>Features</h4>
              <ul>
                <li><a href="#personal">For personal</a></li>
                <li><a href="#business">For business</a></li>
                <li><a href="#enterprise">For enterprise</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Help</h4>
              <ul>
                <li><a href="#faq">For personal</a></li>
                <li><a href="#support">For business</a></li>
                <li><a href="#contact">For enterprise</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Daily Finance</h4>
              <ul>
                <li><a href="#personal-finance">For personal</a></li>
                <li><a href="#business-finance">For business</a></li>
                <li><a href="#enterprise-finance">For enterprise</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
