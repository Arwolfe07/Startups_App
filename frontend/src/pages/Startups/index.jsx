import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import CardDetails from "../../components/CardDetails";
import Loading from "../../components/Loading";

const Startups = () => {
  const { category, searchedName } = useSelector(
    (state) => state.filterReducer
  );
  const loading = useSelector((state) => state.loadingReducer);
  const data = useSelector((state) => state.dataReducer);
  const [startupData, setStartupData] = useState(data);
  const { show } = useSelector((state) => state.showDetailsReducer);

  useEffect(() => {
    if (category === "All") {
      setStartupData(data);
    } else {
      setStartupData(data.filter((obj) => obj.IndustryVertical === category));
    }
  }, [category, data]);

  useEffect(() => {
    if (searchedName === "") {
      setStartupData(data);
    } else {
      const filteredData = startupData.filter((d) =>
        d.StartupName.toLowerCase().includes(searchedName.toLowerCase())
      );
      setStartupData(filteredData);
    }
  }, [searchedName, data]);

  return (
    <>
      {show && <CardDetails />}
      {loading && <Loading />}
      {!loading && (
        <div className="md:p-24 py-24 px-2">
          <SearchBar />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-4 items-center ">
            {startupData?.map((d) => (
              <div
                className="sm:w-80 w-full hover:scale-95  transform transition duration-500"
                key={d._id}
              >
                <Card data={d} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Startups;
