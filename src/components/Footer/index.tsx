import Image from "next/image";
import LogoHeaderWhite from "@/../public/logo-header-white.svg";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.contentFooter}>
        <div className={styles.containerImg}>
          <Image src={LogoHeaderWhite} alt="Logo" priority width={125} />
        </div>

        <div className={styles.containerListLinks}>
          <ul className={styles.listLinks}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>Services</li>
            <li className={styles.listItem}>Features</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Community</li>
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
