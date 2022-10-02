import React from "react";
import styles from "./Notifications.module.css";
import profilePhoto from "./profile.webp";

const Notifications = () => {
  return (
    <div className={styles.rightNav}>
      <button className={styles.profileBtn}>
        <img src={profilePhoto} alt="Profile" className={styles.profileImage} />
      </button>
      <button className={styles.notificationBtn}>
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};

export default Notifications;
