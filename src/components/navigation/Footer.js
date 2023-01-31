import styles from "../../styles//Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
       
            <h6>Quick Links</h6>
            <ul className={styles.footerLinks}>
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
         
        <hr />
      </div>
      <div className={styles.container}>
        
            <p className={styles.copyrightText}>
              Copyright &copy; 2017 All Rights Reserved by
              <Link href="/">Deenozer</Link>.
            </p>
          </div>
       
    </footer>
  );
};

export default Footer;
