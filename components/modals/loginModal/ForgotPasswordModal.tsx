'use client'

import styles from "@/components/modals/loginModal/loginModal.module.css"
import{ useSelector, useDispatch } from "react-redux";
import { closeModal, openModal } from "@/redux/loginModalSlice";
import { openForgotPasswordModal, closeForgotPasswordModal } from "@/redux/forgotPasswordModalSlice";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

interface RootState {
  forgotPasswordModal: {
    isOpen: boolean;
  };
}

export default function ForgotPasswordModal() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const handleSwitchToLogin = () => {
        dispatch(closeForgotPasswordModal());
        dispatch(openModal())
    }

    return (
        <div className={styles.modalOverlay} onClick={() => dispatch(closeForgotPasswordModal())}>
            <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
               <div className={styles.closeButton} onClick={() => dispatch(closeForgotPasswordModal())}>
                <IoCloseOutline />
                </div> 
                <div className="modalContent">
                    <div className="modalTitle">
                    Reset your password
                    </div>
                    <form onSubmit={null}>
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
                <button className="modalBottomBtn" onClick={handleSwitchToLogin}>
                    Go to login
                </button>
            </div>
        </div>
    )
}