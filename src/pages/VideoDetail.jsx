import React from "react";
import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  return (
    <section>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      ></iframe>
      <div>
        <h2>{video.snippet.title}</h2>
        <ChannelInfo id={video.channelId} title={video.channerTitle} />
      </div>
    </section>
  );
};

export default VideoDetail;
