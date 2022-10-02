import React, { useState } from "react";
import JobHeader from "./JobHeader/JobHeader";
import JobCard from "./JobCard/JobCard";
import styles from "./Jobs.module.css";

const Jobs = (props) => {
  const jobs = props.jobs;
  const [showSaved, setShowSaved] = useState(false);

  const jobsToShow = showSaved ? jobs.filter((job) => job.saved) : jobs;

  return (
    <div className={styles.jobSection}>
      <JobHeader showSaved={showSaved} setShowSaved={setShowSaved} />
      {jobsToShow.length === 0 && (
        <p className={styles.nothing}>Nothing to show!</p>
      )}
      {jobsToShow.map((item) => {
        return (
          <JobCard
            key={item.id}
            item={item}
            toggleSaveHandler={props.toggleSaveHandler}
            applyHandler={props.applyHandler}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
