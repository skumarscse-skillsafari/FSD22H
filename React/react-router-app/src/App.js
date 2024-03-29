import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Product from "./Components/Product";
import SharedComponent from "./Components/SharedComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<SharedComponent />}>
            {/* path="/products/:productId" */}
            <Route index element={<Products />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
