// import logo from "./logo.svg";
import "./App.css";
// import "./Components/style.css";
// import Header from "./Components/Intro/Header";
// import Navbar from "./Components/Intro/Navbar";
// import Section from "./Components/Intro/Section";
// import Footer from "./Components/Intro/Footer";
// import Demo from "./Components/JSX/Demo";
// import PropDemo from "./Components/JSX/PropDemo";
// import products from "./Components/Wrapper-Component/data";
// import ProductCard from "./Components/Wrapper-Component/ProductCard";
// import StyleComponent from "./Components/Style-Component/StyleComponent";
// import Counter from "./Components/Counter/Counter";
import Products from "./Components/Counter/Products";

function App() {
  return (
    <div className="App">
      {/* JSX => JavaScript / HTML or XML */}
      {/* <Header />
      <Navbar />
      <Section />
      <Footer /> */}
      {/* <Demo /> */}
      {/* <PropDemo /> */}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      {/* <StyleComponent /> */}
      {/* <Counter /> */}
      <Products />
    </div>
  );
}

export default App;
