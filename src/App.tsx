import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";

function App() {
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
