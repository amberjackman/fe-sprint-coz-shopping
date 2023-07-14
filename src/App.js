import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="App">
          <header />
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
