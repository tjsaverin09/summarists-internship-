"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useGetBookByIdQuery } from "@/redux/selectedBookApiSlice";

interface Book {
  id: string;
  title: string;
  author: string;
  subtitle?: string;
  imageLink?: string;
  // Add other book properties as needed
}

export default function BookPage() {
  const params = useParams();
  const [bookId, setBookId] = useState<string | null>(null);
  const [book, setBook] = useState<Book | null>(null);

  // Extract book ID from params
  useEffect(() => {
    if (params?.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      setBookId(id);
      console.log("Book ID from URL:", id);
    }
  }, [params]);

  // Fetch book data using RTK Query
  const {
    data: bookData,
    isLoading,
    error,
  } = useGetBookByIdQuery(bookId!, {
    skip: !bookId, // Skip query if no bookId
  });

  // Update local state when book data changes
  useEffect(() => {
    if (bookData) {
      setBook(bookData);
      console.log("Book data loaded:", bookData);
    }
  }, [bookData]);

  // Loading state
  if (isLoading) {
    return <div className="book-page">Loading book...</div>;
  }

  // Error state
  if (error) {
    return <div className="book-page">Error loading book</div>;
  }

  // No book found
  if (!book) {
    return <div className="book-page">Book not found</div>;
  }

  return (
    <div className="book-page">
      <div className="container">
        <div className="row">
          <div className="book">
            <div className="book-detail">
              <div className="book-title">book Title: {book.title}</div>
              <div className="book-author">book Author: {book.author}</div>
              <div className="book-subtitle">
                book subTitle: {book.subtitle || "No subtitle available"}
              </div>
            </div>
            <div className="book-stats">
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
            </div>
            <div className="user-options">
              <div className="user-option__btns">
                <button className="user-option"></button>
                <button className="user-option"></button>
              </div>
              <div className="user-option__bookmark">
                <div className="user-option__bookmark__icon"></div>
                <div className="user-option__bookmark__label"></div>
              </div>
            </div>
            <div className="book-description">
              <div className="book-description__title"></div>
              <div className="book-description__tags">
                <div className="book-description__tag"></div>
                <div className="book-description__tag"></div>
              </div>
              <div className="book-description__text"></div>
              <div className="book-description__author">
                <div className="book-desciption__title"></div>
                <div className="book-description__author__text"></div>
              </div>
            </div>
          </div>
          <div className="book-image__wrapper">
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
