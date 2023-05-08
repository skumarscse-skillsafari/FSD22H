import { CartState } from "../context/Context";
const Home = () => {
  console.log(CartState());
  return (
    <div>
      <h2>Home Component</h2>
    </div>
  );
};

export default Home;
