import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <AiFillStar fontSize="15px" />
          {/* {console.log(i)} */}
        </span>
      ))}
    </>
  );
};

export default Rating;
