import styles from './Footer.module.scss';
import { Container } from '../Container/Container';
import { Link } from 'react-router-dom';
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from 'react-icons/ri';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.logo}>
              <Link to="/home">
                <h1>Multimart</h1>
                <p>Since 1995</p>
              </Link>
            </div>
            <p className={styles.footerText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat eum
              possimus maiores reprehenderit voluptas fugit sit saepe nisi ducimus.
            </p>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.quickLinksTitle}>Top Categories</h4>
            <ul>
              <li>
                <Link to="#">Mobile Phones</Link>
              </li>
              <li>
                <Link to="#">Modern Sofa</Link>
              </li>
              <li>
                <Link to="#">Arm Chair</Link>
              </li>
              <li>
                <Link to="#">Smart Watches</Link>
              </li>
            </ul>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.quickLinksTitle}>Useful Links</h4>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.quickLinksTitle}>Contacts</h4>
            <ul>
              <li>
                <RiMapPin2Line />
                <p className={styles.footerText}>
                  <a
                    href="https://www.google.com/maps/place/The+Cellars+Wine+%26+Beer+Shop/@39.2671299,-76.6025543,17z/data=!4m13!1m7!3m6!1s0x89c803aed6f483b7:0x44896a84223e758!2z0JHQsNC70YLQuNC80L7RgCwg0JzRjdGA0LjQu9C10L3QtCwg0KHQqNCQ!3b1!8m2!3d39.2903848!4d-76.6121893!3m4!1s0x89c803748f38bd1f:0xf7f28c6ce82cf37e!8m2!3d39.268007!4d-76.6001215"
                    target="_blank"
                    rel="noreferrer">
                    322 Whetstone Way, Baltimor, USA
                  </a>
                </p>
              </li>
              <li>
                <RiPhoneLine />
                <p className={styles.footerText}>
                  <a href="tel:+14842989714">+14842989714</a>
                </p>
              </li>
              <li>
                <RiMailLine />
                <p className={styles.footerText}>
                  <a href="mailto: example@google.com">example@google.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            Copyright {year} develop by{' '}
            <span>
              <a href="https://github.com/Oliolixinfree" target="_blank" rel="noopener noreferrer">
                Oliolixinfree
              </a>
            </span>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
