import { FaStar } from "react-icons/fa";
import styles from "../reviews.module.css";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <div className="row">
          <div className={styles.reviewHeader}>What our members say</div>
          <div className={styles.reviewWrapper}>
            <div className={styles.review}>
              <div className={styles.reviewDetails}>
                <div className="reviewer">Hanna M.</div>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className={styles.review}>
                This app has been a game-changer for me! It's saved me so much
                time and effort in reading and comprehending books. Highly
                recommend it to all book lovers
              </div>
            </div>
            <div className={styles.review}>
              <div className={styles.reviewDetails}>
                <div className="reviewer">David B.</div>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className={styles.review}>
                I love this app! It provides concise and accurate summaries of
                books in a way that is easy to understand. It's also very
                user-friendly and intuitive.
              </div>
            </div>
            <div className={styles.review}>
              <div className={styles.reviewDetails}>
                <div className="reviewer">Nathan S.</div>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="review">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing. The summaries are
                well-written and informative. Definitely worth downloading
              </div>
            </div>
            <div className="review">
              <div className={styles.reviewDetails}>
                <div className="reviewer">Ryan R.</div>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="review">
                If you're a busy person who loves reading but doesn't have the
                time to read every book in full, this app is for you! The
                summaries are thorough and provide a great overview of the
                book's content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
