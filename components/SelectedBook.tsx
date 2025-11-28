'use client'

import styles from "@/CssModules/selectedBooks.module.css"
import { useGetSingleBookQuery } from "@/redux/selectedBookApiSlice";
import { FaCirclePlay } from "react-icons/fa6";

export default function SelectedBooks() {
    const { data: book, error, isLoading } = useGetSingleBookQuery();

     if (isLoading) return <div>Loading...</div>;
     if (error) return <div>Error loading book</div>;

    return (
        <div className={styles.selectedBookWrapper}>
            <div className={styles.selectedBookContent}>
              <div className={styles.selectedBookDesc}>
                How Constant Innovation Creates Radically Successful <br/> Businesses
              </div>
              <div className={styles.selectedBooksDivider}></div>
              <div className={styles.selectedBook}>
                <div className={styles.selectedBookCoverWrapper}>
                  <img
                    src={book?.[0].imageLink || "/placeholder.jpg"}
                    alt={book?.title || "Book Cover"}
                    className={styles.selectedBookCover}
                  />
                </div>
                <div className={styles.selectedBookDetails}>
                  <div className={styles.selectedBookName}>{book?.[0].title}</div>
                  <div className={styles.selectedBookAuthor}>{book?.[0].author}</div>
                  <div className={styles.selectedBookAudioPlayer}>
                    <button className="selectedBookAudioBtn">
                      <FaCirclePlay />
                    </button>
                    <div className="selectedBookLength">3 mins 23 secs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}