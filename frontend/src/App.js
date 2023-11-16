import React from "react";
import { Profile } from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/Searchresults";
import { Search } from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Summary from "./pages/summary";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/" element={<Profile />} />
          <Route path="/Search_Results/" element={<SearchResults />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
