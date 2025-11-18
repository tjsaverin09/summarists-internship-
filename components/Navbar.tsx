'use client'

import Link from "next/link";
import styles from "../Navbar.module.css";
import { useSelector } from "../redux/typedHooks";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/loginModalSlice";

function Navbar() {

  const loginModal = useSelector(state => state.loginModal.isOpen)
  const dispatch = useDispatch()

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__wrapper}>
            <figure className={styles.nav__logo__wrapper}>
              <img src="/logo.png" alt="Summarist Logo" className={styles.nav__logo} />
            </figure>
             
          <ul className={`flex m-8 ${styles.navList}`}>
            <button onClick={() => dispatch(openModal())}>
              <li className={styles.li}>Login</li>
            </button>

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
