import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import iconstar from "../assets/img/star.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/index.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchDataNowPlaying } from "../services/get-data-movie-NowPlaying";
import { Navbar } from "../assets/components/Navbar";
import { fetchDataPopular } from "../services/get-data-movie-Popular";
import { useNavigate } from "react-router-dom";
import { Footer } from "../assets/components/Footer";

export const HomePage = () => {
  const [LoadData, setLoadData] = useState([]);
  const [Popular, setPopular] = useState([]);
  const navigate = useNavigate();

  const getDataNowPlaying = async () => {
    const data = await fetchDataNowPlaying();
    setLoadData(data.results);
  };

  const getDataPopular = async () => {
    const data = await fetchDataPopular();
    setPopular(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      getDataNowPlaying();
      getDataPopular();
    }, 0);
  }, []);
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="w-screen h-screen">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {LoadData.slice(0, 5).map((value) => {
              return (
                <SwiperSlide key={value.id}>
                  <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt="" className="bgUtama w-screen" />
                  <div className="absolute inset-[-1px] h-100 bg-gradient-to-b from-transparent to-black top-1/2 transform">
                    <h2 className="text-white text-[3rem] font-bold pt-[2rem]">{value.original_title}</h2>
                    <div className="flex justify-center items-center">
                      <p className="text-white w-[40rem] opacity-70 font-extralight">{value.overview}</p>
                    </div>
                    <div className="flex justify-center items-center mr-[0.5rem]">
                      <img src={iconstar} alt="" className="w-[1rem] h-[1rem]"></img>
                      <h6 className="text-white ml-[0.3rem] mr-[1rem] my-[1rem]">{value.vote_average}/10</h6>
                    </div>
                    <button className="border border-red-700 text-white bg-red-700 font-semibold rounded-full px-[1rem] mr-[1rem] h-[2.5rem]" onClick={() => navigate(`/detail/${value.id}`)}>
                      Watch Trailer
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-screen h-[42rem] bg-black pt-[5rem]">
        <div className="flex justify-between items-center pb-[2rem]">
          <h2 className="text-white text-[2.5rem] font-bold pl-[6rem]">Popular Movie</h2>
          <div className="text-[#db0000] pr-[6rem] text-[1rem] font-semibold cursor-pointer" onClick={() => navigate(`/allmovie/${1}`)}>
            See All Movie...
          </div>
        </div>
        <div className="w-screen flex">
          {Popular.slice(0, 4).map((value) => {
            return (
              <div className="flex flex-wrap w-[16rem] m-auto cursor-pointer" key={value.id} onClick={() => navigate(`/detail/${value.id}`)}>
                <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" className="w-[15rem] m-auto rounded-md" />
                <div className="pt-[1rem] pl-[1rem] flex flex-col">
                  <h6 className="text-white text-[1.2rem] font-semibold">{value.original_title}</h6>
                  <p className="text-white font-thin italic">{value.release_date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
