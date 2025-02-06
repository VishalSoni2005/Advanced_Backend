// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./pagesOne/06_Layout";
// import Home from "./pagesOne/01_Home";
// import Contact from "./pagesOne/02_Contact";
// import About from "./pagesOne/03_About";
// import Blog from "./pagesOne/04_Blog";
// import Dashboard from "./pagesOne/05_Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}> {/* parent level route */}
//           <Route path="home" element={<Home />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="about" element={<About />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="dashboard" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// export default function App() {
//   const [jokes, serJokes] = useState([]);
//   const [click, handleClick] = useState(false);

//   useEffect(() => {
//     axios
//       .get("/api/jokes")
//       .then((res) => {
//         serJokes(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching jokes: ", err);
//         serJokes([]);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Welcom to Jokes</h1>

//       <h2 className="text-3xl">Number of Jokes: {jokes.length}</h2>
//       <button onClick={() => handleClick(!click)}>Get Jokes</button>

//       {click && jokes.map((joke, idx) => (
//         <div key={idx}>
//           <h2>{joke.joke}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }
import Login from "./pagesTwo/Login";
import Register from "./pagesTwo/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center ">
        <h1>Hii, How are you ?</h1>
        <h2>ComeOn Login nah !!! </h2>

        <nav>
          <Link to="/login"> Login</Link>
          <Link to="/register"> Register</Link>
        </nav>

        <div className="h-[200px] w-[500px] mt-16">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
