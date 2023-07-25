import React, { useEffect, useRef, useState } from "react";
import "./Message.css";
import { Avatar } from "@mui/material";
import { useStateValue } from "./StateProvider";

const Message = ({ message, timestamp, profilePic, userName }) => {
  const [{ user }, dispatch] = useStateValue();
  const [date, setDate] = useState("");

  // used here to ensure smooth scrolling
  const ref = useRef();

  useEffect(() => {
    setDate(
      new Date(timestamp?.toDate()).toTimeString().substring(0, 5) +
        " - " +
        new Date(timestamp?.toDate()).toDateString().substring(3)
    );
  }, [timestamp]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      {user.displayName === userName ? (
        <div ref={ref} className="message__box message__box__user">
          <div className="message__main">
            <div className="name message__name">
              <p>{userName}</p>
            </div>
            <div className="message message__user">
              <p>{message}</p>
            </div>
            <div className="time time__user">
              <p>{date}</p>
            </div>
          </div>

          <div className="photo">
            <Avatar src={profilePic} className="avatar" />
          </div>
        </div>
      ) : (
        <div ref={ref} className="message__box">
          <div className="photo">
            <Avatar src={profilePic} className="avatar" />
          </div>

          <div className="message__main">
            <div className="name">
              <p>{userName}</p>
            </div>
            <div className="message">
              <p>{message}</p>
            </div>
            <div className="time">
              <p>{date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
