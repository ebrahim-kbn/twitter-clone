import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import "./Feed.css";
import Post from "./Post";
import bgImage from "./images/bg-image.jpg";
import profile from "./images/profile.jpg";
import db from "./firebase";
import TweetBox from "./TweetBox";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      console.log(snapshot);
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => {};
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove className="flipMove">
        {posts?.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            avatar={post.avatar}
            username={post.username}
            verified={post.verified}
            image={post.image}
            timestamp="4hr"
            text={post.text}
          />
        ))}
      </FlipMove>
      {/* <Post
        displayName="Amin bemani"
        avatar={profile}
        username="Amin.bmn"
        verified
        image={"https://source.unsplash.com/random"}
        timestamp="4hr"
        text="Let's build youtube clone!!"
      />
      <Post
        displayName="ebrahim kbn"
        avatar={profile}
        username="ebikbn"
        verified
        image={"https://source.unsplash.com/BmufR4r8pQ0"}
        timestamp="4hr"
        text="Let's build twitter clone!!"
      /> */}
    </div>
  );
}

export default Feed;
