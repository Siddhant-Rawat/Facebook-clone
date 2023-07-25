import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/id/1/200/300"
        profileSrc="https://avatars.githubusercontent.com/u/65856370?v=4"
        title="Siddhant"
      />
      <Story
        image="https://picsum.photos/id/10/200/300"
        profileSrc="https://avatars.githubusercontent.com/u/88492068?v=4"
        title="Sparsh"
      />
      <Story
        image="https://picsum.photos/id/20/200/300"
        profileSrc="https://avatars.githubusercontent.com/u/74758072?v=4"
        title="Aditya"
      />
      <Story
        image="https://picsum.photos/id/40/200/300"
        profileSrc="https://media.licdn.com/dms/image/C5603AQF9pkuQWSk54w/profile-displayphoto-shrink_100_100/0/1644219132575?e=1691625600&v=beta&t=09-wIYZ4T7RUt72YajdXhLJwNJVyH8RETm_-lSayWss"
        title="Shefali"
      />
      <Story
        image="https://picsum.photos/id/50/200/300"
        profileSrc="https://avatars.githubusercontent.com/u/84912943?v=4"
        title="Shrey"
      />
    </div>
  );
};

export default StoryReel;
