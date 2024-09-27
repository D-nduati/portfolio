import App from "./App";
import Contacts from "./components/content/Contacts";
import About from "./components/content/About";
import Projects from "./components/content/Projects";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/contacts" element={<Contacts />} />,
      <Route path="/projects" element={<Projects />} />,
      <Route path="/about" element={<About />} />,
    </Route>
  )
);

export default router;
