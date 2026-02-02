'use client'

import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


export default function RecommendedBooks() {
    const { data: recBooksArray} = useGetRecBooksQuery()

  function MultipleItems() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }

    return (
        <div className="recBooks">
            <div className="foryou__header">Recommended For You</div>
            <div className="foryou__subtitle">We think you'll like these</div>
            <div  className="bookList slider-container">
              {recBooksArray?.map((books) => (
                <Slider {...settings}>
                <Link href={`book/${books?.id || "no-id"}`} key={books.id}>
                <div  className="book">
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
              </Slider>
              ))}
              
            </div>
          </div>
    )
}