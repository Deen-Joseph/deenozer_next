import { useRef } from "react";
import styles from  "../../styles/Header.module.css";
import Link from 'next/link';

const Header = () => {
  const navRef = useRef(); //Access DOM elements

  const showNav = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} italic text-3xl`} >
        <h3>
          <Link href="/home">deenozer.com</Link>
        </h3>
      </nav>

      {/* <Router> */}
      <nav className={styles.nav} ref={navRef}>
        <Link className="text-lg" href="/home">Home</Link>
        <Link className="text-lg" href="/players">Players</Link>
        <Link className="text-lg" href="/clubs">Clubs</Link>
        <Link className="text-lg" href="/fa">FA</Link>
        <Link className="text-lg" href="/events">Events</Link>
        <Link className="text-lg" href="/database">Database</Link>
        <Link className="text-lg" href="/login">Login/Register</Link>
        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNav}>
          Menu
        </button>
      </nav>

      <button className={styles.navBtn} onClick={showNav}>
        Menu
      </button>
    </header>
  );
};

export default Header;
