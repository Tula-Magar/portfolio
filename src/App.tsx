import "./App.css";

import ScrollToTop from "./Scroll/ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navitgation from "./Navigation/Navigation";

import Home from "./General/Home";
import About from "./General/AboutMe";
import Contact from "./General/Contact";
import Footer from "./General/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navitgation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
