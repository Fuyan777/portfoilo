import styles from "./ViewAllButton.module.css";

export default function ViewAllButton() {
  return (
    <main className="main">
      <div className={styles.viewAll}>
        <a href="#">View all</a>
      </div>
    </main>
  );
}
