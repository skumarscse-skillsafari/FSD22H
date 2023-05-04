import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
const SharedComponent = () => {
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
      <h2>Shared Component</h2>
      <Outlet context={products} />
    </div>
  );
};

export default SharedComponent;
