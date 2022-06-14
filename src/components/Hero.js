import { BsCalendarWeekFill, BsFillPlayFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

function Hero() {
  return (
    <div className="bgHeroPage">
      <div className="flex flex-col items-start gap-3">
        <p className="text-citrine text-[24px] font-[700]">Filmbane</p>
        <h2 className="text-[36px] font-[700] leading-[43.2px]">
          Unlimited <span className="text-citrine">Movie</span>, TVs Shows, &
          More.
        </h2>

        <div className="flex items-center gap-3 flex-wrap">
          <p className="text-[11px] font-[700] bg-white text-rich-black-fogra-39 px-3 py-1">
            PG16
          </p>
          <p className="text-[11px] font-[700] bg-trasnparent text-white border-2 border-white px-3 py-1">
            HD
          </p>
          <p className="text-[15px] font-[400]  text-white px-1 py-1">
            Romance,
          </p>
          <p className="text-[15px] font-[400]  text-white  py-1">Drama</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <BsCalendarWeekFill className="text-citrine" />
            <p className="text-[14px] font-[500]">2022</p>
          </div>

          <div className="flex items-center gap-2">
            <BiTimeFive className="text-citrine text-xl" />
            <p className="text-[14px] font-[500]">128 min</p>
          </div>
        </div>

        <button className="text-[13px] mt-8 font-[700] leading-[2px] bg-rich-black-fogra-29 text-white uppercase cursor-pointer h-[54px] w-[190px] border-2 border-citrine rounded-full px-[30px] py-[16px] flex items-center gap-2 transition-all duration-200 hover:bg-citrine hover:text-rich-black-fogra-39 focus:bg-citrine focus:text-rich-black-fogra-39">
          <BsFillPlayFill className="text-[24px]" />
          watch now
        </button>
      </div>
    </div>
  );
}

export default Hero;
