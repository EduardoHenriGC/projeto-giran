import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topseries from "./pages/topseries/index";
import Topfilmes from "./pages/topfilmes/index";

import Topjogos from "./pages/topjogos/index";
import Navbarmenu from "./components/header/index";
import Hero from "./pages/hero/index";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <Router>
        <Navbarmenu />
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="topfilmes" element={<Topfilmes />}></Route>
          <Route path="topjogos" element={<Topjogos />}></Route>

          <Route path="topseries" element={<Topseries />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
