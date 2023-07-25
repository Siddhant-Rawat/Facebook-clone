import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@mui/icons-material';
import { useStateValue } from './StateProvider';

const Post = ({profilePic, image, userName, timestamp, message}) => {

    const[{ user }, dispatch] = useStateValue();

  return (
    <div className="post">
        <div className="post__top">
            <Avatar src={profilePic} className="post__avatar" />
            <div className="post__topInfo">
                <h3>{userName}</h3>
                <p>{new Date(timestamp?.toDate()).toTimeString()}</p>
            </div>
        </div>

        <div className="post__bottom">
            <p>{message}</p>
        </div>

        {
            image &&
            <div className="post__image">
                <img src={image} alt='' />
            </div>
        }

        <div className="post__options">
            <div className="post__option">
                <ThumbUp />
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutline />
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMe />
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircle />
                <ExpandMoreOutlined />
            </div>
        </div>
    </div>
  );
};

export default Post;
