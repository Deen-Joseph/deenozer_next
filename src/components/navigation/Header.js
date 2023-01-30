import { useRef } from "react";
import styles from  "../../styles/Header.module.css";

const Header = () => {
  const navRef = useRef(); //Access DOM elements

  const showNav = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3>
          <a href="/home">deenozer.com</a>
        </h3>
      </nav>

      {/* <Router> */}
      <nav className={styles.nav} ref={navRef}>
        <a href="/home">Home</a>
        <a href="/players">Players</a>
        <a href="/clubs">Clubs</a>
        <a href="/fa">FA</a>
        <a href="/events">Events</a>
        <a href="/database">Database</a>
        <a href="/login">Login/Register</a>
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
