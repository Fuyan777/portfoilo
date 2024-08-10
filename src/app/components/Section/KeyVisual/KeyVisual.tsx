import styles from "./KeyVisual.module.css";

export default function KeyVisual() {
  return (
    <main className="main">
      <div className={styles.videoContainer}>
        <video className={styles.video} width="600" loop autoPlay muted>
          <source src="/demo.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <h2 className={styles.title}>FuyanTech</h2>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>Fuya</h2>
            <h2 className={styles.name}>Yamada</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <h2 className={styles.title}>FuyanTech</h2>
          <h2 className={styles.name}>
            Fuya
            <br />
            Yamada
          </h2> */
}
