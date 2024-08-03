import styles from "./KeyVisual.module.css";

export default function KeyVisual() {
  return (
    <main className="main">
      <div className={styles.video}>
        <div className={styles.blur}>
          <h2 className={styles.title}>ETA</h2>
          <h2 className={styles.name}>
            Fuya
            <br />
            Yamada
          </h2>
        </div>
      </div>
    </main>
  );
}
