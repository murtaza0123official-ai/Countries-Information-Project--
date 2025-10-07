import { createBrowserRouter } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home";
import {RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layouts/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import "./index.css"
import { CountryDetails } from "./Components/Layouts/CountryDeatails";

function App()
{
  const router =createBrowserRouter([
     {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"country",
      element:<Country/>,
    },
    {
      path:"about",
      element:<About/>,
    },
    {
      path:"country/:name",
      element:<CountryDetails/>,
    },
    {
      path:"contact",
      element:<Contact/>,
    },    
      ]
    },
    
  ])
  return(
    <div className="video-background">
    <div className="container">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/33144-395456710_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your content */}
     <RouterProvider router={router}></RouterProvider>
    </div>
    </div>

  )
}
export default App;