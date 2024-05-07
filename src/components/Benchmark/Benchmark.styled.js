import styled from "styled-components";
import benchmarkIcon from "../../assets/benchmark-icon.svg";

export const BenchmarkTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  position: relative;
  padding-left: 30px;
  margin-bottom: 34px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${benchmarkIcon});
  }
`;

export const BenchmarkContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 48px;
`;

export const BenchmarkList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
