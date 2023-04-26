import UserDetails from "./UserDetails";
let userDetails = [
  { name: "John", age: 25, city: "Chennai" },
  { name: "Jack", age: 30, city: "Bangalore" },
  { name: "Mary", age: 18, city: "Mumbai" },
  { name: "Robert", age: 21, city: "Delhi" },
  { name: "Prince", age: 22, city: "Hyderabad" },
];

let container = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

let StyleComponent = () => {
  return (
    <div style={container}>
      {userDetails.map((userDetail, index) => (
        <UserDetails userDetail={userDetail} key={index + 1} />
        // userDetail: { { name: "John", age: 25, city: "Chennai" } }
      ))}
    </div>
  );
};

export default StyleComponent;
