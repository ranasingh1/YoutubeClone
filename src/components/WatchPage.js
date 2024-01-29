import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu, openMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './ComentsContainer';
import ChatBox from './ChatBox';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();
  const [iframeWidth, setIframeWidth] = useState(1000); // Initial width for larger screens
  const [iframelength, setIframelength] = useState(500);
  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      dispatch(openMenu());
    };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setIframeWidth(window.innerWidth * 0.9);
        setIframelength(window.innerHeight*0.6); // Set width for smaller screens
        dispatch(closeMenu());
      } else {
        setIframeWidth(1000); // Set width for larger screens
        setIframelength(500)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div className='md:flex-col w-full md:mt-20 mt-16'>
      <div className='md:flex w-full mt-14'>
        <div className=' flex justify-center md:px-5'>
          <iframe
            width={iframeWidth}
            height={iframelength}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} // Add autoplay parameter
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <div className=' md:w-full max-sm:mt-4 sm:mt-4 md:mt-0'>
          <ChatBox />
        </div>
      </div>
      <div className=''>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
