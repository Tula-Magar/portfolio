import "./App.css";

import ScrollToTop from "./Scroll/ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navitgation from "./Navigation/Navigation";

import Home from "./General/Home";
import About from "./General/AboutMe";
import Contact from "./General/Contact";
import Footer from "./General/Footer";
import Experience from "./Work/Experience";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navitgation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
