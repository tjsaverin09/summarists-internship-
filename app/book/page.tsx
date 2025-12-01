export default function page() {
  return (
    <div className="book-page">
      <div className="container">
        <div className="row">
          <div className="book">
            <div className="book-detail">
              <div className="book-title"></div>
              <div className="book-author"></div>
              <div className="book-subtitle"></div>
            </div>
            <div className="book-stats">
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
              <div className="book-stat">
                <div className="book-stat__icon"></div>
                <div className="book-stat__label"></div>
              </div>
            </div>
            <div className="user-options">
              <div className="user-option__btns">
                <button className="user-option"></button>
                <button className="user-option"></button>
              </div>
              <div className="user-option__bookmark">
                <div className="user-option__bookmark__icon"></div>
                <div className="user-option__bookmark__label"></div>
              </div>
            </div>
            <div className="book-description">
              <div className="book-description__title"></div>
              <div className="book-description__tags">
                <div className="book-description__tag"></div>
                <div className="book-description__tag"></div>
              </div>
              <div className="book-description__text"></div>
              <div className="book-description__author">
                <div className="book-desciption__title"></div>
                <div className="book-description__author__text"></div>
              </div>
            </div>
          </div>
          <div className="book-image__wrapper">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
