import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MaterialsType from "./pages/MaterialsType";
import Materialslist from "./pages/Matrialslist";
import Professional from "./pages/Professionals";
import Testimonial from "./pages/Testimonail";
import { Routes,Route } from "react-router-dom";



 function App() {
  return (
    <>
    <Routes>
       <Route  path="/" element={ <Home />}/>
       <Route  path="/about" element={ < About/>}/>
       <Route  path="/materialslist" element={ < Materialslist/>}/>
       <Route  path="/materialsType" element={ < MaterialsType/>}/>
       <Route  path="/professional" element={ < Professional/>}/>
       <Route  path="/testimonal" element={ < Testimonial/>}/>
       <Route  path="/contact" element={ < Contact/>}/>
    </Routes>
    {/* <About/>
    <Materialslist />
    <MaterialsType />
    <Professional />
    <Testimonial />
    <Contact />
    <Home /> */}
    </>
    
    
  );
}

export default App;
