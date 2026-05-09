import Link from "next/link";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { getAllProductsMeta } from "@/lib/products";
import styles from "./ArticleList.module.css";
import nextConfig from "../../../../../next.config.mjs";

export default function ArticleList() {
  const BASE_PATH = nextConfig.basePath || "";
  const articles = getAllProductsMeta();

  if (articles.length === 0) return null;

  return (
    <main className="main" id="articles">
      <SectionHeader title={"Articles"} />

      <div className={styles.articleListContainer}>
        {articles.map((article) => (
          <Link
            href={`/products/${article.slug}`}
            key={article.slug}
            className={styles.articleItem}
          >
            <div className={styles.imageWrapper}>
              <img
                src={`${BASE_PATH}${article.ogImage}`}
                alt={article.title}
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.title}>{article.title}</div>
              <div className={styles.description}>{article.description}</div>
              <div className={styles.date}>{article.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
