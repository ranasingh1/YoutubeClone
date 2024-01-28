import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  SEARCH_ICON,
  YOUTUBE_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_LIST_API,
  YOUTUBE_SUGGESTION_API,
} from "../constants/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchItem();
  }, []);

  const getSearchItem = async () => {
    const response = await fetch(YOUTUBE_SEARCH_LIST_API);
    const json = await response.json();
    console.log(json);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
        console.log('you genius');
      } else {
        getSuggestion();
        console.log('you idiot');
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHanlder = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid  fixed bg-white w-screen grid-flow-col p-4  top-0 ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHanlder()}
          alt="menu"
          className="h-7 it cursor-pointer "
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <Link to="/">
          <img
            alt="logo"
            className="h-7 w-28 ml-4"
            src={screenWidth <= 640 ? YOUTUBE_ICON : YOUTUBE_LOGO}
          />
        </Link>
      </div>
      <div className="col-span-10 relative pl-20">
        <input
          type="text"
          value={searchQuery}
          className="w-1/2 border px-4 py-2 rounded-l-full border-gray-400"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setTimeout(()=>setShowSuggestion(false),1000) }
        />
        <button className="absolute h-full  w-20 bg-gray-100 border   border-gray-400 rounded-r-full">
          <img
            alt="search-icon"
            className="h-full  pl-4 rounded-r-full"
            src={SEARCH_ICON}
          />
        </button>
      </div>
      {showSuggestion && (
        <div className="absolute  max-sm:translate-x-0 sm:translate-x-20 md:translate-x-[21rem] top-[4.1rem] bg-gray-50  py-2 px-2 w-[33rem] rounded-lg">
          <ul>
            {suggestion.map((s, i) => (
              // <Link to = "/results">
              //The onBlur was executed before the Link element, hid the window and therefore nothing happend after clicking on the link. I am now pausing the handleFocusOut function for 100ms so that the link gets executed first and now it works. I know this is not the best solution but it is the only one that worked unitl now. I will search for a better one. Thanks everyone for helping me :)
             <Link key={i}  to={"/results?search_query="+s}   onClick={(e)=>{
               setSearchQuery(s);
                setShowSuggestion(false);
                    }}>
              <li
               
                key={i}
                className=" hover:bg-gray-100 px-2 my-1 py-2 shadow-sm flex"
              >
                <img src={SEARCH_ICON} className="h-7" /> {s}
              </li>
               </Link>
            ))}
          </ul>
        </div>
      )}
      <div className="col-span-1">
        <img
          alt="user"
          className="h-8 "
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
