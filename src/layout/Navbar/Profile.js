import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.half}>
        <label for="profile2" className={styles.profileDropdown}>
          <input type="checkbox" id="profile2" />
          <img
            src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"
            alt="profile"
          />
          <span className={styles.dropdownName}>John Doe</span>
          <label for="profile2">
            <i className="fas fa-bars"></i>
          </label>
          <ul>
            <li>
              <a href="/">
                <i className="far fa-envelope"></i>Messages
              </a>
            </li>
            <li>
              <a href="/">
                <i className="far fa-user"></i>Account
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fas fa-sliders-h"></i>Settings
              </a>
            </li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default Profile;
