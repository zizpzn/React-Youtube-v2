import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  return (
    <section>
      <article>
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
          <ChannelInfo
            id={video.snippet.channelId}
            title={video.snippet.channerTitle}
          />
          <pre>{video.snippet.description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
