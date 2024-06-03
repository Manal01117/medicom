import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/desktop";
import Desktop1 from "./pages/desktop1";
import Desktop2 from "./pages/desktop2";
import Desktop3 from "./pages/desktop3";
import Desktop4 from "./pages/desktop4";
import Desktop5 from "./pages/desktop5";
import Desktop6 from "./pages/desktop6";
import Desktop7 from "./pages/desktop7";
import Desktop11 from "./components/desktop1";
import Desktop21 from "./pages/desktop21";
import Desktop12 from "./pages/desktop12";
import Desktop13 from "./pages/desktop13";
import Desktop31 from "./components/desktop3";
import Nurse0 from "./pages/nurse0";
import Update0 from "./pages/update"; 

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-9":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-11":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-10":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-7":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-8":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-12":
        title = "";
        metaDescription = "";
        break;
      case "/nurse-new-account":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-13":
        title = "";
        metaDescription = "";
        break;
      case "/update-nurse-account":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/desktop-9" element={<Desktop1 />} /> 
      <Route path="/desktop-2" element={<Desktop11 />} />
      <Route path="/desktop-11" element={<Desktop2 />} />
      <Route path="/desktop-10" element={<Desktop3 />} />
      <Route path="/desktop-7" element={<Desktop4 />} />
      <Route path="/desktop-8" element={<Desktop5 />} />
      <Route path="/desktop-5" element={<Desktop6 />} />
      <Route path="/desktop-6" element={<Desktop7 />} />
   
      <Route path="/desktop-3" element={<Desktop21 />} />
      <Route path="/desktop-12" element={<Desktop12 />} />
      <Route path="/desktop-13" element={<Desktop13 />} />
      <Route path="/desktop-4" element={<Desktop31 />} />
      <Route path="/nurse-new-account" element={<Nurse0 />} /> 
      <Route path="/update-nurse-account" element={<Update0 />} /> 
    </Routes>
  );
}
export default App;
