import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="routesWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
