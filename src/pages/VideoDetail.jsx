import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl font-bold">{video.snippet.title}</h2>
          <ChannelInfo
            id={video.snippet.channelId}
            title={video.snippet.channelTitle}
          />
          <pre className="whitespace-pre-wrap">{video.snippet.description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
