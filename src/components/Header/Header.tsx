import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { Link, NavLink } from 'react-router-dom';
import { RiShoppingBagLine, RiHeartLine, RiMenuLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Container } from '../Container/Container';

const navLinks = [
  { path: 'home', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [fixed, setFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return () => window.removeEventListener('scroll', stickyHeader);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={fixed ? styles.stickyHeader : styles.header} ref={headerRef}>
      <Container>
        <div className={styles.navWrapper}>
          <Link to="/home">
            <div className={styles.logo}>
              <img src={logo} alt={logo} />
              <div>
                <h1>Multimart</h1>
                <p>Since 1995</p>
              </div>
            </div>
          </Link>
          <div
            className={isOpen ? styles.navigation : styles.closeMenu}
            onClick={() => toggleMenu()}>
            <ul className={styles.menu} onClick={(e) => e.stopPropagation()}>
              {navLinks.map((i) => (
                <li className={styles.navItem} key={i.path}>
                  <NavLink
                    onClick={() => toggleMenu()}
                    to={i.path}
                    className={(navClass) => (navClass.isActive ? styles.navActive : '')}>
                    {i.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navIcons}>
            <span className={styles.favIcon}>
              <RiHeartLine />
              <span className={styles.badge}>1</span>
            </span>
            <span className={styles.cartIcon}>
              <RiShoppingBagLine />
              <span className={styles.badge}>1</span>
            </span>
            <span>
              <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt={userIcon} />
            </span>
            <div onClick={() => toggleMenu()} className={styles.mobileMenuBtn}>
              <span>
                <RiMenuLine />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
