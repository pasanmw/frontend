
import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

import Signin from "./containers/signin";
import Signup from "./containers/signup";
import Home from "./containers/dashboard";
function App() {
  return (

    <BrowserRouter>
       <Routes>
    <Route path="/" element={<Signin/>} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/home" element={<Home />} />
     </Routes>
      </BrowserRouter>
  );
}

export default App;
