import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, openMenu, toggleMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './ComentsContainer';
import { commentData } from '../constants/constants';
import ChatBox from './ChatBox';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
   const videoId = searchParams.get('v')
   console.log(videoId);
  const dispatch = useDispatch();  
  useEffect(()=>{   
       dispatch(closeMenu())     
       
       return ()=>{
        dispatch(openMenu());
       }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; 
      if(isMobile){
        dispatch(closeMenu());
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); 
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (<div className=' flex-col w-full'>
    <div className='flex w-full'>
    <div className='px-5  '>
<iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?`} // Add autoplay parameter
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>   
       </div>
       <div className='w-full'>
        <ChatBox/>
       </div>
       </div>
       <div className=''>
        <CommentsContainer />
        </div> 
       </div>
  )
  
}

export default WatchPage;