import React from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";
import Youtube from "../api/youtube";

const RelatedVideos = ({ id }) => {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.relatedVideos(id);
    },
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;
