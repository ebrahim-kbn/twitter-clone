import React, { forwardRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
// import prof from "./images/profile.jpg";
// import bgImage from "./images/bg-image.jpg";

import "./Post.css";

const Post = forwardRef(
  (
    { displayName, avatar, username, verified, image, timestamp, text },
    ref
  ) => {
    return (
      <div ref={ref} className="post">
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerTexe">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>{" "}
              </h3>
            </div>
          </div>

          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} alt="" />

          <div className="post__footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
