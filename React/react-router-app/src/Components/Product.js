import { useParams, Link, useOutletContext } from "react-router-dom";
const Product = () => {
  console.log(useParams());
  let { productId } = useParams(); // { productId: 1}
  console.log(productId); // 1
  const products = useOutletContext();
  const product = products.find((product) => product.id === Number(productId));
  console.log(product);

  return (
    <div>
      <h2>Single Product Component</h2>
      <p>ID: {product?.id}</p>
      <p>Title: {product?.title}</p>
      <p>Description: {product?.description}</p>
      <p>Category: {product?.category}</p>
      <p>Price: {product?.price}</p>
      <p>
        <img src={product?.image} height="100px" width="100px" />
      </p>
      <p>Rate: {product?.rating?.rate}</p>
      <p>Count: {product?.rating?.count}</p>
      <Link to="/products">Back to Products Page</Link>
    </div>
  );
};

export default Product;
