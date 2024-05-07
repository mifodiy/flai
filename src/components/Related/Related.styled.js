import styled from "styled-components";
import relatedIcon from "../../assets/related-icon.svg";

export const RelatedTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;

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
    background-image: url(${relatedIcon});
  }
`;

export const RelatedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 0;
  background-color: #212122;
  margin-bottom: 53px;

  p {
    margin: 0 20px 0 11px;
  }

  button {
    padding: 3px 20px;
    background-color: #d1fd0a;
    color: #000;
    border-radius: 20px;
    transition: background-color ease-in-out 0.5s;

    &:hover {
      background-color: #a6c321;
    }
  }
`;
