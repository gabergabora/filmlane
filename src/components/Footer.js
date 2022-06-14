import React from "react";
import { Link } from "react-router-dom";
import { footerData1, footerData2, footericonData } from "../data/footerData";
import logo from "../assests/img/logo.svg";
import socialInons from "../assests/img/footer-bottom-img.png";

function Footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="px-5 py-14 footerData1 flex flex-col justify-center items-center gap-7 bgFooterSection1">
        <div className="w-full flex justify-center items-center flex-col gap-5 lg:w-[94vw] lg:flex-row lg:justify-between ">
          <img src={logo} alt="logo" />

          <div className="w-full flex justify-center lg:justify-end items-center gap-6 flex-wrap">
            {footerData1.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="text-[#CECACA] text-[14px] font-bold uppercase transition-all duration-150 focus:text-citrine"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        <div className="w-full flex justify-center items-center flex-col gap-5 lg:w-[94vw] lg:flex-row lg:justify-between ">
          <div className="w-full flex justify-center lg:justify-start items-center gap-6 flex-wrap">
            {footerData2.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="text-[#BDBDBD] text-[13px] font-medium uppercase transition-all duration-150 focus:text-citrine"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center lg:justify-end items-center gap-5 ">
            {footericonData.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="text-[#BDBDBD] bg-rich-black-fogra-39 w-[35px] h-[35px] rounded-full flex justify-center items-center text-center text-[13px] font-medium uppercase transition-all duration-150 focus:text-citrine"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bgFooterSection2 flex flex-col justify-center items-center gap-4 px-5 py-5">
        <p className="text-[13px] font-medium leading-[22.1px] text-[#BDBDBD]">
          © 2022 <span className="text-citrine"> codewithsadee </span>. All
          Rights Reserved
        </p>

        <img
          src={socialInons}
          alt="socialInons"
          className="w-[90%] md:w-auto"
        />
      </div>
    </div>
  );
}

export default Footer;
