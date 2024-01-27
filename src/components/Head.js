 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_ICON, YOUTUBE_ICON, YOUTUBE_LOGO, YOUTUBE_SUGGESTION_API } from "../constants/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const[searchQuery , setSearchQuery] = useState([]);
  const [suggestion, setSuggestion] =useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const searchCache = useSelector((store)=>store.search)
  const dispatch = useDispatch();

  useEffect(()=>{
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery])
      }else{
      getSuggestion();
      }
    }, 200);

    return ()=>{
      clearTimeout(timer);
    }
  }, [searchQuery])

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);
    handleResize(); 
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
 
  
  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    };

  const getSuggestion =async()=>{
      console.log('api');
    const data = await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    
    dispatch( cacheResults({
      [searchQuery]:json[1]
    }))
  }

    
   const toggleMenuHanlder = ()=>{
      dispatch(toggleMenu());
   }
  return (
    <div className="grid  fixed bg-white w-screen grid-flow-col p-4  ">
      <div className="flex col-span-1 ">
       <img
         onClick={()=>toggleMenuHanlder()}
          alt="menu"
          className="h-7 it cursor-pointer "
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
        <img
          alt="logo"
          className="h-7 w-28 ml-4"
          src={screenWidth<=640?YOUTUBE_ICON:YOUTUBE_LOGO}
        />
        </a>        
      </div>
      <div className="col-span-10 relative pl-20">
        <input
          type="text"
          value={searchQuery}
          className="w-1/2 border px-4 py-2 rounded-l-full border-gray-400"
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className="absolute h-full  w-20 bg-gray-100 border   border-gray-400 rounded-r-full">
          <img
            alt="search-icon"
            className="h-full  pl-4 rounded-r-full"
            src={SEARCH_ICON}
          />
        </button>
      </div>
      {showSuggestion &&<div className="absolute translate-x-[19rem] top-[4.1rem] bg-gray-50  py-2 px-2 w-[33rem] rounded-lg">
          <ul>
            {suggestion.map((s, i)=>(
              <li key={i} className=" hover:bg-gray-100 px-2 my-1 py-2 shadow-sm flex">
               <img src={SEARCH_ICON} className="h-7"/> {s}
              </li>
            ))}
          </ul>
      </div>}
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
