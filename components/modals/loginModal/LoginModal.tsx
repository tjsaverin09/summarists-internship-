"use client";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@/redux/loginModalSlice";
import { openSignupModal } from "@/redux/signupModalSlice";
import { openForgotPasswordModal } from "@/redux/forgotPasswordModalSlice";
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import googleLogo from "@/public/google.png";
import Image from "next/image";
import styles from "@/components/modals/loginModal/loginModal.module.css";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/app/firebase/init";
import { signInWithPopup, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

interface RootState {
  loginModal: {
    isOpen: boolean;
  };
}

export default function LoginModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.loginModal.isOpen);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGuestLogin = () => {
    dispatch(closeModal());
    router.push("/for-you");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // The signed-in user info
      const user = result.user;
      console.log("Logged in as:", user.displayName);
      
      // You can now redirect the user or update your app state
    } catch (error) {
    if (error instanceof Error) {
      console.error("Authentication error:", error.message);
    } else {
      console.error("Authentication error:", String(error));
    }
  }
  };

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      console.log(userCredential.user);
      dispatch(closeModal());
      router.push("/for-you");
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  const handleForgotPassword = () => {
    dispatch (closeModal());
    dispatch (openForgotPasswordModal());
  }

  const handleSwitchToSignup = () => {
    dispatch(closeModal());
    dispatch(openSignupModal());
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => dispatch(closeModal())}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.closeButton}
          onClick={() => dispatch(closeModal())}
        >
          <IoCloseOutline />
        </div>
        <div className={styles.modalContent}>
          {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
            )}
          <div className={styles.modalTitle}>Log in to Summarist</div>
          <button
            className={`btn ${styles.modalGuestBtn} ${styles.modalBtn}`}
            onClick={handleGuestLogin}
          >
            <div className={styles.modalBtnIcon}>
              <IoPersonOutline />
            </div>
            <div className={`${styles.modalBtnLabel}`}>Login as a Guest</div>
          </button>
          <div className={styles.modalBreak}>
            <span>or</span>
          </div>
          <div className={`btn ${styles.modalGoogleBtn} ${styles.modalBtn}`} onClick={handleGoogleLogin}>
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
            <div className={styles.ModalBtnLabel}>Login with Google</div>
          </div>
          <div className={styles.modalBreak}>
            <span>or</span>
          </div>
          <form onSubmit={logIn} className={styles.modalMainForm}>
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
              required
            />
            
            <button className="btn" type="submit">
              <span>Login</span>
            </button>
          </form>
        </div>

        <button className={styles.forgotPassword} onClick={handleForgotPassword}>Forgot your password?</button>
        <button className={styles.modalBottomBtn} onClick={handleSwitchToSignup}>
          Don't have an account?
        </button>
      </div>
    </div>
  );
}
