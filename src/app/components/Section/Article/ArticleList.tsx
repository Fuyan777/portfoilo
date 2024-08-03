import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ViewAllButton from "../../ViewAllButton/ViewAllButton";
import styles from "./ArticleList.module.css";
import nextConfig from "../../../../../next.config.mjs";

const worksItems = [
  { date: "2024.6", title: "WEARリニューアルプロジェクト" },
  { date: "2023.6", title: "WWDC現地参加" },
  { date: "2023.5 - 2024.6", title: "WEARリニューアルプロジェクト2" },
];

export default function ArticleList() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main" id="article">
      <SectionHeader title={"Article&Speaker"} />

      <div className={styles.workItemListContainer}>
        {worksItems.map((item) => (
          <div className={styles.workItem} key={item.title}>
            <Link href={"/"}>
              <img
                src={`${BASE_PATH}/sample.png`}
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
