import Image from "next/image";
import LandingImg from "../public/landing.png";
import styles from "../landing.module.css"

export default function Landing() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className={styles.landingWrapper}>
            <div className="landingIntro">
              <h1 className="landingHeader">
                Gain more knowledge in less time
              </h1>
              <div className="landingPara">
                Great summaries for busy people, individuals who barely have
                time to read, and even people who don't like to read.
              </div>
              <button className="landingBtn">Login</button>
            </div>
            <div className="landingImg">
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
    </section>
  );
}
