"use client";

import { useGetSugBooksQuery } from "@/redux/sugBooksApiSlice";
import Link from "next/link";
import styles from "@/components/recBooks/recommendedBooks.module.css";

export default function SuggestedBooks() {
  const { data: sugBooksArray, isLoading, error } = useGetSugBooksQuery();

  function renderLoadingState() {
    return (
      <div className={`bookList ${styles.loadingState}`}>
        {new Array(7).fill(0).map((_, id) => (
          <div className={`book ${styles.bookLoading}`} key={id}>
            <div className={`bookImageWrapper ${styles.imageLoading}`}>
              <div className={styles.skeleton} />
            </div>
            <div className={`bookName ${styles.skeleton}`}></div>
            <div className={`bookAuthor ${styles.skeleton}`}></div>
            <div className={`bookDescription ${styles.skeleton}`}></div>
            <div className="extraDetails">
              <div className={`bookLength ${styles.skeleton}`}></div>
              <div className={`bookRating ${styles.skeleton}`}></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="suggestedBooksWrapper">
      <div className="foryou__header">Suggested Books</div>
      <div className="foryou__subtitle">Browse those books</div>
      {isLoading ? (
        renderLoadingState()
      ) : (
      <div className="bookList">
        {sugBooksArray?.map((books) => (
          <Link href={`book/${books?.id || "no-id"}`} key={books.id}>
            <div className="book">
              {books.subscriptionRequired && <span className="book__premium--pill">Premium</span>}
              <div className="bookImageWrapper">
                <img
                  src={books.imageLink}
                  alt={books.title}
                  className="recBookImage"
                />
              </div>
              <div className="bookName">{books.title}</div>
              <div className="bookAuthor">{books.author}</div>
              <div className="bookDescription">{books.subTitle}</div>
              <div className="extraDetails">
                <div className="bookLength"></div>
                <div className="bookRating">{books.averageRating}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      )}
    </div>
  );
}
