import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarList.module.css";

function SidebarList() {
  return (
    <ul className={styles.sidebarList}>
      <li className={styles.sidebarListItem}>
        <NavLink
          to="#"
          className={({ isActive }) => `${styles.sidebarListLink}`}
        >
          <span className={styles.sidebarListIcon}>
            <i className="fas fa-user-graduate"></i>
          </span>
          <span className={styles.sidebarListName}>Profile</span>
        </NavLink>
      </li>
      <li className={styles.sidebarListItem}>
        <NavLink
          to="/"
          className={({ isActive }) => `${styles.sidebarListLink}`}
        >
          <span className={styles.sidebarListIcon}>
            <i className="fas fa-home" />
          </span>
          <span className={styles.sidebarListName}>Home</span>
        </NavLink>
      </li>
      <li className={styles.sidebarListItem}>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `${styles.sidebarListLink} ${
              isActive ? styles.sidebarListLink__active : ""
            }`
          }
        >
          <span className={styles.sidebarListIcon}>
            <i className="fas fa-user-md"></i>
          </span>
          <span className={styles.sidebarListName}>Jobs</span>
        </NavLink>
      </li>
      <li className={styles.sidebarListItem}>
        <NavLink
          to="/applied"
          className={({ isActive }) =>
            `${styles.sidebarListLink} ${
              isActive ? styles.sidebarListLink__active : ""
            }`
          }
          rel="noreferrer"
        >
          <span className={styles.sidebarListIcon}>
            <i class="fas fa-sign-in-alt"></i>
          </span>
          <span className={styles.sidebarListName}>Applied</span>
        </NavLink>
      </li>
      <li className={styles.sidebarListItem}>
        <a
          href="https://github.com/namansingh73/job-portal"
          className={styles.sidebarListLink}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.sidebarListIcon}>
            <i class="fas fa-comments"></i>
          </span>
          <span className={styles.sidebarListName}>Messages</span>
        </a>
      </li>
    </ul>
  );
}

export default SidebarList;
