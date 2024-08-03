import Image from "next/image";
import styles from "./page.module.css";
import NewsList from "./components/Section/NewsList/NewsList";
import WorksList from "./components/Section/WorksList/WorksList";
import ProductsList from "./components/Section/ProductsList/ProductsList";
import ArticleList from "./components/Section/Article/ArticleList";
import Profile from "./components/Section/Profile/Profile";
import Contact from "./components/Section/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Hader";
import KeyVisual from "./components/Section/KeyVisual/KeyVisual";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <KeyVisual />
        <NewsList />
        <WorksList />
        <ProductsList />
        <ArticleList />
        <Profile />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
