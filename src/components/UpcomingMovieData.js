import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

function UpcomingMiveData({ item }) {
  return (
    <Link
      className="w-full mb-6"
      key={item.id}
      to={`/moviedata/${item.title.split(" ").join("_").toLowerCase()}`}
    >
      <div className=" min-h-full w-full snap-start flex flex-col justify-between gap-5">
        <div className="w-[90vw] sm:w-[95vw] md:w-auto flex justify-center items-center h-full rounded-lg overflow-hidden containerImgMovie cursor-pointer">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[93px] flex flex-col justify-between items-start gap-5">
          <div className="flex w-full justify-between items-start">
            <h3 className="text-[16px] font-[700] max-w-[80%] whitespace-pre-wrap text-white transition-all duration-150 hover:text-citrine">
              {item.title}
            </h3>

            <p className="text-[16px] font-[500] text-citrine">{item.date}</p>
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="w-[40px] h-[25px] flex justify-center items-center border-2 border-white text-[11px] font-[700] text-citrine">
              {item.quality}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <IoTimeOutline className="text-citrine w-[17px] h-[17px]" />
                <p className="text-[13px] font-[500] text-white">
                  {item.time} min
                </p>
              </div>

              <div className="flex items-center gap-1">
                <AiFillStar className="text-citrine w-[17px] h-[17px]" />
                <p className="text-[13px] font-[500] text-white">{item.rate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UpcomingMiveData;
