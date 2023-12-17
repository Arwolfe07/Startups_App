import React from "react";
import Card from "../Card";

const Carousal = ({ data }) => {
  return (
    <div  id='scroll-container' className="w-full  mx-auto h-full grid lg:grid-cols-2 grid-cols-0 items-center overflow-y-auto">
      {data?.map((d) => (
        <div className="sm:w-96  transform transition duration-500 w-72 h-fit hover:scale-105 mx-auto">
          <Card data={d} key={d.StartupName} />
        </div>
      ))}
    </div>
  );
};

export default Carousal;
