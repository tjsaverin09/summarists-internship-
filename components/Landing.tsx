'use client'

import Image from "next/image";
import LandingImg from "../public/landing.png";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/loginModalSlice";
import styles from "../CssModules/landing.module.css";

export default function Landing() {

  
  const dispatch = useDispatch()

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
              <button className={`btn ${styles.landingBtn}`} onClick={() => dispatch(openModal())}>Login</button>
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
