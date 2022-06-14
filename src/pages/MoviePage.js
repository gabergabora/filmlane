import VideoPlayer from "react-video-js-player";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function MoviePage() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);

  return (
    <div className="w-full px-6 py-6 ">
      <BiArrowBack
        onClick={() => navigate(-1)}
        className="bg-citrine text-white text-6xl w-28 md:text-7xl md:w-32 rounded-md mb-12 ml-10 md:ml-16 cursor-pointer tranition-all duration-150 hover:bg-rich-black-fogra-29"
      />

      <div className="w-full flex justify-center items-center flex-col gap-5">
        {/* <VideoPlayer
          src={video}
          className="rounded-lg w-[76vw]"
          poster={poster}
          controls
        ></VideoPlayer> */}
        {showLoading ? <ClipLoader size={75} color={"#E2D703"} /> : null}
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/SJrs8/vt/frame"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className="w-[76vw] h-[74vh] rounded-lg"
          onLoad={() => setShowLoading(false)}
        ></iframe>
      </div>
    </div>
  );
}

export default MoviePage;
