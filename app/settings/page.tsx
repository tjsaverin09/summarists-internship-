'use client'

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  useState, useEffect} from 'react';

export default function settings() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser !== null) {
    currentUser.providerData.forEach((profile) =>{
      console.log(" Email: " + profile.email);
    });
  }
    });
    
    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in</div>;
  }

  return (
    <div className="container">  
        <div className="settings__wrapper">
          <div className="settings__header">Settings</div>
          <div className="section__break"></div>
          <div className="settings__text">
            <div className="settings__title">Your Subscription plan</div>
            <div className="settings__user--info">premium-plus</div>
          </div>
          <div className="section__break"></div>
          <div className="settings__text">
            <div className="settings__title">Email</div>
            <div className="settings__user--info">{user.email}</div>
          </div>
        </div>
    </div>
  );
}
