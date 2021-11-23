import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import SiteHeader from "./components/SiteHeader"

function App() {
  return (
        <div className="App">
          <Router>
        <SiteHeader />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/details/:id" element={<ReviewDetails />} />
                <Route exact path="/category/:id" element={<Category />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App