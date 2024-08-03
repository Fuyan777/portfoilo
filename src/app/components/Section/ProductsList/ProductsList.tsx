import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ViewAllButton from "../../ViewAllButton/ViewAllButton";
import styles from "./ProductsList.module.css";

const worksItems = [
  { date: "2024.6", title: "WEARリニューアルプロジェクト" },
  { date: "2023.6", title: "WWDC現地参加" },
  { date: "2023.5 - 2024.6", title: "WEARリニューアルプロジェクト" },
];

export default function ProductsList() {
  return (
    <main className="main" id="product">
      <SectionHeader title={"Products"} />

      <div className={styles.workItemListContainer}>
        {worksItems.map((item) => (
          <div className={styles.workItem} key={item.title}>
            <Link href={"/"}>
              <img src="/sample.png" alt="alt" className={styles.image} />
            </Link>
            <div className={styles.label}>{item.title}</div>
          </div>
        ))}
      </div>

      {/* <ViewAllButton /> */}
    </main>
  );
}
