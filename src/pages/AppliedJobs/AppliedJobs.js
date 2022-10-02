import React from "react";
import JobHeader from "./JobHeader/AppliedJobHeader";
import AppliedJobCard from "./JobCard/AppliedJobCard";
import styles from "./AppliedJobs.module.css";

const AppliedJobs = (props) => {
  const jobs = props.jobs.filter((job) => job.applied);
  return (
    <div className={styles.jobSection}>
      <JobHeader />
      {jobs.length === 0 && <p className={styles.nothing}>Nothing to show!</p>}
      {jobs.map((item) => {
        return <AppliedJobCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default AppliedJobs;
