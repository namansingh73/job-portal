import React from "react";
import styles from "./Notifications.module.css";
import Profile from "./Profile";

const Notifications = () => {
  return (
    <div className={styles.rightNav}>
      <Profile />
      <button className={styles.notificationBtn}>
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};

export default Notifications;
