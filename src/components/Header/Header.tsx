import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { NavLink } from 'react-router-dom';
import { RiShoppingBagLine, RiHeartLine, RiMenuLine } from 'react-icons/ri';

const navLinks = [
  { path: 'home', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <img src={logo} alt={logo} />
          <div>
            <h1>Multimart</h1>
            <p>Since 1995</p>
          </div>
        </div>
        <div className={styles.navigation}>
          <ul className={styles.menu}>
            {navLinks.map((i) => (
              <li className={styles.navItem} key={i.path}>
                <NavLink
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
          </span>
          <span className={styles.cartIcon}>
            <RiShoppingBagLine />
          </span>
          <span>
            <img src={userIcon} alt={userIcon} />
          </span>
        </div>
        <div className={styles.mobileMenu}>
          <span>
            <RiMenuLine />
          </span>
        </div>
      </div>
    </header>
  );
};
