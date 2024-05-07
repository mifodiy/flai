import { useEffect, useState } from "react";
import { TabsContainer, Tab, Content } from "./Tabs.styled";
import {
  RecommendInfo,
  RecommendItem,
  RecommendList,
} from "../Recommend/Recommend.styled";
import sadIcon from "../../assets/emoji1.png";
import normIcon from "../../assets/emoji2.png";
import smileIcon from "../../assets/emoji3.png";
import Checkbox from "../Checkbox/Checkbox";
import Accordion from "../Accordion/Accordion";
import { useCheckboxStore } from "../../store/store";

const Tabs = () => {
  const [active, setActive] = useState(0);
  const handleTabClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const selectedCheckbox = useCheckboxStore((state) => state.count);

  const [emojiIcon, setEmojiIcon] = useState(normIcon);

  useEffect(() => {
    switch (selectedCheckbox) {
      case 0:
      case 1:
      case 2:
      case 3:
        setEmojiIcon(sadIcon);
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        setEmojiIcon(normIcon);
        break;
      case 8:
      case 9:
      case 10:
        setEmojiIcon(smileIcon);
        break;
      default:
        setEmojiIcon(normIcon);
    }
  }, [selectedCheckbox]);

  return (
    <>
      <TabsContainer>
        <Tab onClick={handleTabClick} $active={active === 0} id={0}>
          Base
        </Tab>

        <Tab onClick={handleTabClick} $active={active === 1} id={1} disabled>
          Advanced
        </Tab>
      </TabsContainer>

      <Content $active={active === 0}>
        <RecommendInfo>
          <img src={emojiIcon} alt="" />
          <p>
            you followed <span>{selectedCheckbox}/10</span> recommendations
          </p>
        </RecommendInfo>

        <RecommendList>
          <RecommendItem>
            <Checkbox
              value={"first-value"}
              checked={false}
              name={"first-value"}
              id={"first-value"}
              label={"02:15 Recommendations for your song"}
              disabled={false}
            />
          </RecommendItem>
          <RecommendItem>
            <Accordion title={"Duration for segments of your sound promo"}>
              <Checkbox
                value={"second-value"}
                checked={false}
                name={"second-value"}
                id={"second-value"}
                label={"Duration for segments of your sound promo"}
                disabled={false}
                $isNest={true}
              />
              <Checkbox
                value={"third-value"}
                checked={false}
                name={"third-value"}
                id={"third-value"}
                label={"Duration for segments of your sound promo"}
                disabled={false}
                $isNest={true}
              />
            </Accordion>
          </RecommendItem>
          <RecommendItem>
            <Checkbox
              value={"fourth-value"}
              checked={false}
              name={"fourth-value"}
              id={"fourth-value"}
              label={"Release day"}
              disabled={true}
            />
          </RecommendItem>
          <RecommendItem>
            <Checkbox
              value={"fifth-value"}
              checked={false}
              name={"fifth-value"}
              id={"fifth-value"}
              label={"Promotion"}
              disabled={false}
            />
          </RecommendItem>
          <RecommendItem>
            <Checkbox
              value={"sixth-value"}
              checked={false}
              name={"sixth-value"}
              id={"sixth-value"}
              label={"Duet"}
              disabled={true}
            />
          </RecommendItem>
          <RecommendItem>
            <Checkbox
              value={"seventh-value"}
              checked={false}
              name={"seventh-value"}
              id={"seventh-value"}
              label={"The best location for the potential of your sound"}
              disabled={true}
            />
          </RecommendItem>
        </RecommendList>
      </Content>
      <Content $active={active === 1}>
        <p>Content 2</p>
      </Content>
    </>
  );
};

export default Tabs;
