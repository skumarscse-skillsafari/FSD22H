import { Link, useOutletContext } from "react-router-dom";
const Products = () => {
  const products = useOutletContext();
  console.log(products);
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
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
