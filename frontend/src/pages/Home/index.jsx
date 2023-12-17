import React from "react";
import TopSection from "../../components/TopSection";
import StartupsSection from "../../components/StartupsSection";
import { useSelector } from "react-redux";
import CardDetails from "../../components/CardDetails";
import About from "../../components/About";

const Home = () => {
  const { show } = useSelector((state) => state.showDetailsReducer);
  return (
    <div className="overflow-hidden flex flex-col space-2">
      {show && <CardDetails />}
      <div className="md:h-screen">
        <TopSection />
      </div>
      <div id="startup-section" className="md:h-screen">
        <StartupsSection />
      </div>
      <div id="about-section" className="md:h-screen">
        <About />
      </div>
    </div>
  );
};

export default Home;
