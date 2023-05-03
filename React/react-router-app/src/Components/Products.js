import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(products);
  return (
    <div>
      <h2>Products Component</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>Title: {product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <Link to={`/products/${product.id}`}>More details...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
