import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ViewAllButton from "../../ViewAllButton/ViewAllButton";
import styles from "./ArticleList.module.css";
import nextConfig from "../../../../../next.config.mjs";

const worksItems = [
  {
    title: "WEARリニューアル",
    src: "newwear",
    link: "https://techblog.zozo.com/entry/newwear-renewal-new-grad-ios-engineer-approach",
  },
  {
    title: "WWDC現地参加",
    src: "wwdc24",
    link: "https://techblog.zozo.com/entry/wwdc24",
  },
];

export default function ArticleList() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main" id="article">
      <SectionHeader title={"Article&Speaker"} />

      <div className={styles.workItemListContainer}>
        {worksItems.map((item) => (
          <div className={styles.workItem} key={item.title}>
            <Link href={item.link}>
              <img
                src={`${BASE_PATH}/${item.src}.png`}
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
