import React, { useEffect, useState } from "react";
import {
  BestSeries,
  Cta,
  Hero,
  RelatedMovies,
  ServicesSection,
  UpcomingMoives,
} from "../components";
import { IoIosArrowUp } from "react-icons/io";

function HomePage() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset >= 500 ? setIsScroll(true) : setIsScroll(false);
    });
  }, [isScroll]);

  return (
    <div className="homePage" id="top">
      <Hero />
      <UpcomingMoives />
      <ServicesSection />
      <RelatedMovies />
      <BestSeries />
      <Cta />
      <a
        data-go-top
        href="#top"
        className={`fixed bottom-10 right-10 w-14 h-14 z-[2]  ${
          isScroll ? "opacity-100" : "opacity-0"
        }  transition-all duration-300 rounded-full bg-citrine flex justify-center items-center`}
      >
        <IoIosArrowUp />
      </a>
    </div>
  );
}

export default HomePage;
