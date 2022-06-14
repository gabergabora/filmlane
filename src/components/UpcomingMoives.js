import React from "react";
import {
  filterDataUpcomingMoives,
  upcomingMoivesData,
} from "../data/UpcomingMoivesData";
import UpcomingMoiveData from "./UpcomingMovieData";

function UpcomingMoives() {
  return (
    <div
      id="upcominmovie"
      className="w-full h-full flex justify-center items-center flex-col gap-7 px-4 py-16 upcomingMovieContainer"
    >
      <p className="uppercase text-citrine text-[13px] font-[500]">
        Online streaming
      </p>

      <h2 className="text-white text-[32px] font-[700] text-center w-full">
        Upcoming Moives
      </h2>

      <div className="flex justify-center items-center gap-3 flex-wrap">
        {filterDataUpcomingMoives.map((item) => (
          <button
            key={item.id}
            className="flex justify-center items-center px-7 py-3 rounded-full font-[500] text-[11px] bg-raisin-black text-white transition-all duration-150 border-2 border-gunmetal-1 focus:border-citrine cursor-pointer"
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="flex w-full justify-start items-start  gap-4 has-scrollbar scrollbar-thumb-inherit">
        {upcomingMoivesData.map((item) => (
          <UpcomingMoiveData item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingMoives;
