import axios from "axios";

const KEY = "AIzaSyDwiGOLHxXfFduSVgiinn8cFU46fhAmzW4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
