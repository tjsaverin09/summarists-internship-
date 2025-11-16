import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf} from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";
import styles from '../numbers.module.css'

export default function Numbers() {
    return (
        <section id="numbers">
            <div className="container">
                <div className="row">
                    <div className="sectionHeader">
                        Start growing with Summarist now
                    </div>
                    <div className={styles.numbersWrapper}>
                        <div className={styles.number}>
                            <div className={styles.numberIcon}>
                                <BiCrown />
                            </div>
                            <div className={styles.numberTitle}>
                                3 Million
                            </div>
                            <div className={styles.numberSubtitle}>
                                Downloads on all platforms
                            </div>
                        </div>
                        <div className={styles.number}>
                            <div className={`${styles.numberIcon} ${styles.numberStarIcon}`}>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div className={styles.numberTitle}>
                                4.5 Stars
                            </div>
                            <div className={styles.numberSubtitle}>
                                Average ratings on iOS and Google Play
                            </div>
                        </div>
                        <div className={styles.number}>
                            <div className={styles.numberIcon}>
                                <RiLeafLine />
                            </div>
                            <div className={styles.numberTitle}>
                                97%
                            </div>
                            <div className={styles.numberSubtitle}>
                                Of Summarists members create better reading habits
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}