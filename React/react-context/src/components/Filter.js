import { Form, Button } from "react-bootstrap";

const Filter = () => {
  return (
    <div className="filters">
      <span className="title">Filter Section</span>
      <span>
        <Form.Check
          inline
          label="A-Z"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Z-A"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Quick Delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>Filter by Rating</span>
      <Button variant="primary">Clear Filters</Button>
    </div>
  );
};

export default Filter;
