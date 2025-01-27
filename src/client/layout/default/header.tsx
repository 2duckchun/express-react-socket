import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
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
