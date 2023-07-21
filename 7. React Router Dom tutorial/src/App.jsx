import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="navbarLinks">
          Home
        </Link>
        <Link to="/about" className="navbarLinks">
          About
        </Link>
        <Link to="/contact" className="navbarLinks">
          Contact
        </Link>
        <Link to="/products" className="navbarLinks">
          Products
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/:name" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
