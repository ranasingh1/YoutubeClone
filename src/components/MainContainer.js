import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import { VideoContainer } from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, openMenu } from '../utils/appSlice'

const MainContainer = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((store)=>store.app.isMenuOpen)
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; 
      if(isMobile){
        dispatch(closeMenu());
      }else{
        dispatch(openMenu())
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); 
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
    <div className={ `${isSidebarOpen?'ml-44':''}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer