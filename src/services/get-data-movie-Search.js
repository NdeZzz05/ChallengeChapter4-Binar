import http from "../utils/http";

const fetchDataSearch = async (query) => {
  const { data } = await http.get(`3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
  return data;
};

export { fetchDataSearch };
