import styles from "./page.module.css";
import ProductsList from "./components/Section/ProductsList/ProductsList";
import YouTube from "./components/Section/YouTube/YouTube";
import NoteList from "./components/Section/NoteList/NoteList";
import Profile from "./components/Section/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <ProductsList />
        <YouTube />
        <NoteList />
        <Profile />
        <Footer />
      </div>
    </main>
  );
}
