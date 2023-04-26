import { useState } from "react";
import data from "./data";

let Products = () => {
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState([]);
  console.log(cart);
  let card = {
    display: "flex",
    flexWrap: "wrap",
  };

  let child = {
    minHeight: "500px",
    width: "250px",
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
  };

  let addToCart = (product) => {
    console.log(product);
    // console.log(cart);
    setCart((cart) => [...cart, product]);
    setCount((count) => (count = count + 1));
  };
  return (
    <div>
      <h2>Products Component</h2>
      <h3>No. of products in cart: {count}</h3>
      <h3>The Products in the Card: {cart.join(" ")}</h3>
      <hr />
      <div style={card}>
        {data.map((product) => (
          <div key={product.id} style={child}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "80px", width: "80px" }}
            />
            <p>{product.price}</p>
            <button
              onClick={() => {
                addToCart(product.title);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
