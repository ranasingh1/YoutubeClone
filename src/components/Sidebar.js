import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
   <div className=' absolute bg-white z-10 h-[37rem] w-[14rem] pl-2  mr-10 text-s '>
     <ul >
      <Link to="/">
        <li className='flex gap-4 pr-8 font-bold  hover:bg-gray-100 items-center hover:rounded-lg '><img src='https://static.thenounproject.com/png/3574480-200.png' 
        className='h-9 w-9'/> Home</li>
        </Link>
        <li className='flex pl-1 gap-4 pr-8 py-2 hover:bg-gray-100 hover:rounded-lg'><img src='https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg' className='h-7 w-7'/> Shorts</li>
        <li className='flex gap-4 pl-2 py-2  pr-8  hover:bg-gray-100 hover:rounded-lg '><img src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png' 
        className='h-6 '/> Subscriptions</li>
     </ul>
    
   
     <h1 className='pt-5 pl-2 font-bold'>Explore</h1>
     <ul className='pl-2 py-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
     </ul>
     <h1 className='pt-5 pl-2 font-bold'>Subscriptions</h1>
     <ul className='pl-2 py-2'>
        <li>Javascript Mastery</li>
        <li>freecodecamp</li>
        <li>codewithlarry</li>
        <li>ChaiandFrontend</li>
     </ul>
   </div>  
  )
}

export default Sidebar