import styles from "./styles.module.css";

interface IHeaderArticleDetails {
  title: string;
  subtitle?: string;
}

export function HeaderArticleDetails({
  title,
  subtitle,
}: IHeaderArticleDetails) {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>

        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      </div>
    </header>
  );
}
