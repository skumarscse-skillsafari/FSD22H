let UserDetails = ({ userDetail }) => {
  // props = { userDetails:  { name: "John", age: 25, city: "Chennai" }  }
  // console.log(userDetails);
  let { name, age, city } = userDetail;

  let userInfo = {
    border: "2px solid red",
    marginBottom: "10px",
    padding: "10px",
    width: "150px",
  };

  return (
    <div style={userInfo}>
      <h3>User Details</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserDetails;
