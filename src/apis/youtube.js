import axios from 'axios';
// Yeah, it should not be public, but I am sharing it with you :)
const KEY = 'AIzaSyBGrClLfReHkdnhyPM9WFWpXLdFHRIkRUI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
