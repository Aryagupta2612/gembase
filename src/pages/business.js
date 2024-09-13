import Head from 'next/head';
import styles from '../styles/Business.module.css';

const Business = () => {
  return (
    <>
      <Head>
        <title>Business Page</title>
        <meta name="description" content="Business Page with Cards and CTA" />
      </Head>

      <div className={styles.container}>
        <section className={styles.headlineSection}>
          <h3 className={styles.mainHeading}>Providing Solutions to all Financial Problems</h3>
          <h2 className={styles.subHeading}>We offer the best solutions for your needs</h2>
        </section>

        <section className={styles.cardsSection}>
          <div className={styles.card} style={{ backgroundColor: "#f0f8ff" }}>
            <h3 className={styles.cardTitle}>Feature One</h3>
            <h4 className={styles.cardSubtitle}>Sub-headline for Feature One</h4>
            <p className={styles.cardQuote}>
              "This is the best feature to help your business grow."
            </p>
          </div>
          <div className={styles.card} style={{ backgroundColor: "#e6e6fa" }}>
            <h3 className={styles.cardTitle}>Feature Two</h3>
            <h4 className={styles.cardSubtitle}>Sub-headline for Feature Two</h4>
            <p className={styles.cardQuote}>
              "An innovative solution designed for your success."
            </p>
          </div>
          <div className={styles.card} style={{ backgroundColor: "#ffe4e1" }}>
            <h3 className={styles.cardTitle}>Feature Three</h3>
            <h4 className={styles.cardSubtitle}>Sub-headline for Feature Three</h4>
            <p className={styles.cardQuote}>
              "Unlock new opportunities with this feature."
            </p>
          </div>
          <div className={styles.card} style={{ backgroundColor: "#fafad2" }}>
            <h3 className={styles.cardTitle}>Feature Four</h3>
            <h4 className={styles.cardSubtitle}>Sub-headline for Feature Four</h4>
            <p className={styles.cardQuote}>
              "This feature is a game-changer for businesses."
            </p>
          </div>
        </section>

        <section className={styles.bottomQuoteSection}>
          <p className={styles.bottomQuote}>
            "Empowering businesses to reach new heights with our tailored solutions."
          </p>
        </section>

        <section className={styles.ctaSection}>
          <button className={styles.ctaButton}>Contact Us</button>
          <button className={styles.ctaButtonSecondary}>Learn More</button>
        </section>
      </div>
    </>
  );
};

export default Business;
