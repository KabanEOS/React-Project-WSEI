import { FC } from "react";
import styled from "styled-components";

import { Wrapper2, InnerWrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";

//media import
import HomeIconPhoto from "../../media/icons/house.svg";
import ArrowDownIconPhoto from "../../media/icons/arrow-down.svg";

const ExpandedMenuContainer = styled.div`
  height: 27px;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  /* border: 1px solid; */
  border-color: ${Colors.LightGray};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${Colors.WhiteSmoke};
  }
`;

const HomeIcon = styled.img`
  margin-left: 3px;
`;

const ArrowDown = styled.img`
  height: 6px;
  justify-content: flex-end;
  fill: ${Colors.WhiteSmoke};
`;
const CategoryName = styled.div`
  font-family: "Open Sans", sans-serif;
  margin-left: 3px;
  width: 70%;
`;

export const ExpandedMenu: FC = () => {
  return (
    <ExpandedMenuContainer>
      <HomeIcon src={HomeIconPhoto} />
      <CategoryName>Home</CategoryName>
      <ArrowDown src={ArrowDownIconPhoto} />
    </ExpandedMenuContainer>
  );
};
