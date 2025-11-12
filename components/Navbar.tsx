import Link from "next/link";
import styles from "../Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between">
        <div className="nav__logo--container">
          <img src="/logo.png" alt="Summarist Logo" className="h-12 m-8" />
        </div>
        <ul className={`flex m-8 ${styles.navList}`}>
          <Link href={""}>
            <li className={styles.li}>Login</li>
          </Link>

          <li className={styles.li}>About</li>

          <li className={styles.li}>Contact</li>

          <li className={styles.li}>Help</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
