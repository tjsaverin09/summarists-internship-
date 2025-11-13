import Link from "next/link";
import styles from "../Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__wrapper}>
            <figure className={styles.nav__logo__wrapper}>
              <img src="/logo.png" alt="Summarist Logo" className={styles.nav__logo} />
            </figure>
             
          <ul className={`flex m-8 ${styles.navList}`}>
            <Link href={""}>
              <li className={styles.li}>Login</li>
            </Link>

            <li className={styles.li}>About</li>

            <li className={styles.li}>Contact</li>

            <li className={styles.li}>Help</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
