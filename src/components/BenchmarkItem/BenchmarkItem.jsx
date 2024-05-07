import {
  BenchmarkItemContainer,
  BenchmarkHeader,
  BenchmarkIcon,
  StyledBenchmarkItem,
  BenchmarkTrack,
  BenchmarkValue,
  BenchmarkItemTitle,
} from "./BenchmarkItem.styled";

const BenchmarkItem = ({ icon, title, value }) => {
  return (
    <StyledBenchmarkItem>
      <BenchmarkHeader>
        <BenchmarkItemContainer>
          <BenchmarkIcon src={icon} alt={title} />
          <BenchmarkItemTitle>{title}</BenchmarkItemTitle>
        </BenchmarkItemContainer>
        <BenchmarkValue>{value}</BenchmarkValue>
      </BenchmarkHeader>
      <BenchmarkTrack $value={value} />
    </StyledBenchmarkItem>
  );
};

export default BenchmarkItem;
