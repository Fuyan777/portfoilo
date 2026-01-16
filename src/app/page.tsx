import styles from "./page.module.css";
import ProductsList from "./components/Section/ProductsList/ProductsList";
import Profile from "./components/Section/Profile/Profile";
import SNSList from "./components/Section/SNSList/SNSList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import KeyVisual from "./components/Section/KeyVisual/KeyVisual";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <KeyVisual />
        <ProductsList />
        <Profile />
        <SNSList />
        <Footer />
      </div>
    </main>
  );
}
