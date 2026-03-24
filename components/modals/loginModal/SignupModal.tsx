"use client";

import styles from "@/components/modals/loginModal/loginModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import googleLogo from "@/public/google.png";
import Image from "next/image";
import { openModal } from "@/redux/loginModalSlice";
import { closeSignupModal } from "@/redux/signupModalSlice";
import { auth } from "@/app/firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface RootState {
  signupModal: {
    isOpen: boolean;
  };
}

export default function SignupModal() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.signupModal.isOpen);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitchToLogin = () => {
    dispatch(closeSignupModal());
    dispatch(openModal());
  };

  if (!isOpen) return null;

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      dispatch(closeSignupModal());
      router.push("/for-you")
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={styles.modalOverlay}
        onClick={() => dispatch(closeSignupModal())}
      >
        <div
          className={styles.modalWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={styles.closeBtn}
            onClick={() => dispatch(closeSignupModal())}
          >
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
            <form onSubmit={signUp} className={styles.modalMainForm}>
              <input
                placeholder="Email Address"
                type="email"
                className={styles.formBox}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                placeholder="Password"
                type="password"
                className={styles.formBox}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
              <button className="btn" type="submit">
                Sign up
              </button>
            </form>
          </div>
          <button
            className={styles.modalBottomBtn}
            onClick={() => handleSwitchToLogin()}
          >
            Already have an account?
          </button>
        </div>
      </div>
    </>
  );
}
