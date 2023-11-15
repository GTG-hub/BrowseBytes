import React from "react";
import { Profile } from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/Searchresults";
import { Search } from "./pages/Search";
import { Signin_Register } from "./pages/Signin_Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/" element={<Profile />} />
          <Route path="/Search_Results/" element={<SearchResults />} />
          <Route path="/Signin_Register" element={<Signin_Register />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
