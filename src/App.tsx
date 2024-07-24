import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { busApiSlice } from "./APIs/apiSlice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider store={store}>
        {/* <ApiProvider api={busApiSlice}> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        {/* </ApiProvider> */}
      </Provider>
    </div>
  );
}

export default App;
