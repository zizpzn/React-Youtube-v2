import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.searchVideoByKeyword(keyword) : this.mostPopular();
  }

  async searchVideoByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 40,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data.items;
      })
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 40,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async relatedVideos(id) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 40,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
