import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./NoteList.module.css";

const noteArticles = [
  {
    title: "【AIといっしょ】生成AIでアプリ100個作ったら'いくら稼げるのか'検証してみた 1〜4本目",
    image: "https://assets.st-note.com/production/uploads/images/235928362/rectangle_large_type_2_b7b8fad1eb9497d6c994c96f8ced94d9.png?fit=bounds&quality=85&width=1280",
    link: "https://note.com/fuyantech/n/n418b29528b08",
  },
  {
    title: "ついにリリース!? 審査落ち連発の原因とは。〜みるコード〜",
    image: "https://assets.st-note.com/production/uploads/images/243332635/rectangle_large_type_2_7c74c5ab129ebe6888a884a13d624618.png",
    link: "https://note.com/fuyantech/n/ne5a87d79b511",
  },
];

export default function NoteList() {
  return (
    <main className="main" id="note">
      <SectionHeader title={"Note"} />

      <div className={styles.articleListContainer}>
        {noteArticles.map((article) => (
          <div className={styles.articleItem} key={article.title}>
            <Link href={article.link} target="_blank">
              <img
                src={article.image}
                alt={article.title}
                className={styles.image}
              />
            </Link>
            <div className={styles.label}>{article.title}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
