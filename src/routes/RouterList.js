import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsMovie } from "../pages/DetailsMovie";
import { HomePage } from "../pages/HomePage";
import { AllMovie } from "../pages/AllMovie";
import { SearchMovie } from "../pages/SearchMovie";

export const RouterList = () => {
  return (
    // ini perumahannya
    <BrowserRouter>
      {/* ini block perumahannya */}
      <Routes>
        {/* ini gerbang */}
        <Route path="/" element={<HomePage />}></Route>
        {/* INI nomor rumah spesifik */}
        <Route path="/detail/:id" element={<DetailsMovie />}></Route>
        <Route path="/allmovie/:page" element={<AllMovie />}></Route>
        <Route path="/search/:query" element={<SearchMovie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
