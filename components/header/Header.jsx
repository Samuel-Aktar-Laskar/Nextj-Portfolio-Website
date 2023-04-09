import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import styles from './header.module.css'

const Header = () => {
    const[Toggle, showMenu] = useState(false);
    const headerRef = useRef(null);
    const previousScrollY = useRef(0);
    useEffect(() => {
        function handleScroll() {
          const currentScrollY = window.scrollY;
          if (currentScrollY > previousScrollY.current) {
            // Scrolling down
            headerRef.current.style.transform = 'translateY(-100%)';
          } else {
            // Scrolling up
            headerRef.current.style.transform = 'translateY(0)';
          }
          previousScrollY.current = currentScrollY;
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return (
        <header className={styles.header} ref={headerRef}>
  <nav className={`${styles.nav} container`}>
    <a href="/" className={styles.nav__logo}>
      Samuel Aktar Laskar
    </a>

    <div className={Toggle ? `${styles.menu} ${styles.showMenu}` : styles.menu}>
      <ul className={styles.nav__list}>
        <li className={styles.item}>
          <a href="#home" className={`${styles.nav__link} ${styles.activeLink}`}>
            <i className={`${styles.nav__icon} uil uil-estate`}></i> Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="#about" className={styles.nav__link}>
            <i className={`${styles.nav__icon} uil uil-user`}></i> About
          </a>
        </li>
        <li className={styles.item}>
          <a href="#skills" className={styles.nav__link}>
            <i className={`${styles.nav__icon} uil uil-file-alt`}></i> Skills
          </a>
        </li>
        <li className={styles.item}>
          <a href="#education" className={styles.nav__link}>
            <i className={`${styles.nav__icon} uil uil-briefcase-alt`}></i> Education
          </a>
        </li>
        <li className={styles.item}>
          <a href="#portfolio" className={styles.nav__link}>
            <i className={`${styles.nav__icon} uil uil-scenery`}></i> Portfolio
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contact" className={styles.nav__link}>
            <i className={`${styles.nav__icon} uil uil-message`}></i> Contact
          </a>
        </li>

        <li className={styles.item}>
          <a href="#contact" className={styles.nav__link}>
            <i className={`${styles.nav__icon} uil uil-message`}></i> Blog
          </a>
        </li>
      </ul>

      <i className={`${styles.nav__close} uil uil-times`} onClick={() => {
        showMenu(!Toggle);
        console.log("Clicked and Toggle value is :" + Toggle);
      }}></i>
    </div>

    <div className={styles.nav__toggle} onClick={() => showMenu(!Toggle)}>
      <i className="uil uil-apps"></i>
    </div>
  </nav>
</header>

    )
}

export default Header
