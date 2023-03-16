import { useState } from "react";
import "./App.css";
import ScrollToTop from "./Scroll/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "./General/Home";
import About from "./General/AboutMe";
import Contact from "./General/Contact";
import Footer from "./General/Footer";
import Experience from "./Work/Experience";
import Blog from "./Blog/Blogs";

const App = () => {
  const [theme, setTheme] = useState("App");

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "App" ? "App-dark" : "App"));
  };

  return (
    <div className={theme}>
      <Router>
        <ScrollToTop />
        <Navigation onThemeChange={handleThemeChange} theme={theme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
