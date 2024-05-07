import { Container } from "../Container/Container.styled";
import { StyledGrowth, StyledGrowthControl } from "./Growth.styled";
import thumbIcon from "../../assets/thumbs-up-icon.svg";
import starsIcon from "../../assets/stars-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import chart from "../../assets/chart.png";
import Select from '../Select/Select';

const Growth = () => {
  return (
    <Container>
      <StyledGrowth>
        <h2>Growth</h2>
        <ul>
          <li>
            <span>
              <img src={thumbIcon} alt="" />
            </span>
            <p>High Trending Chance</p>
          </li>
          <li>
            <span>
              <img src={starsIcon} alt="" /> 8
            </span>
            <p>Sound assessment from our AI</p>
          </li>
          <li>
            <span>
              <img src={locationIcon} alt="" /> 25
            </span>
            <p>Geo Popularity</p>
          </li>
        </ul>
        <img src={chart} alt="Growth chart" />
        <StyledGrowthControl>
					<Select/>
          <div className="btns">
            <button className="btn-growth">Growth</button>
            <button className="btn-ai">AI Prediction</button>
          </div>
        </StyledGrowthControl>
      </StyledGrowth>
    </Container>
  );
};

export default Growth;
