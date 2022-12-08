import React from "react";
import { format, render, cancel, register } from "timeago.js";

const VideoCard = ({ video }) => {
  return (
    <li>
      <img
        className="w-full"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <h3 className="my-2 line-clamp-2">{video.snippet.title}</h3>
        <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
        <p className="text-sm opacity-80">{format(video.snippet.publishdAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;