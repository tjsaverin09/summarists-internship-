"use client";

import Searchbar from "@/components/Searchbar";
import styles from "@/CssModules/foryou.module.css";
import SelectedBooks from "@/components/SelectedBook";
import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import RecommendedBooks from "@/components/RecommendBooks";
import SuggestedBooks from "@/components/SuggestedBooks";


export default function forYou() {

  const { data: recBooksArray} = useGetRecBooksQuery()


 

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
