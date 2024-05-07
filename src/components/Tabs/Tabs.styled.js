import styled from "styled-components";
import lockIcon from "../../assets/lock-icon.svg";

export const TabsContainer = styled.div`
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 30px;
  margin-bottom: 19px;
`;

export const Tab = styled.button`
  font-size: 14px;
  color: ${(props) => (props.$active ? "#D1FD0A" : "#fff")};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -12px;
    height: 1px;
    background-color: ${(props) => (props.$active ? "#D1FD0A" : "transparent")};
  }

  &:hover {
    &::before {
      background-color: #d1fd0a;
    }
  }

  &:disabled {
    color: #8e8f92;
    padding-right: 22px;
    cursor: default;

    &::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${lockIcon});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &::before {
      background-color: transparent;
    }
  }
`;
export const Content = styled.div`
  ${(props) => (props.$active ? "" : "display:none")}
`;
