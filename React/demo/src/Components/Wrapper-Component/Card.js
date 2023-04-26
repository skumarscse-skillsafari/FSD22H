let Card = ({ title, children }) => {
  console.log(title);
  console.log(children);
  return (
    <div>
      <h2>Title: {title}</h2>
      {children}
    </div>
  );
};

export default Card;
