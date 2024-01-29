import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import SearchVideoCard from './SearchVideoCard';
import { useEffect } from 'react';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get('search_query');
  const isSideBarOpen = useSelector((store) => store.app.isMenuOpen);
  const [queryResults, setQueryResults] = useState([]);

  useEffect(()=>{
        getSearchItem();
  }, [search_query])
  
  const getSearchItem = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_query}&key=AIzaSyDYyDjaKZkdhItd6RIlgw69g-2_F1dMlQw`);
    const json = await response.json();
    setQueryResults(json.items)

  };

  return (
<div className={` w-full mt-16 pt-10 flex flex-wrap justify-center`}>
  <div className={`${isSideBarOpen ? 'w-[60%]':'w-[70%]'}  p-4 `}>
    {queryResults.map((r)=> <Link key={r.etag} to={"/watch?v="+ r.id.videoId}><SearchVideoCard  results = {r}/></Link>
)}
  </div>
</div>
  );
};

export default SearchResult;
