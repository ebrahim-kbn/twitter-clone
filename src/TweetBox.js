import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import prof from "./images/profile.jpg";
import "./TweetBox.css";
import db from "./firebase";
function TweetBox() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        displayName: "Brad Traversy",
        username: "brad.tr",
        verified: true,
        image: imageUrl,
        text: text,
        avatar: "https://source.unsplash.com/BmufR4r8pQ0",
      })
      .then((res) => {
        console.log(res);
        setText("");
        setImageUrl("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src={prof} />
          <input
            type="text"
            placeholder="What's happening?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Enter image URL (Optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
