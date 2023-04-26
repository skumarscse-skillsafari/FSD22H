import UserDetailsProp from "./UserDetailsProp";
let PropDemo = () => {
  let displayName = (name) => {
    console.log(name);
  };
  const userDetails = [
    {
      id: 1,
      name: "John",
      age: 30,
      isAdmin: true,
      address: { city: "Chennai", state: "Tamilnadu" },
    },
    {
      id: 2,
      name: "Jack",
      age: 25,
      isAdmin: false,
      address: { city: "Bangalore", state: "Karnataka" },
    },
    {
      id: 3,
      name: "Mary",
      age: 28,
      isAdmin: true,
      address: { city: "Mumbai", state: "Maharastra" },
    },
    {
      id: 4,
      name: "Robert",
      age: 35,
      isAdmin: false,
      address: { city: "Chennai", state: "Tamilnadu" },
    },
    {
      id: 5,
      name: "Prince",
      age: 19,
      isAdmin: true,
      address: { city: "Mumbai", state: "Maharastra" },
    },
  ];
  return (
    <div>
      {userDetails.map((userDetail) => (
        <div key={userDetail.id}>
          <h1>Username: {userDetail.name}</h1>
          <UserDetailsProp {...userDetail} displayName={displayName} />
        </div>
      ))}
    </div>
  );
};

export default PropDemo;
