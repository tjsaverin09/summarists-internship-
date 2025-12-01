'use client'

import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from "next/link";


export default function RecommendedBooks() {
    const { data: recBooksArray} = useGetRecBooksQuery()

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            mode: "free-snap",
            slides: {
                perView: 5,
                spacing: 20,
            },
            breakpoints: {
                '(max-width: 768px)' : {
                    slides: { perView: 2, spacing: 10 }
                }
            },
            slideChanged() {
                console.log('slide changed')
            },
        }
    )

    return (
        <div className="recBooks">
            <div className="foryou__header">Recommended For You</div>
            <div className="foryou__subtitle">We think you'll like these</div>
            <div ref={sliderRef} className="bookList keen-slider">
              {recBooksArray?.map((books) => (
                <Link href="/book" key={books.id}>
                <div  className="book keen-slider__slide">
                <div className="bookImageWrapper">
                  <img src={books.imageLink} alt={books.title} className="bookImage" />
                </div>
                <div className="bookName">
                  {books.title}
                </div>
                <div className="bookAuthor">{books.author}</div>
                <div className="bookDescription">
                  {books.subTitle}
                </div>
                <div className="extraDetails">
                  <div className="bookLength"></div>
                  <div className="bookRating">{books.averageRating}</div>
                </div>
              </div>
              </Link>
              ))}
              
            </div>
          </div>
    )
}