import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

const productsDir = path.join(process.cwd(), "content/products");

export type ProductMeta = {
  title: string;
  slug: string;
  date: string;
  description: string;
  ogImage: string;
  appStoreUrl?: string;
};

export type Product = ProductMeta & {
  contentHtml: string;
};

export function getProductSlugs(): string[] {
  if (!fs.existsSync(productsDir)) return [];
  return fs
    .readdirSync(productsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readMatter(slug: string) {
  const fullPath = path.join(productsDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw);
}

export function getProductMeta(slug: string): ProductMeta {
  const { data } = readMatter(slug);
  return {
    title: data.title,
    slug,
    date: data.date,
    description: data.description,
    ogImage: data.ogImage,
    appStoreUrl: data.appStoreUrl,
  };
}

export async function getProduct(slug: string): Promise<Product> {
  const { data, content } = readMatter(slug);
  const processed = await remark().use(gfm).use(html).process(content);
  return {
    title: data.title,
    slug,
    date: data.date,
    description: data.description,
    ogImage: data.ogImage,
    appStoreUrl: data.appStoreUrl,
    contentHtml: processed.toString(),
  };
}

export function getAllProductsMeta(): ProductMeta[] {
  return getProductSlugs()
    .map((slug) => getProductMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
