"use client";

import { IoMdSearch } from "react-icons/io";
import styles from "@/components/searchbar/searchbar.module.css";
import { useEffect, useState } from "react";
import SearchResultsLoading from "@/app/UI/SearchResultsLoading";
import { useGetSingleBookQuery } from "@/redux/selectedBookApiSlice";
import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import { useDispatch } from "react-redux";
import { useGetSugBooksQuery } from "@/redux/sugBooksApiSlice";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const { data: selectedBook, isLoading: selectedLoading } =
    useGetSingleBookQuery();
  const { data: recBooks, isLoading: recLoading } = useGetRecBooksQuery();
  const { data: sugBooks, isLoading: sugLoading } = useGetSugBooksQuery();

  const loading = selectedLoading || recLoading || sugLoading;

  useEffect(() => {
    if (isOpen && query) {
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false)
    }
  }, [isOpen, query]);

  const allBooks = [
    ...(selectedBook ? [selectedBook] : []),
    ...(recBooks || []),
    ...(sugBooks || []),
  ];

  const filteredBooks = allBooks.filter(
    (book) =>
      book.title?.toLowerCase().includes(query.toLowerCase()) ||
      book.author?.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchContent}>
          <input
            type="text"
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
            <div className={styles.dropdownOptionsWrapper}>

            
            {!loading && !showLoading ? (
              filteredBooks.map((book) => (
                <li key={book.id} className={styles.dropdownOptions}>
                  <div className={styles.bookImgHolder}>
                    <img src={book.imageLink}/>
                  </div>
                  <div className={styles.book__info}>
                    <div className={styles.book__title}>{book.title}</div>
                     <div className={styles.book__author}>{book.author}</div>
                  </div>
                </li>
              ))
            ) : (
              <SearchResultsLoading />
            )}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
