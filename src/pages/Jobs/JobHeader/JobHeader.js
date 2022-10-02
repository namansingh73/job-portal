import React from "react";
import styles from "./JobHeader.module.css";

const JobHeader = (props) => {
  return (
    <div className={styles.topHeader}>
      <h1>Search for jobs</h1>
      <div className={styles.browseSection}>
        <button
          className={`${styles.browseSaved} ${
            !props.showSaved && styles.browseSaved__Active
          }`}
          onClick={() => props.setShowSaved(false)}
        >
          Browse All
        </button>
        <button
          className={`${styles.browseSaved} ${
            props.showSaved && styles.browseSaved__Active
          }`}
          onClick={() => props.setShowSaved(true)}
        >
          Saved
        </button>
      </div>
    </div>
  );
};

export default JobHeader;
