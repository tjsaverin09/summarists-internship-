return (
    <>
    <div className="bookList">
          {recBooksArray?.map((books) => (
            <Link href={`book/${books?.id || "no-id"}`} key={books.id}>
              <div className="book">
                {books.subscriptionRequired && (
                  <span className="book__premium--pill">Premium</span>
                )}
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
    </>
    
)