import Image from "next/image";
import LandingImg from "../public/landing.png";
import styles from "../landing.module.css";

export default function Landing() {
  return (
      <div className="container">
        <div className="row">
          <div className={styles.landingWrapper}>
            <div className={styles.landingIntro}>
              <h1 className={styles.landingHeader}>
                Gain more knowledge <br/> in less time
              </h1>
              <div className={styles.landingPara}>
                Great summaries for busy people, <br/> individuals who barely have
                time to read, <br/> and even people who don't like to read.
              </div>
              <button className={`btn ${styles.landingBtn}`}>Login</button>
            </div>
            <div className={styles.landingImgWrapper}>
              <Image
                src={LandingImg}
                alt="Landing Illustration"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
