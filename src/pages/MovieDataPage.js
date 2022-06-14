import React, { useEffect, useState } from "react";
import bannerMovie from "../assests/img/movie-4.png";
import {
  BsPlayCircle,
  BsCalendarWeekFill,
  BsShareFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { genresMoiveData } from "../data/genresMoiveData";
import { BestSeries } from "../components";
import { Link } from "react-router-dom";

function MovieData() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-full moviePageBackground flex justify-center items-center flex-col gap-7 px-5 py-32 lg:flex-row lg:justify-start lg:px-12">
        <Link
          to="/movie"
          className="max-w-[300px] relative rounded-lg overflow-hidden"
        >
          <img
            src={bannerMovie}
            className="w-full h-full object-cover "
            alt="free guy movie"
          />

          <button className="text-white text-8xl absolute inset-0 cursor-pointer flex justify-center items-center transition-all duration-200 hover:bg-[#2e2f3e46] ">
            <BsPlayCircle />
          </button>
        </Link>

        <div className="w-full flex flex-col justify-center items-start gap-5 lg:w-[650px]">
          <p className="text-citrine text-xl font-bold lg:text-2xl">
            New Episode
          </p>
          <h2 className="text-white text-[36px] font-bold lg:text-[60px]">
            Free <span className="text-citrine">Guy</span>
          </h2>
          <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-start ">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[25px] flex justify-center items-center border-2 border-white text-[11px] font-[700] text-rich-black-fogra-39 bg-white">
                PG 13
              </div>
              <div className="w-[40px] h-[25px] flex justify-center items-center border-2 border-white text-[11px] font-[700] text-white">
                HD
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm ">
              {genresMoiveData.map((item) => (
                <p
                  key={item.id}
                  className="text-white transition-all duration-150 hover:text-citrine focus:text-citrine"
                >
                  {item.text}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <BsCalendarWeekFill className="text-citrine" />
                <p className="text-[12px] font-[400] text-white">2021</p>
              </div>

              <div className="flex items-center gap-2">
                <BiTimeFive className="text-citrine text-xl" />
                <p className="text-[12px] font-[400] text-white">115 min</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-[14px] font-medium text-[#BDBDBD]">
              A bank teller called Guy realizes he is a background character in
              an open world video game called Free City that will soon go
              offline.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-4 bg-gunmetal-1 text-white rounded px-4 py-4 lg:w-[450px] lg:flex-row lg:py-6">
            <div className="w-full flex justify-center items-start gap-5 text-white">
              <div className="text-xl flex flex-col gap-1 justify-center items-center">
                <BsShareFill />
                <p className="text-xs">Share</p>
              </div>

              <div className="text-md flex flex-col gap-1 justify-center items-center">
                <h5 className="font-bold">Prime Video</h5>
                <p className="text-xs">Streaming Channels</p>
              </div>
            </div>
            <button className="text-[10px] font-[700] leading-[2px] bg-gunmetal-1 text-white uppercase cursor-pointer h-[44px] w-[150px] border-2 border-citrine rounded-full px-[12px] py-[14px]  lg:w-[200px] flex items-center justify-center gap-1 transition-all duration-200 hover:bg-citrine hover:text-rich-black-fogra-39 focus:bg-citrine focus:text-rich-black-fogra-39">
              <BsFillPlayFill className="text-[20px]" />
              watch now
            </button>
          </div>
        </div>

        <div className="w-full justify-start flex md:w-auto lg:absolute lg:right-4 lg:bottom-[180px] ">
          <button className="uppercase tracking-[5px] text-xs bg-citrine flex items-center gap-2 px-5 py-4 rounded-md lg:rotate-90 lg:px-10 lg:py-10">
            Download <AiOutlineDownload className="text-2xl lg:-rotate-90" />
          </button>
        </div>
      </div>
      <BestSeries />
    </div>
  );
}

export default MovieData;
