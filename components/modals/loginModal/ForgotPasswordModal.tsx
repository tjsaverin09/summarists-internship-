'use client'

import styles from "@/components/modals/loginModal/loginModal.module.css"
import{ useSelector, useDispatch } from "react-redux";
import { closeModal, openModal } from "@/redux/loginModalSlice";
import { openForgotPasswordModal, closeForgotPasswordModal } from "@/redux/forgotPasswordModalSlice";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

interface RootState {
  forgotPasswordModal: {
    isOpen: boolean;
  };
}

export default function ForgotPasswordModal() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.forgotPasswordModal.isOpen)
    const [email, setEmail] = useState("");

    const resetPassword = async (e: React.FormEvent<HTMLFormatElement>) => {
        e.preventDefault();
       const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            return "Password reset email sent!"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        }) 
    }

    


    const handleSwitchToLogin = () => {
        dispatch(closeForgotPasswordModal());
        dispatch(openModal());
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={() => dispatch(closeForgotPasswordModal())}>
            <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
               <div className={styles.closeButton} onClick={() => dispatch(closeForgotPasswordModal())}>
                <IoCloseOutline />
                </div> 
                <div className={styles.modalContent}>
                    <div className={styles.modalTitle}>
                    Reset your password
                    </div>
                    <form onSubmit={resetPassword} className={styles.modalMainForm}>
                        <input
                        placeholder="Email Address" 
                        type="email"
                        className={styles.formBox}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        />
                        <button className="btn" type="submit">
                            Send reset password link
                        </button>
                    </form>
                </div>
                <button className={styles.modalBottomBtn} onClick={handleSwitchToLogin}>
                    Go to login
                </button>
            </div>
        </div>
    )
}