"use client";

import styles from "@/components/sidebar/sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase/init";
import { useState, useEffect } from "react"; 

export default function Sidebar() {
  const [userLoggedIn, setUserLoggedIn] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserLoggedIn(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const user = auth.currentUser;
  if (user) {
    console.log(user.email, user.uid);
  } else {
    console.log("no user")
  }



  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogoWrapper}>
        <img
          src="/logo.png"
          alt="Summarists Logo"
          className={styles.sidebarLogo}
        />
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarTop}>
          <Link href="/for-you">
            <div className={styles.sidebarOption}>
              <div className={styles.optionIcon}>
                <AiOutlineHome />
              </div>

              <div className={styles.topOptionLabel}>For you</div>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.sidebarOption}>
              <div className={styles.optionIcon}>
                <IoBookmarkOutline />
              </div>

              <div className={styles.topOptionLabel}>My Library</div>
            </div>
          </Link>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <RiBallPenLine />
            </div>
            <div className={`${styles.topOptionLabel} ${styles.noClick}`}>
              Highlights
            </div>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <IoMdSearch />
            </div>
            <div className={`${styles.topOptionLabel} ${styles.noClick}`}>
              Search
            </div>
          </div>
        </div>
        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <GoGear />
            </div>
            <Link href="/settings">
              <div className="bottomOptionLabel">Settings</div>
            </Link>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className={`bottomOptionLabel ${styles.noClick}`}>
              Help & Support
            </div>
          </div>
          <button className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <LuLogOut />
            </div>
              <div className="bottomOptionLabel">
               {userLoggedIn ? "Logout" : "Login"}
              </div>
          </button>
        </div>
      </div>
    </div>
  );
}
