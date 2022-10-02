import React, { Fragment } from "react";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <Fragment>
      <div className={styles.backgroundContainer} />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Main;
