

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pagesOne/06_Layout";
import Home from "./pagesOne/01_Home";
import Contact from "./pagesOne/02_Contact";
import About from "./pagesOne/03_About";
import Blog from "./pagesOne/04_Blog";
import Dashboard from "./pagesOne/05_Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> {/* parent level route */}
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
