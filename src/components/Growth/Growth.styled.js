import styled from "styled-components";
import growthIcon from "../../assets/growth-icon.svg";

export const StyledGrowth = styled.section`
  margin-bottom: 55px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;
    color: #d1fd0a;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background-image: url(${growthIcon});
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 24px;
  }

  li {
    display: flex;
  }

  li p {
    padding: 13px 20px 13px 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    line-height: 0.5;
    margin-left: -20px;
  }

  li span {
    padding: 7px 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    color: #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
  }

  li:nth-child(1) span {
    background: linear-gradient(180deg, #ff98fb 0%, #ffe769 100%), #ffffff;
  }

  li:nth-child(2) span {
    background: #00ff94;
  }

  li:nth-child(3) span {
    background: #ffe600;

    &::after {
      content: "%";
      font-size: 14px;
      align-self: flex-end;
    }
  }
`;

export const StyledGrowthControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btns {
    display: flex;
    font-weight: 700;
  }

  .btn-growth,
  .btn-ai {
    padding: 12px 15px 12px 31px;
    background-color: #212122;
    border-radius: 20px;
    position: relative;
    transition: background-color ease-in-out 0.5s;

    &:hover {
      background-color: #5a5a63;
    }

    &::before {
      content: "";
      position: absolute;
      left: 9px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 100%;
    }
  }

  .btn-growth::before {
    background-color: #c704fe;
  }
  .btn-ai::before {
    background-color: #d1fd0a;
  }
`;
