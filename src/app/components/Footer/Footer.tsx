import styles from "./Footer.module.css";
import nextConfig from "../../../../next.config.mjs";

export default function Footer() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main">
      <div className={styles.imageContainer}>
        <a href="https://x.com/gamegamega_329">
          <img src={`${BASE_PATH}/icon_x.png`} />
        </a>
        <a href="https://qiita.com/Puyan">
          <img src={`${BASE_PATH}/icon_qiita.png`} />
        </a>
        <a href="https://github.com/Fuyan777">
          <img src={`${BASE_PATH}/icon_github.png`} />
        </a>
        <a href="https://www.wantedly.com/id/fuya_yamada">
          <img src={`${BASE_PATH}/icon_wantedly.png`} />
        </a>
      </div>

      <div className={styles.logoContainer}>
        <img src={`${BASE_PATH}/logo_fuyantech.png`} width={140} />
      </div>

      <div className={styles.bottomBackground} />
    </main>
  );
}
