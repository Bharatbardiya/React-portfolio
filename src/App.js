import "./styles.css";
import {Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Other from "./components/other";
import Projects from "./components/projects";
import ForZeroFor from "./components/404";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/other" element={<Other />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ForZeroFor />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
