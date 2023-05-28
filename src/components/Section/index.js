import DishForm from "../DishForm/index";
import { Post, Wrapper } from "./styled";
import foodImage from "./foodImage.png";

const Section = () => {
  return (
    <Wrapper>
      <DishForm />
      <Post src={foodImage} alt="image" />
    </Wrapper>
  );
};

export default Section;
