import http from "../utils/http";

const fetchDataNowPlaying = async () => {
  const { data } = await http.get(`/3/movie/now_playing?language=en-US&page=1`);
  return data;
};

export { fetchDataNowPlaying };
