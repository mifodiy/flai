import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 129px;
`;

export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 12px 15px;
  font-weight: 700;
  color: #fff;
  background: #212122;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  cursor: pointer;
`;

export const ImageIcon = styled.img`
  transition: transform ease-in-out 0.3s;
  transform: ${(props) =>
    props.$isOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
`;

export const DropDownListContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 15px;
  background: #212122;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  width: 129px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
