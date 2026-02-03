"use client";

import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import Link from "next/link";

export default function RecommendedBooks() {
  const { data: recBooksArray } = useGetRecBooksQuery();
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
if (!recBooksArray || recBooksArray.length === 0) return;

    swiperRef.current = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      direction: "horizontal",
    });

    return () => {
      swiperRef.current?.destroy();
    };
  }, [recBooksArray]);

  return (
    <div className="recBooks">
      <div className="foryou__header">Recommended For You</div>
      <div className="foryou__subtitle">We think you'll like these</div>
      <div className="bookList swiper">
        {recBooksArray?.map((books) => (
          <div className="swiper-wrapper">
            <Link href={`book/${books?.id || "no-id"}`} key={books.id}>
              <div className="book swiper-slide">
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
          </div>
        ))}
      </div>
    </div>
  );
}
