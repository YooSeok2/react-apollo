import React from "react";
import { HashRouter,Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
// import Detail from "../routes/Detail";
import ExchangeRates from "./ExchangeRates";
import '../css/App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/:id" element={<ExchangeRates/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
