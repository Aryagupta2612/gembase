import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h4 className={styles.subHeading}>PEACE OF MIND FOR YOUR FINANCES</h4>
        <h1 className={styles.mainHeading}>Experience an Easy Way to Manage Finances</h1>
        <h6 className={styles.description}>
        Finance is a multifaceted discipline that encompasses the management, creation, and study of money, investments, and other financial instruments. It is essential for individuals, businesses, and governments to ensure efficient allocation of resources and to achieve their financial goals. At its core, finance involves analyzing financial statements, assessing risks and returns, and making strategic decisions to maximize value and growth. For individuals, this means budgeting, saving, investing, and planning for retirement to secure their financial future.</h6>
        <div className={styles.buttons}>
          <button className={styles.getStarted}>Get started</button>
        </div>
      </div>
      
      <div className={styles.spacer}></div> 
     
<div className={styles.cardsContainer}>
<div className={styles.card}>
    <h3 className={styles.cardTitle}>Manage Your Investments</h3>
    <p className={styles.cardContent}>
      Easily track and optimize your investment portfolio with our intuitive tools.
    </p>
  </div>
  
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>Track Your Transactions</h3>
    <p className={styles.cardContent}>
      Monitor all your transactions and account balances in one place for better control.
    </p>
  </div>
</div>
      
     
    </section>
  );
}
