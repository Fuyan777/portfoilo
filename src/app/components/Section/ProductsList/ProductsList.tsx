import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./ProductsList.module.css";
import nextConfig from "../../../../../next.config.mjs";

const appItems: {
  [key: number]: { title: string; src: string; link: string };
} = {
  1: {
    title: "Vegitaberu",
    src: "1_vegitaberu",
    link: "https://apps.apple.com/jp/app/id6749199964",
  },
  2: {
    title: "Yametoku",
    src: "2_yametoku",
    link: "https://apps.apple.com/jp/app/id6749310247",
  },
  3: {
    title: "Maisore",
    src: "3_maisore",
    link: "https://apps.apple.com/jp/app/id6751938161",
  },
  4: {
    title: "Misel",
    src: "4_misel",
    link: "https://apps.apple.com/jp/app/id6752554103",
  },
  5: {
    title: "Mirucode",
    src: "5_mirucode",
    link: "https://apps.apple.com/jp/app/id6756328501",
  },
  6: {
    title: "Miradance",
    src: "6_miradance",
    link: "https://apps.apple.com/jp/app/id6757953970",
  },
  7: {
    title: "Onetask",
    src: "7_onetask",
    link: "https://apps.apple.com/jp/app/id6758742308",
  },
  8: {
    title: "Abcan",
    src: "8_abcan",
    link: "https://apps.apple.com/jp/app/id1587434824",
  },
  9: {
    title: "Eightpost",
    src: "9_eightpost",
    link: "",
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
            if (app.link) {
              return (
                <Link
                  href={app.link}
                  key={num}
                  className={`${styles.cell} ${styles.hasApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${BASE_PATH}/${app.src}.png`}
                    alt={app.title}
                    className={styles.image}
                  />
                </Link>
              );
            } else {
              return (
                <div key={num} className={`${styles.cell} ${styles.hasApp}`}>
                  <img
                    src={`${BASE_PATH}/${app.src}.png`}
                    alt={app.title}
                    className={styles.image}
                  />
                </div>
              );
            }
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
