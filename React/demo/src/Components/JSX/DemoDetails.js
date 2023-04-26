function DemoDetails({ restItem }) {
  console.log(restItem);
  let { id, category, image, price, rating } = restItem;
  //   console.log(image);
  //   console.log(price);
  //   console.log(rating);
  return (
    <>
      <p>
        Category: <i>{category}</i>
      </p>
      <img src={image} alt={`image-${id + 1}`} height="150px" width="150px" />
      <p>Price: {price}</p>
      <p>Rating: {rating.rate}</p>
      <p>Count: {rating.count}</p>
    </>
  );
}

export default DemoDetails;
