import React, { Fragment } from "react";
import styles from "./JobCard.module.css";
import Button from "../../../utils/Button/Button";

const JobCard = (props) => {
  const {
    id,
    companyImage,
    companyName,
    companyMoto,
    companySize,
    role,
    postedDate,
    location,
    salary,
    saved,
    applied,
  } = props.item;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.companyInfo}>
        <img src={companyImage} alt="..." className={styles.companyImg} />
        <div className={styles.nameMottoCnt}>
          <span className={styles.companyName}>{companyName}</span>
          <span className={styles.companyMoto}>{companyMoto}</span>
          <span className={styles.companyEmployeesCnt}>
            <i class="fas fa-male"></i> {companySize}
          </span>
        </div>
      </div>
      <div className={styles.jobStatusOuter}>
        <span className={styles.jobStatus}>
          <span className={styles.jobStatusCircle}>
            <i class="fas fa-check"></i>
          </span>
          <span className={styles.jobStatusText}>Actively Hiring</span>
        </span>
      </div>
      <div className={styles.jobDescriptionApplication}>
        <div className={styles.jobDescription}>
          <div className={styles.role}>{role}</div>
          <div className={styles.location}>{location} &nbsp; |</div>
          <div className={styles.salary}>{salary}</div>
        </div>
        <div className={styles.saveApply}>
          <span className={styles.postedDate}>{postedDate}</span>
          <Button
            white
            className={styles.btn}
            onClick={() => props.toggleSaveHandler(id)}
          >
            {saved ? "Remove" : "Save"}
          </Button>
          <Button
            black
            className={styles.btn}
            onClick={() => props.applyHandler(id)}
          >
            {applied ? (
              <Fragment>
                <i className="fas fa-check"></i>
                Applied{" "}
              </Fragment>
            ) : (
              "Apply"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
