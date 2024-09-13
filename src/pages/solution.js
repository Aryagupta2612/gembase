
import styles from '../styles/Solution.module.css';
export default function Home() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.subTitle}>Solutions</h2>
          <h3 className={styles.mainTitle}>Enhanced AP Automation Software Solutions</h3>
          <p className={styles.description}>
            Keep your business account and all your finance needs safely organized under one roof. 
            Manage money quickly, easily & efficiently. Whether you're alone or leading a team.
          </p>
        </header>
  
        
        <section className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
            </div>
            <h3 className={styles.cardTitle}>Global Currency</h3>
            <p className={styles.cardDescription}>
            Finance is a multifaceted discipline that encompasses the management, creation, and study of money, investments, and other financial instruments. It is essential for individuals, businesses, and governments to ensure efficient allocation of resources and to achieve their financial goals. At its core, finance involves analyzing financial statements, assessing risks and returns, and making strategic decisions to maximize value and growth. For individuals, this means budgeting, saving, investing, and planning for retirement to secure their financial future.
            </p>
          </div>
  
          <div className={styles.card}>
            <div className={styles.cardIcon}>
            </div>
            <h3 className={styles.cardTitle}>Working Capital</h3>
            <p className={styles.cardDescription}>
            Finance is a multifaceted discipline that encompasses the management, creation, and study of money, investments, and other financial instruments. It is essential for individuals, businesses, and governments to ensure efficient allocation of resources and to achieve their financial goals. At its core, finance involves analyzing financial statements, assessing risks and returns, and making strategic decisions to maximize value and growth. For individuals, this means budgeting, saving, investing, and planning for retirement to secure their financial future.            </p>
          </div>
  
          <div className={styles.card}>
            <div className={styles.cardIcon}>
            </div>
            <h3 className={styles.cardTitle}>Vendor Management</h3>
            <p className={styles.cardDescription}>
            Finance is a multifaceted discipline that encompasses the management, creation, and study of money, investments, and other financial instruments. It is essential for individuals, businesses, and governments to ensure efficient allocation of resources and to achieve their financial goals. At its core, finance involves analyzing financial statements, assessing risks and returns, and making strategic decisions to maximize value and growth. For individuals, this means budgeting, saving, investing, and planning for retirement to secure their financial future.            </p>
          </div>
        </section>
      </div>
    );
  }

