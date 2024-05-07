import { Container } from "../Container/Container.styled";
import Tabs from "../Tabs/Tabs";
import { RecommendTitle } from "./Recommend.styled";

const Recommend = () => {
  return (
    <Container>
      <RecommendTitle>
        <span>Recommendations </span> from AI
      </RecommendTitle>
      <Tabs />
    </Container>
  );
};

export default Recommend;
