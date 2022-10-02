import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Search from "./Search";
import Notifications from "./Notifications";

const Navbar = (props) => {
  return (
    <div className={styles.outerNavContainer}>
      <nav className={styles.nav}>
        <Logo
          toggleSidebar={props.toggleSidebar}
          sidebarOpenResponsive={props.sidebarOpenResponsive}
        />
        <Search />
        <Notifications />
      </nav>
    </div>
  );
};

export default Navbar;
