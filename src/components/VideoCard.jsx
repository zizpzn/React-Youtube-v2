import React from "react";
import { format, render, cancel, register } from "timeago.js";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, type }) => {
  const navigate = useNavigate();
  const isList = type === "list";

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video: video } });
  };

  return (
    <li className={isList ? "flex gap-1 m-2" : ""} onClick={handleClick}>
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <h3 className="my-2 line-clamp-2">{video.snippet.title}</h3>
        <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
        <p className="text-sm opacity-80">
          {format(video.snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
};

export default VideoCard;
