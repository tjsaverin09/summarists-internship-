"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from 'axios';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  console.log(book)

  useEffect(() => {
    if(params?.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      setBookId(id);
    }
  }, [params]);

  useEffect(() => {
    if(bookId) {
      getBooks();
    }
  }, [bookId]);

  async function getBooks() {
    if (!bookId) return;

    try {
      setIsLoading(true);
      setError(null);

      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`
      );
      setBook(data);
      console.log(data);
    }
    catch (err){
      console.log("Error Fetching Api Data");
      setError("Failed to fetch book data")
    } 
    finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="book-page">
      <div className="container">
        <div className="row">
          <div className="book">
            {book && (
              <>

             
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
          
          <div className="book-image__wrapper">
            {/* <img src="" alt="" /> */}
          </div>
           </>
            )}
            {
              !book && (
                <div className="book-loading">
                  <p>Loading book details...</p>
                </div>
              )
            }
           </div>
        </div>
      </div>
    </div>
  );
}
