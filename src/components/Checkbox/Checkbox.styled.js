import styled, { keyframes } from "styled-components";
import decor from "../../assets/checkbox-deco.svg";
import lockIcon from "../../assets/lock-icon.svg";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  padding: 8px 10px 8px 40px;
  background-color: ${(props) => (props.disabled ? "#212124" : "transparent")};
  color: ${(props) => (props.disabled ? "#8E8F92" : "#fff")};

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 20px;
    left: -12px;
    top: -3px;
    background-image: url(${decor});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: ${(props) =>
      props.$isNest && !props.disabled ? "block" : "none"};
  }
`;

//props.isNest ? "block" : "none"

export const Indicator = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${Input}:not(:disabled):checked & {
    //background: #d1d1d1;
  }

  ${Label}:hover & {
    //background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
  }

  ${Input}:checked + &::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #d1fd0a;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export const ComingSoonIcon = styled.span`
  font-weight: 700;
  color: #d1fd0a;
  padding-left: 22px;
  position: relative;
  margin-left: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: url(${lockIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
