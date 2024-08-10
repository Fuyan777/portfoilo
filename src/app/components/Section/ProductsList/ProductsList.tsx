import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ViewAllButton from "../../ViewAllButton/ViewAllButton";
import styles from "./ProductsList.module.css";
import nextConfig from "../../../../../next.config.mjs";

const prductItems = [
  {
    title: "アブローラーカウント",
    src: "abs",
    link: "https://apps.apple.com/jp/appid1587434824",
  },
  {
    title: "DreamTracker",
    src: "dt",
    link: "https://apps.apple.com/jp/app/dreamtracker/id6479675478",
  },
  {
    title: "日焼け止めタイマー",
    src: "sun",
    link: "https://apps.apple.com/jp/app/id6461166544",
  },
  {
    title: "ポートフォリオ",
    src: "portfolio",
    link: "/",
  },
];

// https://apps.apple.com/jp/app/financequest/id6538724962

export default function ProductsList() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main" id="product">
      <SectionHeader title={"Products"} />

      <div className={styles.workItemListContainer}>
        {prductItems.map((item) => (
          <div className={styles.workItem} key={item.title}>
            <Link href={item.link}>
              <img
                src={`${BASE_PATH}/pd_${item.src}.png`}
                alt="alt"
                className={styles.image}
              />
            </Link>
            <div className={styles.label}>{item.title}</div>
          </div>
        ))}
      </div>

      {/* <ViewAllButton /> */}
    </main>
  );
}
