"use client";

import styles from "@/components/modals/loginModal/loginModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import googleLogo from "@/public/google.png";
import Image from "next/image";
import { openModal } from "@/redux/loginModalSlice";
import { closeSignupModal } from "@/redux/signupModalSlice";

interface RootState {
  signupModal: {
    isOpen: boolean;
  };
}

export default function SignupModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.signupModal.isOpen);

    const handleSwitchToLogin = () => {
        dispatch(closeSignupModal());
        dispatch(openModal())
    }

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => dispatch(closeSignupModal())}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtn} onClick={() => dispatch(closeSignupModal())}>
          <IoCloseOutline />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>Sign up to Summarist</div>
          <div className={`btn ${styles.modalGoogleBtn} ${styles.modalBtn}`}>
            <div
              className={`${styles.googleIconWrapper} ${styles.modalBtnIcon}`}
            >
              <Image
                src={googleLogo}
                alt="Google logo"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.ModalBtnLabel}>Sign up with Google</div>
          </div>
          <div className={styles.modalBreak}>
            <span>or</span>
          </div>
          <form action="" className={styles.modalMainForm}>
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
          </form>
          <button className="btn">Sign up</button>
        </div>
        <button className={styles.newAccountBtn} onClick={() => handleSwitchToLogin()}>
          Already have an account?
        </button>
      </div>
    </div>
  );
}
