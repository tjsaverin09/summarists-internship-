'use client'

import { IoMdSearch } from "react-icons/io";
import styles from "@/components/searchbar/searchbar.module.css";
import { useState } from "react";

export default function Searchbar() {
const [query, setQuery] = useState("");
const [isOpen, setIsOpen] = useState(false);
const [loading, setLoading] = useState(true);

  function resultsLoading() {
    return(
      <>
      <div className={styles.resultSkeleton}>box</div>
      <div className={styles.resultSkeleton}>box</div>
      <div className={styles.resultSkeleton}>box</div>
      <div className={styles.resultSkeleton}>box</div>
      <div className={styles.resultSkeleton}>box</div>
      </>
    )
  }

  return (
    <div className={styles.searchBar}>
        <div className={styles.searchWrapper}>
      <div className={styles.searchContent}>
        <input type="text" 
        onFocus={() => setIsOpen(true)}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books" 
        className={styles.searchInput} 
        />
        <div onClick={() => null} className={styles.searchIcon}>
          <IoMdSearch />
        </div>
      </div>
      {isOpen && query && (
        <ul className={styles.dropdownContainer}>
          {!loading ? <li className={styles.dropdownOptions}></li> : resultsLoading()}
        </ul>
      )}
    </div>
</div>
    
  );
}
