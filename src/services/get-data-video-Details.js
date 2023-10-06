import http from "../utils/http";

const fetchDataVideoDetails = async (id) => {
  const { data } = await http.get(`3/movie/${id}/videos?language=en-US`);
  return data;
};

export { fetchDataVideoDetails };
