import "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="f">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link href="http://scanfcode.com/about/">About Us</Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/contact/">Contact Us</Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="http://scanfcode.com/sitemap/">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <Link href="/">Deenozer</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
