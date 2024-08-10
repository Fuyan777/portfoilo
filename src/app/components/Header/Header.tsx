"use client";
import styles from "./Header.module.css";
import { useState } from "react";
import nextConfig from "../../../../next.config.mjs";

export default function Header() {
  const BASE_PATH = nextConfig.basePath || "";
  const [isOpen, setIsOpen] = useState(false);

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
          />
          <p className={styles.title}>FuyanTech</p>
        </div>
        {isOpen && (
          <div className={styles.menu}>
            <a href="#" className={styles.menuItem}>
              TOP
            </a>
            <a href="#news" className={styles.menuItem}>
              NEWS
            </a>
            <a href="#works" className={styles.menuItem}>
              WORKS
            </a>
            <a href="#product" className={styles.menuItem}>
              PRODUCTS
            </a>
            <a href="#article" className={styles.menuItem}>
              ARTICLE&
              <br />
              SPEAKER
            </a>
            <a href="#profile" className={styles.menuItem}>
              PROFILE
            </a>
            <a href="#contact" className={styles.menuItem}>
              CONTACT
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
