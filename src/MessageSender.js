import React, { useEffect, useState } from "react";
import "./MessageSender.css";
import "./Highlighter.css";
import { Avatar } from "@mui/material";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    !input ? setIsDisabled(true) : setIsDisabled(false);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: imageURL,
    });

    setInput("");
    setImageURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form action="#" onSubmit={handleSubmit}>
          <div className="card">
            <input
              type="text"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messageSender__input"
              placeholder={`What's on your mind, ${user.displayName}`}
              autoFocus
            />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </div>
          <div className="card">
            <input
              placeholder="Image URL (Optional)"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </div>
          <button className="button" type="submit" disabled={isDisabled}>
            Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
