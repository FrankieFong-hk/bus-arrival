import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import RoutePage from "./page/route/RoutePage";

function App() {
  return (
    <div className="max-w-[500px] mx-auto min-h-screen p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route/:routeId/:direction" element={<RoutePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
