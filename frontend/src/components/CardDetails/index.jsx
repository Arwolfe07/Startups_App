import Modal from "../UI/Modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CardDetails = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.showDetailsReducer);
  const closeModalHandler = () => {
    dispatch({ type: "NOT_SHOW" });
  };
  return (
    <Modal onClick={closeModalHandler}>
      <div className="rounded-lg">
      <button type="button" class="absolute right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModalHandler}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
        <h1 className="text-4xl  font-extrabold tracking-tight text-center text-red-700 ">
          {details?.StartupName}
        </h1>
        <p className="text-lg mt-2 text-gray-500 text-center">{details?.SubVertical}</p>
        <div className="mt-2 grid grid-cols-2">

        <p className="border-2 text-md text-gray-600 px-4 font-bold">Category</p>
        <p className="border-2 text-md text-gray-600 text-center">{details?.IndustryVertical}</p>
        <p className="border-2 text-md text-gray-600 px-4 font-bold">Investors</p>
        <p className="border-2 text-md text-gray-600 text-center">{details?.InvestorsName}</p>
        <p className="border-2 text-md text-gray-600 px-4 font-bold">Investment Type</p>
        <p className="border-2 text-md text-gray-600 text-center">{details?.InvestmentType}</p>
        <p className="border-2 text-md text-gray-600 px-4 font-bold">Funding</p>
        <p className="border-2 text-md text-gray-600 text-center">{details?.AmountInUSD}</p>
        
        
        </div>
        <div className="flex justify-center">
          <p className="py-2 text-center text-gray-500 rounded-bl-lg border-2 border-gray-500 w-full">{details?.CityLocation}</p>
          <p className="py-2 text-center text-gray-500 rounded-br-lg border-2 border-gray-500 w-full">{details?.Date}</p>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetails;
