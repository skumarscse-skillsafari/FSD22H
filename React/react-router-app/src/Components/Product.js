import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  console.log(useParams());
  let { productId } = useParams();
  console.log(productId);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  const product = products.find((product) => product.id === Number(productId));
  console.log(product);
  return (
    <div>
      <h2>Single Product Component</h2>
    </div>
  );
};

export default Product;
