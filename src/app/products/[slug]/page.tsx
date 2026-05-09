import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProductSlugs } from "@/lib/products";
import styles from "./Product.module.css";
import nextConfig from "../../../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const product = await getProduct(params.slug);
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [`${BASE_PATH}${product.ogImage}`],
        type: "article",
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  let product;
  try {
    product = await getProduct(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className={styles.container}>
      <article className={styles.content}>
        <Link href="/#product" className={styles.backLink}>
          ← Productsに戻る
        </Link>

        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.date}>{product.date}</p>

        {product.ogImage && (
          <div className={styles.heroImageWrapper}>
            <img
              src={`${BASE_PATH}${product.ogImage}`}
              alt={product.title}
              className={styles.heroImage}
            />
          </div>
        )}

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: product.contentHtml }}
        />

        {product.appStoreUrl && (
          <div className={styles.cta}>
            <a
              href={product.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              App Storeで見る
            </a>
          </div>
        )}

        <div className={styles.footer}>
          <Link href="/#product" className={styles.footerLink}>
            ← Productsに戻る
          </Link>
        </div>
      </article>
    </main>
  );
}
