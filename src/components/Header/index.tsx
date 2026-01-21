"use client";

import Image from "next/image";
import LogoHeaderWhite from "@/../public/logo-header-white.svg";
import styles from "./style.module.css";
import { handleScrollToSection } from "@/utils/scrollUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogoClick() {
    if (window.innerWidth <= 620) {
      setMenuOpen((prev) => !prev);
    } else {
      router.push("/");
    }
  }

  function handleItemClick(section: string) {
    handleScrollToSection(section);
    setMenuOpen(false);
  }

  return (
    <header className={styles.containerHeader}>
      <section className={styles.leftContent}>
        <div className={styles.containerImg} onClick={handleLogoClick}>
          <Image src={LogoHeaderWhite} alt="Logo" priority width={125} />
        </div>

        <nav
          className={`${styles.containerListLinks} ${
            menuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.listLinks}>
            <li
              className={styles.listItem}
              onClick={() => handleItemClick("clients")}
            >
              For Clients
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleItemClick("services")}
            >
              Services
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleItemClick("portfolio")}
            >
              Portfolio
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleItemClick("careers")}
            >
              Careers
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleItemClick("blog")}
            >
              Blog
            </li>
          </ul>
        </nav>
      </section>

      <section className={styles.rightContent}>
        <button
          className={styles.button}
          onClick={() => handleItemClick("contact")}
        >
          Get in touch
        </button>
      </section>
    </header>
  );
}
