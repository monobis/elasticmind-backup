import Image from "next/image";
import LogoHeaderWhite from "@/../public/logo-header-white.svg";
import styles from "./style.module.css";
import { handleScrollToSection } from "@/utils/scrollUtils";



export function Header() {
  return (
    <header className={styles.containerHeader}>
      <section className={styles.leftContent}>
        <div className={styles.containerImg}>
          <Image src={LogoHeaderWhite} alt="Logo" priority width={125} />
        </div>

        <div className={styles.containerListLinks}>
          <ul className={styles.listLinks}>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("clients")}
            >
              For Clients
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("services")}
            >
              Services
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("portfolio")}
            >
              Portfolio
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("careers")}
            >
              Careers
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("blog")}
            >
              Blog
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.rightContent}>
        <button
          className={styles.button}
          onClick={() => handleScrollToSection("contact")}
        >
          Get in touch
        </button>
      </section>
    </header>
  );
}
