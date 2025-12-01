"use client";

import styles from "@/CssModules/foryou.module.css";
import SelectedBooks from "@/components/SelectedBook";
import RecommendedBooks from "@/components/RecommendBooks";
import SuggestedBooks from "@/components/SuggestedBooks";


export default function forYou() {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.forYouWrapper}>
          <div className="foryou__header">Selected just for you</div>
          <SelectedBooks />
          <RecommendedBooks />
          <SuggestedBooks />
        </div>
      </div>
    </div>
  );
}
