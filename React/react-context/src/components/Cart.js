import { ListGroup, Row, Col, Image } from "react-bootstrap";

const Cart = () => {
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
    <div className="home">
      <div className="productContainer">
        {cart.map((prod) => (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
                <Image src={prod.image} alt={prod.name} fluid rounded />
              </Col>
              <Col md={2}>
                <span>{prod.name}</span>
              </Col>
              <Col>
                <span>Rs. {prod.price}</span>
              </Col>
              <Col>
                <span>{prod.ratings}</span>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </div>
    </div>
  );
};

export default Cart;
