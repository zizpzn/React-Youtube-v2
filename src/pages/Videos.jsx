import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import Youtube from "../api/youtube";

const Videos = () => {
  const { keyword } = useParams();
  // const [videos, setVideos] = useState([]);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword);
    },
  });

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setVideos(result.items))
  //     .catch((error) => console.log("error", error));
  // }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred: {error.message}</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
          {videos.map((item) => (
            <VideoCard key={item.id} video={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
