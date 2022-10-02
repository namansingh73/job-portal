import React from "react";
import styles from "./AppliedJobCard.module.css";
import Logo from "./companyIcon.jpeg";
import Button from "../../../utils/Button/Button";
const JobCard = (props) => {
  const { companyName, role, appliedDate, status } = props.item;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.companyInfo}>
        <img src={Logo} alt="..." className={styles.companyImg} />
        <div className={styles.nameMottoCnt}>
          <span className={styles.companyName}>{companyName}</span>
          <span className={styles.companyMoto}>{role}</span>
          <div className={styles.companyEmployeesCnt}>
            <div
              className={`${
                status === "Pending" ? styles.orange : styles.green
              } ${styles.statusDot}`}
            ></div>
            <span className={styles.jobStatus}>{status}</span> {appliedDate}
          </div>
        </div>
      </div>
      {status === "Accepted" && (
        <Button black className={styles.btn}>
          <i className="fas fa-comment-dots"></i> Schedule Interview
        </Button>
      )}
    </div>
  );
};

export default JobCard;
