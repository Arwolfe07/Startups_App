import React from "react";
import { useSelector } from "react-redux";
import Carousal from "../Carousal";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const StartupsSection = () => {
  const loading = useSelector((state) => state.loadingReducer);
  const startupData = useSelector((state) => state.dataReducer);
  const disp = startupData?.slice(0, 10);
  return (
    <>
      <div className="md:h-full h-screen  sm:px-24 md:py-12 pt-28 pb-12 px-0 flex items-center flex-col justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-red-700 sm:text-5xl md:text-4xl xl:text-6xl">
          Featured
        </h1>
        <div className="md:h-3/4 h-full w-full rounded-xl area relative z-0">
          <ul className="circles absolute">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className="absolute w-full mx-auto h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto   z-10">
            {loading && <Loading />}
            {!loading && <Carousal data={disp} />}
          </div>
        </div>
        <div>
          <Link
            className="text-2xl font-bold block text-indigo-400 hover:text-indigo-700 group-hover:text-slate-800 transition duration-200"
            to="/allstartups"
            target="_blank"
          >
            All Startups →
          </Link>
        </div>
      </div>
    </>
  );
};

export default StartupsSection;
