import styled from "styled-components";

export const StyledAccordion = styled.section``;

export const AccordionWrapper = styled.div`
  display: inline-block;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  h3 {
    font-weight: 600;
    line-height: 1;
  }
`;

export const AccordionIcon = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #d1fd0a;
  }

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #d1fd0a;
    transition: opacity ease-in-out 0.3s;
    opacity: ${(props) => (props.$isActive ? "0" : "1")};
  }
`;

export const AccordionContent = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.$isActive ? "1fr" : "0fr")};
  transition: grid-template-rows 500ms;

  & > * {
    overflow: hidden;
    padding-left: 30px;
  }
`;

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;
`;
