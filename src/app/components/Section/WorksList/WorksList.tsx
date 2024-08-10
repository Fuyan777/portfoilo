import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ViewAllButton from "../../ViewAllButton/ViewAllButton";
import styles from "./WorksList.module.css";
import nextConfig from "../../../../../next.config.mjs";

const worksItems = [
  {
    title: "WEARリニューアルプロジェクト",
    src: "newwear",
    link: "https://corp.zozo.com/news/20240509-wear-renewal/",
  },
  {
    title: "社内インタビュー",
    src: "interview",
    link: "https://www.wantedly.com/id/fuya_yamada/items/d1300e7e-e924-4845-8cce-b743bb6d266f",
  },
];

export default function WorksList() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main" id="works">
      <SectionHeader title={"Works"} />

      <div className={styles.workItemListContainer}>
        {worksItems.map((item) => (
          <div className={styles.workItem} key={item.title}>
            <Link href={item.link}>
              <img
                src={`${BASE_PATH}/work_${item.src}.png`}
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
