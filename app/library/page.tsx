"use client";

export default function library() {
  return (
    <div className="library__page">
      <div className="container">
          <div className="book__collection">
            <div className="saved__book--collection">
              <div className="book__collection--details">
                <div className="book__collection--header">Saved Books</div>
                <div className="book__collection--count">0 items</div>
              </div>
              <div className="book__collection--placeholder">
                <div className="placeholder__header">
                    Save your favorite books!
                </div>
                <div className="placeholder__text">
                    When you save a book, it will appear here.
                </div>
              </div>
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
