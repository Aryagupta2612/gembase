import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>GEMBASE</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="#">For Personal</Link>
        <Link href="#">For Business</Link>
        <Link href="#">Features</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">About Us</Link>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.login}>Login</button>
        <button className={styles.getStarted}>Get started</button>
      </div>
    </header>
  );
}
