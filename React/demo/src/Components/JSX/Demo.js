import { data, imageOneExp, imageTwoExp, displayMessage } from "./data";
import DemoDetails from "./DemoDetails";
let name = "Jack";
let subject = "NodeJS";
console.log(data);
let moreDetails = false;
displayMessage("John");
function Demo() {
  return (
    <>
      <h1>Welcome, {name}</h1>
      <p>Introduction to {subject}</p>
      <hr />
      {/* <img src={imageOneExp} alt="image-one" height="250px" width="250px" />
      <img src={imageTwoExp} alt="image-two" height="250px" width="250px" /> */}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>
              Title: <i>{item.title}</i>
            </h2>
            <h3>
              Description: <i>{item.description}</i>
            </h3>
            <DemoDetails restItem={item} />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Demo;
