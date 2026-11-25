import React, { lazy, Suspense } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Route-based code splitting
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ProjectDetail = lazy(() => import("./components/Projects/ProjectDetail"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  return (
    <Router>
        <div className="App" id="scroll">
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<Preloader load={true} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
