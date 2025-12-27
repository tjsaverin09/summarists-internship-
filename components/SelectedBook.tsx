"use client";

import styles from "@/CssModules/selectedBooks.module.css";
import { useGetSingleBookQuery } from "@/redux/selectedBookApiSlice";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";

export default function SelectedBooks() {
  const { data: book, error, isLoading, refetch } = useGetSingleBookQuery('selectedBookApi');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading book</div>;
  if (!book)
    return (
      <div>
        No book data available
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );

  return (
    <Link href={`book/${book?.id}`}>
      <div className={styles.selectedBookWrapper}>
        <div className={styles.selectedBookContent}>
          <div className={styles.selectedBookDesc}>
            How Constant Innovation Creates Radically Successful <br />{" "}
            Businesses
          </div>
          <div className={styles.selectedBooksDivider}></div>
          <div className={styles.selectedBook}>
            <div className={styles.selectedBookCoverWrapper}>
              <img
                src={book?.imageLink || "/placeholder.jpg"}
                alt={book?.title || "Book Cover"}
                className={styles.selectedBookCover}
              />
            </div>
            <div className={styles.selectedBookDetails}>
              <div className={styles.selectedBookName}>{book?.title}</div>
              <div className={styles.selectedBookAuthor}>{book?.author}</div>
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
    </Link>
  );
}
