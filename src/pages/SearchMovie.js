import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import bgfilm from "../assets/img/bgFilm.jpg";
import { fetchDataSearch } from "../services/get-data-movie-Search";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../assets/components/Footer";

export const SearchMovie = () => {
  const [resultSearch, setResultSearch] = useState([]);
  const navigate = useNavigate();
  const { query } = useParams();

  const getDataSearch = async (query) => {
    const data = await fetchDataSearch(query);
    setResultSearch(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      getDataSearch(query);
    }, 0);
  }, [query]);
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="w-screen h-1/2">
          <div className="w-screen h-1/2 absolute z-10 flex">
            <h2 className="text-white text-[2.5rem] font-bold flex justify-center items-center pl-[6rem]">Search Result "{query}"</h2>
          </div>
          <img src={bgfilm} alt="" className="w-screen h-full object-cover"></img>
          <div className="absolute inset-[1px] h-100 bg-gradient-to-b from-transparent to-black bottom-1/2 transform"></div>
        </div>
        <div className="w-screen bg-black flex flex-wrap">
          {resultSearch.map((value) => {
            return (
              <div className="m-auto w-[15rem] h-[32rem] cursor-pointer" key={value.id} onClick={() => navigate(`/detail/${value.id}`)}>
                <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" className="w-[15rem] m-auto rounded-md hover:scale-105" />
                <div className="pt-[1rem] pl-[0.2rem]">
                  <h6 className="text-white text-[1.2rem] font-semibold">{value.original_title}</h6>
                  <p className="text-white font-thin italic">{value.release_date}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
