"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBookOpenText } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
  subTitle?: string;
  imageLink?: string;
  averageRating?: number;
  totalRating?: number;
  keyIdeas?: number;
  tags?: string;
  bookDescription?: string;
  authorDescription?: string;
  // Add other book properties as needed
}

export default function BookPage() {
  const params = useParams();
  const [bookId, setBookId] = useState<string | string[]>('');
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params?.id) {
      const id = params.id;
      setBookId(id);
    }
  }, [params]);

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

    useEffect(() => {
    if (bookId) {
      getBooks();
    }
  }, [bookId]);

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
                      <Link href={`/player/${book?.id}`}>
                        <button className="user-option__btn" onClick={() => {`/player/${book?.id}`}}>
                        <div className="user-option__icon">
                          <LuBookOpenText />
                        </div>
                        <div className="user-option__label">
                          Read
                        </div>
                      </button>
                      </Link>
                      <Link href={`/player/${book?.id}`}>
                      <button className="user-option__btn ">
                        <div className="user-option__icon">
                          <IoMicOutline />
                        </div>
                        <div className="user-option__label">
                          Listen
                        </div>
                      </button>

                      </Link>
                    </div>
                    <div className="user-option__bookmark">
                      <div className="user-option__bookmark__icon"><CiBookmark /></div>
                      <div className="user-option__bookmark__label"> Add title to My Library</div>
                    </div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__description__title section-header">What's it about?</div>
                    <div className="inner-book__description__tags">
                      <div className="inner-book__description__tag">
                      {book.tags}
                      </div>
                    </div>
                    <div className="inner-book__description__text">{book.bookDescription}</div>
                    <div className="inner-book__description__author">
                      <div className="inner-book__desciption__author__title section-header">About the author</div>
                      <div className="inner-book__description__author__text">{book.authorDescription}</div>
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
