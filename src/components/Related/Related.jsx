import { Container } from "../Container/Container.styled";
import { RelatedContainer, RelatedTitle } from "./Related.styled";
import bell from "../../assets/bell.png";

const Related = () => {
  return (
    <Container>
      <RelatedTitle>
        <span>Related </span>Sounds
      </RelatedTitle>

      <RelatedContainer>
        <img src={bell} alt="Bell" />
        <p>Notify me when these features start working</p>
        <button>Notify Me</button>
      </RelatedContainer>
    </Container>
  );
};

export default Related;
