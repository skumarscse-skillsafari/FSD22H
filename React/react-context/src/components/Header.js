// import { CartState } from "../context/Context";
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
  // const {
  //   state: { cart },
  //   dispatch,
  //   productDispatch,
  // } = CartState();
  const cart = [
    {
      id: "1a9ea31b-34b2-43b3-9198-7fc76cad5812",
      image: "https://loremflickr.com/640/480/abstract?lock=69608",
      inStock: 6,
      name: "Practical Bronze Chicken",
      price: "733",
      quickDelivery: false,
      ratings: 3,
    },
    {
      id: "5847168d-762a-4d0f-9830-9267bf3df39e",
      image: "https://loremflickr.com/640/480/abstract?lock=24621",
      inStock: 6,
      name: "Refined Wooden Keyboard",
      price: "233",
      quickDelivery: false,
      ratings: 3,
    },
    {
      id: "98a806d4-c2ff-440a-8a98-82d49fbfab5a",
      image: "https://loremflickr.com/640/480/abstract?lock=12914",
      inStock: 0,
      name: "Rustic Fresh Table",
      price: "265",
      quickDelivery: true,
      ratings: 1,
    },
  ];
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
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{5}</Badge>
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
