"use client";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@/redux/loginModalSlice";
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import googleLogo from "../public/google.png";
import Image from "next/image";
import styles from "../loginModal.module.css";

export default function LoginModal() {
  const dispatch = useDispatch();

  return (
    <div className={styles.modalOverlay} onClick={() => dispatch(closeModal())}>
      <div className={styles.modalWrapper}>
        <div className={styles.closeButton}>
          <IoCloseOutline />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>Log in to Summarist</div>
          <button className={`btn ${styles.modalGuestBtn} ${styles.modalBtn}`}>
            <div className={styles.modalBtnIcon}>
              <IoPersonOutline />
            </div>
            <div className={`${styles.modalBtnLabel}`}>Login as a Guest</div>
          </button>
          <div className={styles.modalBreak}>
            <span>or</span>
          </div>
          <div className={`btn ${styles.modalGoogleBtn} ${styles.modalBtn}`}>
            <div className={`${styles.googleIconWrapper} ${styles.modalBtnIcon}`}>
              <Image
                src={googleLogo}
                alt="Google logo"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.ModalBtnLabel}>Login with Google</div>
          </div>
          <div className={styles.modalBreak}>
            <span>or</span>
          </div>
          <form className={styles.modalMainForm}>
            <input
              placeholder="Email Address"
              type="text"
              className={styles.formBox}
            />
            <input 
            placeholder="Password" 
            type="text" 
            className={styles.formBox} 
            />
            <button className="btn">
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
