import React, { useEffect, useState } from "react";
import "./Messenger.css";
import { Send } from "@mui/icons-material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";
import Message from "./Message";

const Messenger = () => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [input, setInput] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [{ user }, dispatch] = useStateValue();

  const setText = () => {
    document.getElementById(
      "MyDiv"
    ).innerHTML = `Hi Everyone! I am ${user.displayName}`;
    setMessage(`Hi Everyone! I am ${user.displayName}`);
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setInput(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  useEffect(() => {
    !message ? setIsDisabled(true) : setIsDisabled(false);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
    });

    setMessage("");

    // To change the text of the div to empty string
    document.getElementById("MyDiv").innerHTML = "";
    // TO focus on input text after submitting and removing prev. text
    document.getElementById("MyDiv").focus();
  };

  // To make it fullscreen
  const fullScreen = () => {
    if (!document.fullscreenElement) {
      document.querySelector(".messenger").requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  // To check for change in fullscreen event as user can exit fullscreen by escape key and in that
  // case, fullScreen() func. will not be triggered as it is triggered only by pressing the button
  useEffect(() => {
    function onFullscreenChange() {
      setIsFullScreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return (
    <div className="messenger">
      <div className="messenger__header">
        <div className="header__left">
          <img
            src="https://th.bing.com/th/id/OIP.IvKg5LLZMuCEtsdHr370_QHaD8?w=282&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
            alt="Logo"
          />
          <h3>Messenger</h3>
        </div>
        <div className="header__right">
          <p>Group Chat</p>
        </div>
      </div>

      <div className="messenger__body">
        <div className="body__header">
          <div className="body__image">
            <img
              src="https://th.bing.com/th/id/OIP.IvKg5LLZMuCEtsdHr370_QHaD8?w=282&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
              alt="Logo"
            />
          </div>
          <div className="body__heading">
            <h2>Messenger</h2>
          </div>
          <div className="body__text">
            <p>Kindly keep the chat clean!</p>
            <button
              onClick={setText}
            >{`Say "Hi Everyone! I am ${user.displayName}"`}</button>
          </div>
        </div>

        {input.map((data) => (
          <Message
            key={data.id}
            message={data.data.message}
            timestamp={data.data.timestamp}
            profilePic={data.data.profilePic}
            userName={data.data.userName}
          />
        ))}
      </div>

      <div className="messenger__input">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* div has been used to move it vertically when new line (shift + enter) is added, which cannot be
        done using input */}
          <div
            id="MyDiv"
            contentEditable="true"
            onInput={(e) => setMessage(e.currentTarget.textContent)}
            data-text={`Enter your message, ${user.displayName}`}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="true"
            aria-expanded="false"
            aria-multiline="true"
            aria-label="Message"
            aria-autocomplete="list"
            dir="auto"
            autoFocus
          ></div>
          <button disabled={isDisabled}>
            <Send />
          </button>
        </form>
        <div className="btn">
          <button onClick={fullScreen}>
            {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
