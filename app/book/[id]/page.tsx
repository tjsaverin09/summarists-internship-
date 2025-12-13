"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";

interface Book {
  id: string;
  title: string;
  author: string;
  subTitle?: string;
  imageLink?: string;
  averageRating?: number;
  totalRating?: number;
  keyIdeas?: number;
  // Add other book properties as needed
}

export default function BookPage() {
  const params = useParams();
  const [bookId, setBookId] = useState<string | null>(null);
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  console.log(book);

  useEffect(() => {
    if (params?.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      setBookId(id);
    }
  }, [params]);

  useEffect(() => {
    if (bookId) {
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
    } catch (err) {
      console.log("Error Fetching Api Data");
      setError("Failed to fetch book data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="book-page">
      <div className="container">
        <div className="row">
          <div className="inner-book">
            {book && (
              <>
                <div className="inner-book__detail__wrapper">
                  <div className="inner-book__detail">
                    <div className="inner-book__title">{book.title}</div>
                    <div className="inner-book__author">{book.author}</div>
                    <div className="inner-book__subtitle">{book.subTitle}</div>
                  </div>
                  <div className="inner-book__stats">
                    <div className="inner-book__stat">
                      <div className="inner-book__stat__icon"><FaRegStar/></div>
                      <div className="inner-book__stat__label">{book.averageRating} ({book.totalRating} ratings)</div>
                    </div>
                    <div className="inner-book__stat">
                      <div className="inner-book__stat__icon"><GoClock/></div>
                      <div className="inner-book__stat__label">5.00</div>
                    </div>
                    <div className="inner-book__stat">
                      <div className="inner-book__stat__icon"><IoMicOutline/></div>
                      <div className="inner-book__stat__label">Audio & Text</div>
                    </div>
                    <div className="inner-book__stat">
                      <div className="inner-book__stat__icon"><HiOutlineLightBulb/></div>
                      <div className="inner-book__stat__label">{book.keyIdeas} Key ideas</div>
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
                  <div className="inner-book__description">
                    <div className="inner-book__description__title"></div>
                    <div className="inner-book__description__tags">
                      <div className="inner-book__description__tag"></div>
                      <div className="inner-book__description__tag"></div>
                    </div>
                    <div className="inner-book__description__text"></div>
                    <div className="inner-book__description__author">
                      <div className="inner-book__desciption__title"></div>
                      <div className="inner-book__description__author__text"></div>
                    </div>
                  </div>
                </div>
                <div className="inner-book__image__wrapper">
                  <img src={book.imageLink} alt={`${book.title} cover`} className="inner-book__image" />
                </div>
              </>
            )}
            {!book && (
              <div className="inner-book__loading">
                <p>Loading book details...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
