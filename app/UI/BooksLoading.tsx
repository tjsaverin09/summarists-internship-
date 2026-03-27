export default function BooksLoading() {
        return (
      <div className="bookList">
        {new Array(7).fill(0).map((_, id) => (
          <div className='book' key={id}>
            <div className="bookImageWrapper ">
              <div className="skeleton-box"></div>
              <div className="skeleton__img--test"></div>
            </div>
            <div className="bookName">
              <div className="title__skeleton"></div>
            </div>
            <div className="bookDescription ">
              <div className="descr__skeleton"></div>
            </div>
            <div className="extraDetails">
                <div className="detail__skeleton"></div>
            </div>
          </div>
        ))}
      </div>
    );
}