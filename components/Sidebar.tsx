import styles from "../CssModules/sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";

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
            <div className={styles.topOptionLabel}>For you</div>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <IoBookmarkOutline />
            </div>
            <div className={styles.topOptionLabel}>My Library</div>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <RiBallPenLine />
            </div>
            <div className={styles.topOptionLabel}>Highlights</div>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <IoMdSearch />
            </div>
            <div className={styles.topOptionLabel}>Search</div>
          </div>
        </div>
        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <GoGear />
            </div>
            <div className="bottomOptionLabel">Settings</div>
          </div>
          <div className={styles.sidebarOption}>
            <div className={styles.optionIcon}>
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="bottomOptionLabel">Help & Support</div>
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
