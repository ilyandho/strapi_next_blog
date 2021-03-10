import Link from "next/link";
import HeaderStyles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={HeaderStyles.headerOuter}>
      <div className={HeaderStyles.headerInner}>
        <div className={HeaderStyles.headerLogo}>
          <h1>HelloWorld!</h1>
        </div>
        <nav className="header-navigation">
          <ul>
            <li>
              <Link href="#"> About</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
