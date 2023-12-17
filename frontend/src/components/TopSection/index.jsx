import React from "react";
import { Link } from "react-router-dom";
import pic from '../../assets/pic_1.jpg'

const TopSection = () => {
  return (
    <section className="px-2 py-40 bg-white md:px-0 h-full">
      <div className="container max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-3 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl xl:text-6xl">
                <span className="block xl:inline">View all Startups</span>{" "}
                <span className="block xl:inline text-red-700">
                  at one place.
                </span>
              </h1>
              <p className="text-gray-500 text-base mx-auto sm:max-w-md lg:text-xl md:max-w-3xl">
                Keep track of all new startups, their details and funding at one
                place and add new startups in the list.
              </p>
              <div className="flex relative flex-col sm:flex-row sm:space-x-4">
                <Link className="flex items-center w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white sm:w-auto mb-3 text-lg" onClick={(e)=>{
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#startup-section").offsetTop,
   behavior: "smooth",
                  })
                }}>
                  View Startups
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link className="flex items-center w-full hover:bg-gray-200 px-6 py-3 rounded-md bg-gray-100  sm:w-auto mb-3 text-lg" to='/newstartup'>
                  Add New
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full overflow-hidden h-auto rounded-md shadow-xl sm:rounded-xl">
                <img src={pic} alt="pic"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
