import { Link } from "react-router-dom";
import styles from "./css/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>모두의 채팅</h1>
      <nav className={styles.nav}>
        <li>
          <Link to={"/all-chat"}>모두 채팅</Link>
        </li>
        <li>
          <Link to={"/home"}>홈</Link>
        </li>
      </nav>
    </header>
  );
}
