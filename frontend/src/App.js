import React from "react";
import { Profile } from "./pages/Profile";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
