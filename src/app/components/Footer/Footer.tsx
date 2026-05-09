import Link from "next/link";
import styles from "./Footer.module.css";
import nextConfig from "../../../../next.config.mjs";

export default function Footer() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main">
      <div className={styles.logoContainer}>
        <img src={`${BASE_PATH}/logo_fuyantech.png`} width={140} alt="FuyanTech" />
      </div>

      <div className={styles.linkContainer}>
        <Link href="/privacy" className={styles.link}>
          プライバシーポリシー
        </Link>
        <span className={styles.linkSeparator}>|</span>
        <Link href="/terms" className={styles.link}>
          利用規約
        </Link>
        <span className={styles.linkSeparator}>|</span>
        <a href="mailto:fuya0713@gmail.com" className={styles.link}>
          お問い合わせ
        </a>
      </div>

      <div className={styles.bottomBackground} />
    </main>
  );
}
