import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import commentsSlice from "./commentsSlice";

 const store = configureStore({
      reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        comment:commentsSlice
      }
 })

 export default store;