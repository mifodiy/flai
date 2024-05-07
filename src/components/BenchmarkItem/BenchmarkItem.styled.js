import styled from "styled-components";

export const StyledBenchmarkItem = styled.li`
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
`;

export const BenchmarkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;
export const BenchmarkItemContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const BenchmarkIcon = styled.img``;

export const BenchmarkItemTitle = styled.h3``;

export const BenchmarkValue = styled.span`
  &::after {
    content: "%";
  }
`;

export const BenchmarkTrack = styled.div`
  height: 8px;
  width: 100%;
  background-color: #212122;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 8px;
    width: ${(props) => props.$value + "%"};
    top: 0;
    left: 0;
    background-color: #d1fd0a;
    border: 2px solid #3f461e;
  }

  &::after {
    content: "";
    position: absolute;
    height: 10px;
    width: 2px;
    top: -1px;
    left: calc(${(props) => props.$value + "%"} - 2px);
    background-color: #fff;
  }
`;
