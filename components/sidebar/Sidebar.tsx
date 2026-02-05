import styles from "@/components/sidebar/sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";

export default function Sidebar() {
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
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <AiOutlineHome />
            </div>
            <Link href="/for-you">
              <div className={styles.topOptionLabel}>For you</div>
            </Link>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <IoBookmarkOutline />
            </div>
            <Link href="/">
              <div className={styles.topOptionLabel}>My Library</div>
            </Link>
          </div>
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
            <Link href="/">
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
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <LuLogOut />
            </div>
            <div className="bottomOptionLabel">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}
