// src/app/page.js
import MenuList from "../components/MenuList";
import styles from "../styles/Page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Restoran Menü</h1>
      <MenuList />
    </div>
  );
}
