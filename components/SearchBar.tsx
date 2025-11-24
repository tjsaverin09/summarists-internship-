import { IoMdSearch } from "react-icons/io";
import styles from "../CssModules/searchbar.module.css";

export default function Searchbar() {
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchWrapper}>
      <div className={styles.searchContent}>
        <input type="text" placeholder="Search for books" className={styles.searchInput} />
        <div className={styles.searchIcon}>
          <IoMdSearch />
        </div>
      </div>
    </div>
</div>
    
  );
}
