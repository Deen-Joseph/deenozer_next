import { useRef } from "react";
import "../../styles/main.css";
// import "./Header.css";

const Header = () => {
  const navRef = useRef(); //Access DOM elements

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav>
        <h3>
          <a href="/home">deenozer.com</a>
        </h3>
      </nav>

      {/* <Router> */}
      <nav ref={navRef}>
        <a href="/home">Home</a>
        <a href="/players">Players</a>
        <a href="/clubs">Clubs</a>
        <a href="/fa">FA</a>
        <a href="/events">Events</a>
        <a href="/database">Database</a>
        <a href="/login">Login/Register</a>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          Menu
        </button>
      </nav>

      <button className="nav-btn" onClick={showNav}>
        Menu
      </button>
    </header>
  );
};

export default Header;
