import ProductDetails from "./ProductDetails";
import Card from "./Card";

let ProductCard = ({ product }) => {
  let { title, description, ...otherProps } = product;
  //   console.log(otherProps);
  return (
    <Card title={title}>
      <h2>Description: {description}</h2>
      <ProductDetails otherProps={otherProps} />
      <hr />
    </Card>
  );
};

export default ProductCard;
