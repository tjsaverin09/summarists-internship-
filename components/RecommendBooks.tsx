import styles from '@/CssModules/recommendedBooks.module.css'
import { useGetRecBooksQuery } from "@/redux/recBooksApiSlice";

export default function RecommendedBooks() {
    const { data: recBooksArray} = useGetRecBooksQuery()

    return (
        <div className="recBooks">
            <div className="foryou__header">Recommended For You</div>
            <div className="foryou__subtitle">We think you'll like these</div>
            <div className={styles.recBookList}>
              {recBooksArray?.map((books) => (
                <div key={books.id} className={styles.recBook}>
                <div className="recBookImageWrapper">
                  <img src={books.imageLink} alt={books.title} className="recBookImage" />
                </div>
                <div className="recBookName">
                  {books.title}
                </div>
                <div className="recBookAuthor">{books.author}</div>
                <div className="recBookDescription">
                  {books.subTitle}
                </div>
                <div className="extraDetails">
                  <div className="bookLength"></div>
                  <div className="bookRating">{books.averageRating}</div>
                </div>
              </div>
              ))}
              
            </div>
          </div>
    )
}