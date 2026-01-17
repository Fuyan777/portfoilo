import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./ProductsList.module.css";
import nextConfig from "../../../../../next.config.mjs";

const appItems: { [key: number]: { title: string; src: string; link: string } } = {
  1: {
    title: "アブローラーカウント",
    src: "abs",
    link: "https://apps.apple.com/jp/app/id1587434824",
  },
  2: {
    title: "DreamTracker",
    src: "dt",
    link: "https://apps.apple.com/jp/app/dreamtracker/id6479675478",
  },
  3: {
    title: "日焼け止めタイマー",
    src: "sun",
    link: "https://apps.apple.com/jp/app/id6461166544",
  },
  4: {
    title: "ポートフォリオ",
    src: "portfolio",
    link: "/",
  },
};

export default function ProductsList() {
  const BASE_PATH = nextConfig.basePath || "";
  const cells = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <main className={`main ${styles.section}`} id="product">
      <SectionHeader title={"Products"} />

      <div className={styles.gridContainer}>
        {cells.map((num) => {
          const app = appItems[num];
          if (app) {
            return (
              <Link href={app.link} key={num} className={`${styles.cell} ${styles.hasApp}`}>
                <img
                  src={`${BASE_PATH}/pd_${app.src}.png`}
                  alt={app.title}
                  className={styles.image}
                />
              </Link>
            );
          }
          return (
            <div key={num} className={styles.cell}>
              <span className={styles.cellNumber}>{num}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
