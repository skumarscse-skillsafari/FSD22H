import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <>
      <Navbar bg="primary" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Products App
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignright="true">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.map((prod) => (
                  <span key={prod.id} className="cartItem">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="cartItemImg"
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>{prod.price}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go to Cart
                  </Button>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
