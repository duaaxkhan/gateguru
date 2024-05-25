import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services";
import About from "./components/About";

import IT from "./components/IT";
import Dplot from "./components/Dplot";
import TrainingServices from "./components/TrainingServices";





function App() {
  return (
<>
  <BrowserRouter>
  <Routes>
    <Route index element={<Main/>}/>
    <Route path="/Home" element={<Main/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/ITServices" element={<IT/>}/>
    <Route path='/Dplot'element={<Dplot/>}/>
    <Route path='/TrainingServices'element={<TrainingServices/>}/>
  </Routes>
  </BrowserRouter> 
  
  </>
  );
}

export default App;
