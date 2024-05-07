import styled from "styled-components";
import recommendIcon from "../../assets/recommend-icon.svg";
import recommendBg from "../../assets/recommend-bg.png";

export const RecommendTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  position: relative;
  padding-left: 30px;
  margin-bottom: 27px;

  span {
    color: #d1fd0a;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${recommendIcon});
  }
`;

export const RecommendInfo = styled.div`
  padding: 10px 0;
  background: url(${recommendBg});
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 30px;

  span {
    color: #d1fd0a;
  }
`;

export const RecommendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 80px;
`;

export const RecommendItem = styled.li``;
