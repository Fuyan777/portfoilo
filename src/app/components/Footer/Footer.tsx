import styles from "./Footer.module.css";
import nextConfig from "../../../../next.config.mjs";

export default function Footer() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main">
      <div className={styles.logoContainer}>
        <img src={`${BASE_PATH}/logo_fuyantech.png`} width={140} />
      </div>

      <div className={styles.bottomBackground} />
    </main>
  );
}
