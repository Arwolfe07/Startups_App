import React from "react";
import pic_src from "../../assets/card_1.jpg";

const About = () => {
  return (
    <section className="px-2 py-20 lg:py-32 bg-stone-100 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <div class="lg:max-w-md">
              <div className="px-4 border-l-4 border-red-600 pl-4">
                <span className="uppercase text-sm text-gray-600 dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Your startup's compelling story and mission can go here.
                Describe what your company does, its goals, its growth and
                anything else you'd like to share with visitors.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-red-600 dark:text-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-16 h-16 bi bi-file-earmark-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      2000+
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Startups and Companies
                    </h2>
                  </div>
                </div>
                <div class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white dark:bg-gray-900">
                    <span class="text-red-600 dark:text-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class=""
                        fill="currentColor"
                        className="bi bi-people-fill w-16 h-16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fill-rule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </span>
                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      3,590
                    </p>
                    <h2 class="text-sm text-gray-700 dark:text-gray-400">
                      Helped people
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 mb-10 md:w-1/2 lg:mb-0">
            <img
              src={pic_src}
              alt=""
              class="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
