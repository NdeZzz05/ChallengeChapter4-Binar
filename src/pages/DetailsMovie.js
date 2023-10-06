import React, { useEffect, useState } from "react";
import star from "../assets/img/star.png";
import { Navbar } from "../assets/components/Navbar";
import { fetchDataDetails } from "../services/get-data-movie-Details";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchDataVideoDetails } from "../services/get-data-video-Details";

export const DetailsMovie = () => {
  const { id } = useParams();
  const [DetailFilm, setDetailFilm] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const getDataDetails = async (id) => {
    const data = await fetchDataDetails(id);
    setDetailFilm([data]);
  };

  const getDataVideoDetails = async (id) => {
    const data = await fetchDataVideoDetails(id);
    const trailerVideo = data.results.find((video) => video.site === "YouTube" && video.type === "Trailer");
    if (trailerVideo) {
      setTrailerUrl(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getDataDetails(id);
      getDataVideoDetails(id);
    }, 0);
  }, [id]);

  return (
    <>
      <div className="">
        <Navbar />
        {DetailFilm.map((value, index) => {
          return (
            <div className="w-screen h-screen" key={index}>
              <div className="w-screen h-screen flex absolute z-10">
                <div className="w-1/2 flex justify-center items-center">
                  <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" className="w-[17rem] rounded-md " />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                  <h2 className="font-bold text-[2.5rem] text-white mb-[1rem]">{value.original_title}</h2>
                  <h6 className="font-semibold text-white text-[1rem] mb-[1rem]">{value.release_date}</h6>
                  <p className="text-white mb-[1rem] w-[30rem] leading-6">{value.overview}</p>
                  <span className="flex items-center text-white text-[1rem] mb-[1rem]">
                    <img src={star} alt="" className="w-[1rem] h-[1rem] mr-[0.5rem]" /> {Math.round(value.vote_average)}/10
                  </span>
                  <button className="border border-red-700 text-white bg-red-700 font-semibold rounded-full px-[1rem] w-[10rem] h-[2.5rem]">Watch Trailer</button>
                </div>
              </div>
              {/* Gambar Utama di belakang */}
              <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt="" className="w-screen h-screen object-cover" />
              <div className="absolute inset-[-1px] h-100 bg-gradient-to-b from-transparent to-black top-0 transform"></div>
            </div>
          );
        })}
      </div>
      <div className="w-screen bg-black flex flex-col justify-center items-center px-[5rem] pt-[5rem] pb-[2rem]">
        <h2 className="text-white text-[2.5rem] font-bold pb-[3rem]">Movie Trailer</h2>
        <ReactPlayer url={trailerUrl} width="100%" height="40rem" />
      </div>
    </>
  );
};
