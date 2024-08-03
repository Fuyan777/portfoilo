import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <main className="main">
      <div className={styles.imageContainer}>
        <a href="https://x.com/gamegamega_329">
          <img src="/icon_x.png" />
        </a>
        <a href="https://qiita.com/Puyan">
          <img src="/icon_qiita.png" />
        </a>
        <a href="https://github.com/Fuyan777">
          <img src="/icon_github.png" />
        </a>
        <a href="https://www.wantedly.com/id/fuya_yamada">
          <img src="/icon_wantedly.png" />
        </a>
      </div>

      <div className={styles.bottomBackground} />
    </main>
  );
}
