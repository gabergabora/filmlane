import React from "react";
import { bestSeriesData } from "../data/bestSeriesData";
import Serial from "./Serial";

function BestSeries() {
  return (
    <div
      id="series"
      className="bgBestSeries px-4 py-16 w-full h-full flex justify-center items-center flex-col gap-10"
    >
      <div className="w-full flex items-center flex-col gap-2">
        <p className="text-[12px] font-medium text-citrine uppercase tracking-[1px]">
          best tv series
        </p>
        <h3 className="text-[32px] font-bold text-white  leading-[38.4px]">
          World Best TV Series
        </h3>
      </div>

      <div className="w-full flex justify-center items-start gap-7 flex-wrap">
        {bestSeriesData.map((item) => (
          <Serial item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestSeries;
