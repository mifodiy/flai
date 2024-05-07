import { useState } from "react";
import {
  StyledAccordion,
  AccordionWrapper,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionInner,
} from "./Accordion.styled";

function Accordion({ children, title }) {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledAccordion>
      <AccordionWrapper>
        <AccordionHeader onClick={handleClick} $isActive={isActive}>
          <AccordionIcon $isActive={isActive}></AccordionIcon>
          <h3>{title}</h3>
        </AccordionHeader>
        <AccordionContent $isActive={isActive}>
          <AccordionInner>{children}</AccordionInner>
        </AccordionContent>
      </AccordionWrapper>
    </StyledAccordion>
  );
}

export default Accordion;
