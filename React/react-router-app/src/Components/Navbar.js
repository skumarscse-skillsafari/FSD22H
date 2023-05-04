import { Link } from "react-router-dom";
const Navbar = () => {
  let style = {
    display: "flex",
    justifyContent: "space-around",
    alignItem: "center",
  };
  return (
    <div>
      <ul style={style}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
