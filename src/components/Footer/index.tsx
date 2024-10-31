import Image from "next/image";
import LogoHeaderWhite from "@/../public/logo-header-white.svg";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { handleScrollToSection } from "@/utils/scrollUtils";

export function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.contentFooter}>
        <div className={styles.containerImg}>
          <Image
            src={LogoHeaderWhite}
            alt="Logo"
            priority
            width={125}
            onClick={() => router.push("/")}
          />
        </div>

        <div className={styles.containerListLinks}>
          <ul className={styles.listLinks}>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("home")}
            >
              About Us
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
              Features
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("blog")}
            >
              Blog
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleScrollToSection("technology")}
            >
              Community
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.containerContactItem}>
          <h3 className={styles.titleContact}>Email:</h3>
          <p className={styles.contactItem}>support@elasticmind.com</p>
        </div>

        <div className={styles.containerContactItem}>
          <h3 className={styles.titleContact}>Phone:</h3>
          <p className={styles.contactItem}>+55 (11) 99045684</p>
        </div>

        <div className={styles.containerContactItem}>
          <h3 className={styles.titleContact}>Adress:</h3>
          <p className={styles.contactItem}>123456</p>
        </div>
      </section>
    </footer>
  );
}
