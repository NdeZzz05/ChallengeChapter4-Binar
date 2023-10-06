import http from "../utils/http";

const fetchDataDetails = async (id) => {
  const { data } = await http.get(`3/movie/${id}?language=en-US`);
  return data;
};

export { fetchDataDetails };
