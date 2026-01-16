"use client";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import nextConfig from "../../../../next.config.mjs";

export default function Header() {
  const BASE_PATH = nextConfig.basePath || "";
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="main">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <img
            className={styles.image}
            src={`${BASE_PATH}/icon_menu.png`}
            width={20}
            height={18}
            onClick={toggleMenu}
            alt="Menu"
          />
          <p className={styles.title}>FuyanTech</p>
          {(isDesktop || isOpen) && (
            <div className={styles.menu}>
              <a href="#" className={styles.menuItem}>
                TOP
              </a>
              <a href="#product" className={styles.menuItem}>
                PRODUCTS
              </a>
              <a href="#profile" className={styles.menuItem}>
                PROFILE
              </a>
              <a href="#sns" className={styles.menuItem}>
                SNS
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
