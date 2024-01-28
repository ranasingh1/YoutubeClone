import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";
import Layout from "./Layout";
import SearchResult from "../components/SearchResult";


const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children: [{
        path:'/',
        element:<MainContainer/> 
      },
       {
        path:"watch", 
        element:<WatchPage/>
       },
       {
        path:"results",
        element:<SearchResult/>
       }
    ]
    }
  ])

  
  
  export default appRouter;