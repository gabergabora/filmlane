import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { BsYoutube, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { BiSearch, BiWorld, BiLogInCircle } from "react-icons/bi";
import { navData } from "../data/navData";
import logo from "../assests/img/logo.svg";
import UserMenu from "./UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/informationUser/userSlice";

function Header({ userItems, setUserItems }) {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(3));
  const navRef = useRef();
  const navContainerRef = useRef();
  const headerRef = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.information);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("formData"));
    if (items) {
      setUserItems(items);
      dispatch(setUserData(items));
    }
  }, [location]);

  useEffect(() => {}, [userItems]);

  useEffect(() => {
    // toggle navbar and has transition!!
    if (isToggleMenu) {
      navRef.current.classList.add("animate__fadeInRight", "right-0");
      navRef.current.classList.remove(
        "animate__fadeOutRight",
        "-right-[700px]"
      );
      navContainerRef.current.classList.add("block");
      navContainerRef.current.classList.remove("hidden");
    } else {
      navRef.current.classList.remove("animate__fadeInRight", "-right-[700px]");
      navRef.current.classList.add("animate__fadeOutRight");
      setTimeout(() => {
        navContainerRef.current.classList.add("hidden");
      }, 500);
    }

    headerScrollChangeBg();

    return () => {
      clearTimeout(navContainerRef);
    };
  }, [navRef, isToggleMenu, location, headerRef]);

  const headerScrollChangeBg = () => {
    window.addEventListener("scroll", () => {
      if (
        headerRef.current.baseURI === "http://localhost:3000/" ||
        headerRef.current.baseURI.startsWith("http://localhost:3000/#") ||
        headerRef.current.baseURI.startsWith(
          "http://localhost:3000/moviedata/"
        ) ||
        headerRef.current.baseURI === "https://filmlane.vercel.app/" ||
        headerRef.current.baseURI.startsWith(
          "https://filmlane.vercel.app/#"
        )
      ) {
        window.pageYOffset >= 10
          ? headerRef.current.classList.add("bg-[#151923]") ||
            headerRef.current.classList.remove("bg-transparent")
          : headerRef.current.classList.add("bg-transparent") ||
            headerRef.current.classList.remove("bg-[#151923]");
      }
    });
  };

  const handleDeleteLocal = () => {
    setIsOpenUserMenu(false);
    localStorage.clear();
    setUserItems([]);
    dispatch(setUserData());
  };

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0  ${
        location.pathname === "/" || location.pathname.startsWith("/moviedata/")
          ? "bg-transparent"
          : "bg-[#151923] relative"
      }   px-4 lg:px-8 py-5 lg:py-9 z-[8] transition-all duration-500`}
    >
      <div className="w-full flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden lg:flex md:justify-center md:items-center md:text-white lg:text-base lg:font-bold md:gap-9">
          {navData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`font-[500] transition-all duration-150  focus:text-citrine active:text-citrine focus-visible:text-citrine`}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex md:justify-center md:items-center md:gap-5 md:text-white">
            <BiSearch className="text-[23px] font-bold border-r border-light-gray pr-2 w-10 h-5" />
            <div className="flex gap-1 items-center">
              <BiWorld className="text-[23px] font-bold text-citrine" />
              <select id="cars" className="bg-transparent text-white font-bold">
                <option
                  value="volvo"
                  className="text-rich-black-fogra-39 text-sm uppercase"
                >
                  en
                </option>
                <option
                  value="saab"
                  className="text-rich-black-fogra-39 text-sm uppercase"
                >
                  au
                </option>
                <option
                  value="opel"
                  className="text-rich-black-fogra-39 text-sm uppercase"
                >
                  ar
                </option>
                <option
                  value="audi"
                  className="text-rich-black-fogra-39 text-sm uppercase"
                >
                  fa
                </option>
              </select>
            </div>
          </div>
          {userItems && userItems.name ? (
            <FaUserCircle
              onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
              className="hidden xl:text-3xl xl:cursor-pointer xl:transition-all xl:duration-150 xl:text-citrine xl:block"
            />
          ) : (
            <Link
              to="/signup"
              className="hidden xl:uppercase xl:flex xl:justify-center xl:items-center xl:w-32 xl:h-11 xl:bg-rich-black-fogra-29 border-2 border-citrine xl:rounded-3xl xl:text-white xl:font-bold xl:text-sm xl:tracking-wider xl:transition-all xl:duration-150 xl:hover:bg-citrine xl:hover:text-rich-black-fogra-39 xl:focus:bg-citrine xl:focus:text-rich-black-fogra-39  "
              style={{ wordSpacing: "3px" }}
            >
              sign in
            </Link>
          )}
          {userItems && userItems.name ? (
            <FaUserCircle
              onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
              className="text-3xl cursor-pointer transition-all duration-150 text-white lg:hidden"
            />
          ) : (
            <Link
              to="signup"
              className=" cursor-pointer text-white text-4xl lg:hidden"
              onClick={() => setIsToggleMenu(false)}
            >
              <BiLogInCircle />
            </Link>
          )}
          <HiMenuAlt4
            className="text-4xl cursor-pointer transition-all duration-150 text-white lg:hidden"
            onClick={() => setIsToggleMenu(!isToggleMenu)}
          />
        </div>
      </div>
      <div
        ref={navContainerRef}
        className={`absolute z-[2] transition-all duration-200 w-[100vw] h-[100vh] hidden left-0 top-0  bg-[rgba(0,0,0,0.5)]`}
      >
        <nav
          ref={navRef}
          className={`absolute animate__animated animate__delay-1ms  z-[3] right-0  flex top-0 w-[310px] h-[100vh] bg-eerie-black flex-col items-start justify-start gap-8  py-8`}
        >
          <div className="flex justify-between w-full px-6 items-center">
            <Link to="/" onClick={() => setIsToggleMenu(false)}>
              <img src={logo} alt="logo" />
            </Link>
            <FaTimes
              className="text-3xl cursor-pointer transition-all duration-150 text-white font-bold "
              onClick={() => setIsToggleMenu(false)}
            />
          </div>
          <div className="flex w-full flex-col justify-start gap-2 text-white text-[15px]">
            {navData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={() => setIsToggleMenu(false)}
                className={`font-[500] border-b px-6 py-[7px] ${
                  item.text === "Home" &&
                  "border-t py-[11px] border-t-[#2F3438]"
                } border-b-[#2F3438] transition-all duration-150  active:text-citrine focus:text-citrine`}
              >
                {item.text}
              </a>
            ))}
          </div>
          <div className="px-6 py-3 w-full flex items-center justify-center gap-8 text-white transition-all duration-150 text-xl">
            <BsTwitter className="cursor-pointer transition-all duration-150  hover:text-citrine" />
            <BsFacebook className="cursor-pointer transition-all duration-150  hover:text-citrine" />
            <BsInstagram className="cursor-pointer transition-all duration-150  hover:text-citrine" />
            <BsYoutube className="cursor-pointer transition-all duration-150  hover:text-citrine" />
          </div>
        </nav>
      </div>
      {isOpenUserMenu && (
        <UserMenu
          isOpenUserMenu={isOpenUserMenu}
          setIsOpenUserMenu={setIsOpenUserMenu}
          logOut={handleDeleteLocal}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      )}
    </header>
  );
}
export default Header;
