import "./style/App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // new version of react-router-dom does not suppoort Switch
import Home from "./components/Home/home"; // use Home instead of home for your component name
import Instruction from "./components/Instruction/instruction"; // use Home instead of Instruction for your component name

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/instructions" element={<Instruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
