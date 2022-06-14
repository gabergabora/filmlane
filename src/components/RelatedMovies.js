import React from "react";
import { relatedMovieLabel, relatedMoviesData } from "../data/relatedMovieData";
import RelatedMovie from "./RelatedMovie";

function RelatedMovies() {
  return (
    <div
      id="movie"
      className="bgRelatedMovie px-4 py-16 w-full h-full flex justify-center items-center flex-col gap-10"
    >
      <div className="w-full flex items-center flex-col gap-2">
        <p className="text-[12px] font-medium text-citrine uppercase tracking-[1px]">
          ONLINE STREAMING
        </p>
        <h3 className="text-[32px] font-bold text-white  leading-[38.4px]">
          Top Rated Movies
        </h3>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-3 w-full">
        {relatedMovieLabel.map((item) => (
          <button
            key={item.id}
            className="text-light-gray text-[12px] font-bold uppercase text-center flex justify-center items-center h-[54px] bg-rich-black-fogra-39 px-[25px] py-4 rounded filterBtn focus:text-citrine"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center items-start gap-7 flex-wrap ">
        {relatedMoviesData.map((item) => (
          <RelatedMovie item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RelatedMovies;
