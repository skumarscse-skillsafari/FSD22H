import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
const Home = () => {
  const {
    state: { products },
    productState: { byStock, byQuickDelivery, byRating, searchQuery, sort },
  } = CartState();

  function transformProducts() {
    let sortedProducts = products;

    if (sort) {
      // [].sort((a, b) => b - a)
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byQuickDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.quickDelivery);
    }
    return sortedProducts;
  }
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
