/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/page/Home/Home";
import Movie from "../src/page/Movie/Movie";
import Seach from "./page/Seach/Seach";
import Series from "./page/Series/Series";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/seach" element={<Seach />} />
          <Route path="/series" element={<Series/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
