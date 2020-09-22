import React from "react";
import "./SidebarRow.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarRow({ active, title, Icon }) {
  return (
    <div className={`sidebarRow ${active && "sidebarRow__active"}`}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarRow;
