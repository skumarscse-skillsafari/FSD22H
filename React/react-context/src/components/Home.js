import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
const Home = () => {
  const {
    state: { products },
    productState: { byStock, byQuickDelivery, byRating, searchQuery },
  } = CartState();
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
