import {
  BenchmarkTitle,
  BenchmarkList,
  BenchmarkContainer,
} from "./Benchmark.styled";
import { Container } from "../Container/Container.styled";
import BenchmarkItem from "../BenchmarkItem/BenchmarkItem";
import { useAudienceStore } from "../../store/store";

// const benchmark = [
// 	{
// 		id: 1,
// 		iconUrl: beautyIcon,
// 		title: "Beauty",
// 		value: 40
// 	},
// 	{
// 		id: 2,
// 		iconUrl: musicIcon,
// 		title: "Music",
// 		value: 31
// 	},
// 	{
// 		id: 3,
// 		iconUrl: travelIcon,
// 		title: "Travel",
// 		value: 22
// 	},
// 	{
// 		id: 4,
// 		iconUrl: showIcon,
// 		title: "Show",
// 		value: 14
// 	},
// 	{
// 		id: 5,
// 		iconUrl: sportIcon,
// 		title: "Sport",
// 		value: 12
// 	},
// 	{
// 		id: 6,
// 		iconUrl: healthIcon,
// 		title: "Health",
// 		value: 9
// 	},
// 	{
// 		id: 7,
// 		iconUrl: otherIcon,
// 		title: "Other",
// 		value: 6
// 	}

// ]

const Benchmark = () => {
  const benchmark = useAudienceStore((state) => state.benchmark);
  const sortBenchmark = benchmark.sort((prev, next) => next.value - prev.value);
  return (
    <Container>
      <BenchmarkTitle>Sound Audience</BenchmarkTitle>
      <BenchmarkContainer>
        <BenchmarkList>
          {sortBenchmark
            .slice(0, Math.ceil(sortBenchmark.length / 2 - 1))
            .map((item) => (
              <BenchmarkItem
                key={item.id}
                icon={item.iconUrl}
                title={item.title}
                value={item.value}
              />
            ))}
        </BenchmarkList>
        <BenchmarkList>
          {sortBenchmark
            .slice(Math.ceil(sortBenchmark.length / 2 - 1))
            .map((item) => (
              <BenchmarkItem
                key={item.id}
                icon={item.iconUrl}
                title={item.title}
                value={item.value}
              />
            ))}
        </BenchmarkList>
      </BenchmarkContainer>
    </Container>
  );
};

export default Benchmark;
