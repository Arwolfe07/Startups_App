import React from "react";
import cardImg from "../../assets/card_1.jpg";
import { useDispatch } from "react-redux";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const showDetailsHandler = () => {
    dispatch({ type: "SHOW", details: data });
  };
  return (
    <div className=" w-full m-2 mx-auto cursor-pointer rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" onClick={showDetailsHandler}>
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        {data?.IndustryVertical}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {data?.StartupName}
        </h5>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        {data?.Date}
      </div>
    </div>
  );
};

export default Card;
