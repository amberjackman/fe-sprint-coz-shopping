import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
