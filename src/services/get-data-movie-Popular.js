import http from "../utils/http";

const fetchDataPopular = async () => {
  const { data } = await http.get(`3/movie/popular?language=en-US&page=1`);
  return data;
};

export { fetchDataPopular };
