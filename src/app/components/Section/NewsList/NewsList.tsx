import SectionHeader from "../../SectionHeader/SectionHeader";
import ViewAllButton from "../../ViewAllButton/ViewAllButton";
import styles from "./NewsList.module.css";

const newsItems = [
  { date: "2024.6", title: "WWDC24報告会 LT登壇" },
  { date: "2023.6", title: "WWDC現地参加" },
  { date: "2023.5 - 2024.6", title: "WEARリニューアルプロジェクト" },
];

export default function NewsList() {
  return (
    <main className="main" id="news">
      <SectionHeader title={"NEWS"} />

      <ul className={styles.newsList}>
        {newsItems.map((item, index) => (
          <li key={index} className={styles.newsItem}>
            <div className={styles.newsContainer}>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.title}>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* <ViewAllButton /> */}
    </main>
  );
}
