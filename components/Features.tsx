import styles from "../CssModules/features.module.css";
import { AiFillFileText } from "react-icons/ai";
import { MdLightbulb } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="sectionHeader">
            Understand books in few a minutes
          </div>
          <div className={styles.featuresWrapper}>
            <div className={styles.features}>
              <div className={styles.featureIcon}>
                <AiFillFileText />
              </div>
              <div className={styles.featureTitle}>Read or Listen</div>
              <div className={styles.featureSubtitle}>
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.featureIcon}>
                <MdLightbulb />
              </div>
              <div className={styles.featureTitle}>Find your next read</div>
              <div className={styles.featureSubtitle}>
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.featureIcon}>
                <FaMicrophone />
              </div>
              <div className={styles.featureTitle}>Briefcasts</div>
              <div className={styles.featureSubtitle}>
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          
            <div className={styles.statisticsWrapper}>
              <div className={styles.statisticHeadings}>
                <div className={styles.statisticHeader}>Enhance your knowledge</div>
                <div className={styles.statisticHeader}>Achieve greater success</div>
                <div className={styles.statisticHeader}>Improve your health</div>
                <div className={styles.statisticHeader}>
                  Develop better parenting skills
                </div>
                <div className={styles.statisticHeader}>Increase happiness</div>
                <div className={styles.statisticHeader}>
                  Be the best version of yourself!
                </div>
              </div>
              <div className={styles.statisticDetails}>
                <div className={styles.statisticData}>
                  <div className={styles.statFigure}>93%</div>
                  <div className={styles.statTitle}>
                    of Summarist members <b>significantly increase</b> reading
                    frequency.
                  </div>
                </div>
                <div className={styles.statisticData}>
                  <div className={styles.statFigure}>96%</div>
                  <div className={styles.statTitle}>
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className={styles.statisticData}>
                  <div className={styles.statFigure}>90%</div>
                  <div className={styles.statTitle}>
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.statisticsWrapper2}>
              <div className={styles.statisticHeadings}>
                <div className={styles.statisticHeader}>Expand your learning</div>
                <div className={styles.statisticHeader}>Accomplish your goals</div>
                <div className={styles.statisticHeader}>Strengthen your vitality</div>
                <div className={styles.statisticHeader}>Become a better caregiver</div>
                <div className={styles.statisticHeader}>Improve your mood</div>
                <div className={styles.statisticHeader}>Maximize your abilities</div>
              </div>
              <div className={styles.statisticDetails}>
                <div className={styles.statisticData}>
                  <div className={styles.statFigure}>91%</div>
                  <div className={styles.statTitle}>
                    of Summarist members <b>report feeling more productive</b> after
                    incorporating the service into their daily routine.
                  </div>
                </div>
                <div className={styles.statisticData}>
                  <div className={styles.statFigure}>94%</div>
                  <div className={styles.statTitle}>
                    of Summarist members have <b>noticed an improvement</b> in their
                    overall comprehension and retention of information.
                  </div>
                </div>
                <div className={styles.statisticData}>
                  <div className={styles.statFigure}>88%</div>
                  <div className={styles.statTitle}>
                    of Summarist members <b> feel more informed about</b> current events
                    and industry trends since using the platform.
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
