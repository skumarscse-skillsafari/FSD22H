let ProductDetails = ({ otherProps }) => {
  let {
    id,
    category,
    price,
    rating: { rate },
  } = otherProps;
  return (
    <div>
      <h3>
        <u>Product Details:</u>
      </h3>
      <p>Product ID:{id}</p>
      <p>Product Category:{category}</p>
      <p>Product Price: &#8377;{price}</p>
      <p>Product Rating:{rate}</p>
    </div>
  );
};

export default ProductDetails;
