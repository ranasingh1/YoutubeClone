import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
   <div className='p-8  pr-20 shadow-lg w-auto mr-2'>
     <ul>
      <Link to="/">
        <li className='flex gap-2  items-center '><img src='data:image/jpeg;base64,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' className='h-8 w-8'/> Home</li>
      
        </Link><li className='flex '><img src='https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg' className='h-10 w-8'/> Shorts</li>
        <li className='flex gap-2 '><img src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png' className='h-7'/> Subscriptions</li>
     </ul>
    
   
     <h1 className='pt-5 font-bold'>Explore</h1>
     <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
     </ul>
     <h1 className='pt-5 font-bold'>Explore</h1>
     <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
     </ul>
   </div>  
  )
}

export default Sidebar