import React from "react";
import { Profile } from "./pages/Profile";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/Searchresults";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/" element={<Profile/>} />
          <Route path="/Search_Results/" element={<SearchResults/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
