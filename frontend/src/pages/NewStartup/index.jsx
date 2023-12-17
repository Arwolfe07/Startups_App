import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../actions/data";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const NewStartup = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [investType, setInvestType] = useState("");
  const [investNames, setInvestNames] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  // Cancel Button
  const cancelHandler = () => {
    navigate("/", { replace: true });
  };

  // Submit the form data to backend server
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !date ||
      !name ||
      !category ||
      !about ||
      !location ||
      !investNames ||
      !investType ||
      !amount
    ) {
      addToast("One or more fields empty", {
        appearance: "warning",
        autoDismiss: true,
      });
      return;
    }
    const startupData = {
      Date: date,
      StartupName: name,
      IndustryVertical: category,
      SubVertical: about,
      CityLocation: location,
      InvestorsName: investNames,
      InvestmentType: investType,
      AmountInUSD: amount,
      Remarks: "",
    };
    dispatch(addData(startupData, navigate, addToast));
  };

  return (
    <div className="w-full h-screen py-16 sm:p-24">
      <form
        className="max-w-lg mx-auto border-2 p-4 rounded-lg"
        onSubmit={submitHandler}
      >
        <h1 className="text-xl font-bold tracking-tight text-center mb-4">
          Add New Startup
        </h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            id="startupName"
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="startupName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Startup Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            id="startupLocation"
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
            onChange={(e) => setLocation(e.target.value)}
          />
          <label
            htmlFor="startupLocation"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Location (Bangalore, Mumbai, Pune,.....)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            id="startupDate"
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
            onChange={(e) => setDate(e.target.value)}
          />
          <label
            htmlFor="startupLocation"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Founding Date (DD/MM/YYYY)
          </label>
        </div>

        <div className="grid md:grid-cols-1">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="Category"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              onChange={(e) => setCategory(e.target.value)}
            />
            <label
              htmlFor="Category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category (Technology, Consumer Internet, eComm...)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="about"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              onChange={(e) => setAbout(e.target.value)}
            />
            <label
              htmlFor="about"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              About (Short Headline)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="amount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              onChange={(e) => setAmount(e.target.value)}
            />
            <label
              htmlFor="amount"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Funding (In USD)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="investmentType"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              onChange={(e) => setInvestType(e.target.value)}
            />
            <label
              htmlFor="investmendType"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Investment Type eg. Seed Funding...
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            id="investors"
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
            onChange={(e) => setInvestNames(e.target.value)}
          />
          <label
            htmlFor="investors"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Investors Name (*separated by comma)
          </label>
        </div>
        <div className="w-full flex justify-between">
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Submit
          </button>
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewStartup;
