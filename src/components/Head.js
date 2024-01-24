 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { SEARCH_ICON, YOUTUBE_SUGGESTION_API } from "../constants/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const[searchQuery , setSearchQuery] = useState([]);
  const [suggestion, setSuggestion] =useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store)=>store.search)
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

  const getSuggestion =async()=>{
      console.log('api');
    const data = await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    
    dispatch( cacheResults({
      [searchQuery]:json[1]
    }))
  }
    const dispatch = useDispatch();

   const toggleMenuHanlder = ()=>{
      dispatch(toggleMenu());
   }
  return (
    <div className="grid  grid-flow-col p-4 my-2 shadow-lg">
      <div className="flex col-span-1 ">
        {/* <a href="/"> */}
       <img
         onClick={()=>toggleMenuHanlder()}
          alt="menu"
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        {/* </a> */}
        <img
          alt="logo"
          className="h-8 w-20 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
        
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
