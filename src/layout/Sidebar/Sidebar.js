import React from "react";
import SidebarList from "./SidebarList";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <aside
      className={`${styles.sidebar} ${
        props.sidebarOpenResponsive && styles.sidebar__opened
      }`}
    >
      <SidebarList />
    </aside>
  );
};

export default Sidebar;
