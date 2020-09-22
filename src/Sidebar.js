import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";
import TwitterIcon from "@material-ui/icons/Twitter";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SearchIcon from "@material-ui/icons/Search";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Button } from "@material-ui/core";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarRow active Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={SearchIcon} title="Explorer" />
      <SidebarRow Icon={NotificationsNoneIcon} title="Notifications" />
      <SidebarRow Icon={MailOutlineIcon} title="Messages" />

      <SidebarRow Icon={BookmarkBorderIcon} title="Bookmarks" />
      <SidebarRow Icon={ListAltIcon} title="Lists" />
      <SidebarRow Icon={PermIdentityIcon} title="Profile" />
      <SidebarRow Icon={MoreHorizIcon} title="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
