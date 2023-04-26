let UserDetailsProp = ({
  age,
  isAdmin,
  address: { city, state },
  name,
  displayName,
}) => {
  let userCity = (city) => {
    console.log(city);
  };
  return (
    <div>
      <h2>User Age: {age}</h2>
      <p>User isAdmin: {String(isAdmin)}</p>
      <p>User City: {city}</p>
      <p>User State: {state}</p>
      <button onClick={() => userCity(city)}>Click</button>
      <button onClick={() => displayName(name)}>Click to see Username</button>
      <hr />
    </div>
  );
};

export default UserDetailsProp;
