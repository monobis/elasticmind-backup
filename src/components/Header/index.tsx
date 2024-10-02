import Image from "next/image";
import LogoHeaderWhite from "@/../public/logo-header-white.svg";
import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <section className={styles.leftContent}>
        <div className={styles.containerImg}>
          <Image src={LogoHeaderWhite} alt="Logo" priority width={125} />
        </div>

        <div className={styles.containerListLinks}>
          <ul className={styles.listLinks}>
            <li className={styles.listItem}>For Clients</li>
            <li className={styles.listItem}>Services</li>
            <li className={styles.listItem}>Portfolio</li>
            <li className={styles.listItem}>Careers</li>
            <li className={styles.listItem}>Blog</li>
          </ul>
        </div>
      </section>
      <section className={styles.rightContent}>
        <button className={styles.button}>Get in touch</button>
      </section>
    </header>
  );
}
