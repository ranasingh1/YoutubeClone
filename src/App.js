import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import appRouter from "./layout/Router";
import { RouterProvider } from "react-router-dom";




function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
  ); 
}


  /**
   * Head
   * Body
   *  Sidebar
   *   MenuItems
   *   MainConatiner
   *     Buttons List
   *       VideoContainer
   *          Video Card
   */

export default App;
