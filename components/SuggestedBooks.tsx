"use client";

import { useGetSugBooksQuery } from "@/redux/sugBooksApiSlice";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

export default function SuggestedBooks() {
  const { data: sugBooksArray } = useGetSugBooksQuery();

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slideChanged() {
      console.log("slide changed");
    },
    created() {
      console.log('suggestedBooks slider created!')
    }
  });

  return (
    <div className="suggestedBooksWrapper">
      <div className="foryou__header">Suggested Books</div>
      <div className="foryou__subtitle">Browse those books</div>
      <div ref={sliderRef} className="bookList keen-slider">
        {sugBooksArray?.map((books) => (
          <Link href="/book" key={books.id}>
          <div  className="book keen-slide__slider">
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
    </div>
  );
}
