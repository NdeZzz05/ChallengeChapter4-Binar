import http from "../utils/http";

const fetchDataPopular = async (Page) => {
  const { data } = await http.get(`3/movie/popular?language=en-US&page=${Page}`);
  return data;
};

export { fetchDataPopular };
