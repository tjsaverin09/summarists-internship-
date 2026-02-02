"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";
import { useGetSugBooksQuery } from "@/redux/sugBooksApiSlice";
import { useGetSingleBookQuery } from "@/redux/selectedBookApiSlice";

export default function TrackInfo() {
  const params = useParams();
  const [bookId, setBookId] = useState<string | null>(null);

  useEffect(() => {
    if (params?.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      setBookId(id);
    }
  }, [params]);

  const { data: recBooks } = useGetRecBooksQuery();
  const { data: sugBooks } = useGetSugBooksQuery();
  const { data: selectedBook } = useGetSingleBookQuery();

  // Combine all books from different sources
  const combinedBooks = [
    ...(recBooks || []),
    ...(sugBooks || []),
    ...(selectedBook ? [selectedBook] : []),
  ];
  const book = combinedBooks.find((b) => b.id === bookId);
  console.log("Found book:", book);

  // Show loading state

  // Show error state

  return (
    <div className="track-info">
      <div className="track-info__img--wrapper">
        <img
          className="track-info__img"
          src={book?.imageLink || "/placeholder.jpg"}
          alt={book?.title}
        />
      </div>
      <div className="track-info__details--wrapper">
        <div className="track-info__title">{book?.title || "Book title"}</div>
        <div className="track-info__author">
          {book?.author || "Book author"}
        </div>
      </div>
    </div>
  );
}
