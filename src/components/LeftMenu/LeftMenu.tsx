import { FC } from "react";
import styled from "styled-components";

import { Wrapper2, InnerWrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";

const CustomImg = styled.img``;

const LeftMenuContainer = styled.div`
  width: 100%;
  /* align-items: center; */
  display: flex;
  flex-direction: row;
`;

const LeftMenuWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  padding: 4px;
`;

export const LeftMenu: FC = () => {
  return (
    <LeftMenuContainer>
      <LeftMenuWrapper>Left Menu af</LeftMenuWrapper>
    </LeftMenuContainer>
  );
};
