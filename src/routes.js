import {createBrowserRouter } from "react-router-dom";
import App from './App'
import Contacts from "./components/content/Contacts";
import About from "./components/content/About";
import Projects from "./components/content/Projects";

const router = createBrowserRouter([
    {
      path: "/",
      element: < App />,
      children: [
        {
            path: "/contact",
            element:<Contacts/>
        },
        
        {
            path: "projects",
            element:<Projects/>
        },
        {
            path: "about",
            element:<About/>
        }

      ]
      
    },
  ]);


  export default router;