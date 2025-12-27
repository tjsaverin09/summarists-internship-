"use client";

import { useGetBooksQuery } from "@/redux/allBookApiSlice";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

interface Book {
  id: string;
  title: string;
  summary: string;
}

export default function player() {
  const { data: allBooks } = useGetBooksQuery()
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookId, setBookId] = useState<string | string[]>('');
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if(params?.id){
        const id = params.id;
        setBookId(id);
    }
  }, [params])

  async function getBook() {
    if (!bookId) return;

    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`
      );
      setBook(data);
      console.log(data);
    } catch (err) {
      console.log("Error fetching Api data");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if(bookId) {
        getBook();
    }
  }, [bookId])

  return (
    <div className="player">
      <div className="container">
        <div className="row">
            <div className="book-content">
            {book && (
                <>
                <div className="book-title">
                 {book.title}
                </div>
                <div className="book-summary">
                    {book.summary}
                </div>
                </>
            )}{
                isLoading && (
                    <div className="inner-book__loading">
                        <p>Book COntrnt loading ho</p>
                    </div>
                )
            }
            </div>
        </div>
      </div>
    </div>
  );
}
