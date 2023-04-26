import { useState } from "react";

let Counter = () => {
  //   console.log(useState);
  // userState() => is a function, it takes "initialState" as parameter and return array of
  // two elements, 1. state and 2. stateFunction
  // userState() is a function to update the state variable
  // it takes "initialState" as input
  // useState() => initialValue, stateFunction() => initialValue and return the updated initialValue
  // it return "updated initialState" as output
  // let fruits = ["Apple", "Orange", "Mango"];

  //   let initValue = 0;
  let [initValue, setInitValue] = useState(0);

  let [fruit, setFruit] = useState([]);
  console.log(fruit);
  // let [city, setCity] = useState("Chennai");
  // initValue = 0
  // setInitValue
  //   console.log(initValue); // 0
  //   console.log(setInitValue);

  let increment = () => {
    console.log("Increment");
    setInitValue((initValue) => (initValue = initValue + 1));
    // console.log(initValue++);
  };

  let decrement = () => {
    console.log("Decrement");
    // console.log(initValue--);
    setInitValue((initValue) => (initValue = initValue - 1));
  };

  let reset = () => {
    console.log("Reset");
    setInitValue((initValue) => (initValue = 0));
  };

  let addFruit = () => {
    console.log("Add Fruit");

    setFruit((fruit) => [...fruit]);
    console.log(fruit);
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <h3>{initValue}</h3>
      <hr />
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>{" "}
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>{" "}
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <hr />
      <h2>Fruits Basket: {fruit}</h2>
      <button
        onClick={() => {
          addFruit();
        }}
      >
        Add Fruit
      </button>
    </div>
  );
};

export default Counter;
