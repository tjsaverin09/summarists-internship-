"use client";

import { useAppSelector } from "@/redux/typedHooks";
import { selectSavedBooks } from "@/redux/librarySlice";


export default function library() {
  const savedBooks = useAppSelector(selectSavedBooks) 

  return (
    <div className="library__page">
      <div className="container">
          <div className="book__collection">
            <div className="saved__book--collection">
              <div className="book__collection--details">
                <div className="book__collection--header">Saved Books</div>
                <div className="book__collection--count">{savedBooks.length} items</div>
              </div>
              {savedBooks.length === 0 ? (<div className="book__collection--placeholder">
                <div className="placeholder__header">
                    Save your favorite books!
                </div>
                <div className="placeholder__text">
                    When you save a book, it will appear here.
                </div>
              </div>) : (<div className= "saved__books--list">
                {savedBooks.map((book) => (
                  <div key={book.id} className="saved__book--card">
                    <img src={book.imageLink} alt={book.title} />
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                  </div>
                ))}
              </div>)}
              
            </div>
            <div className="finished__book--collection">
              <div className="book__collection--details">
                <div className="book__collection--header">Finished</div>
                <div className="book__collection--count">0 items</div>
              </div>
              <div className="book__collection--placeholder">
                <div className="placeholder__header">
                    Done and dusted!
                </div>
                <div className="placeholder__text">
                    When you finish a book, you can find it here later.
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
