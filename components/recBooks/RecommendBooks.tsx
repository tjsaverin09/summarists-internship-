"use client";

import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import Link from "next/link";

export default function RecommendedBooks() {
  const { data: recBooksArray } = useGetRecBooksQuery();

  function loading() {
    return (
      <div className="bookList">
        {new Array(7).fill(0).map((_, id)) => (
          <div className="book skeleton-box" key={id}></div>
        )

        }
      </div>
    )
  }

  return (
    <div className="recBooks">
      <div className="foryou__header">Recommended For You</div>
      <div className="foryou__subtitle">We think you'll like these</div>
      <div className="bookList">
        {recBooksArray?.map((books) => (
            <Link href={`book/${books?.id || "no-id"}`} key={books.id}>
              <div className="book">
                {books.subscriptionRequired && <span className="book__premium--pill">Premium</span>}
                <div className="bookImageWrapper">
                  <img
                    src={books.imageLink}
                    alt={books.title}
                    className="bookImage"
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
    </div>
  );
}
