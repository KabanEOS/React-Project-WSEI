import React, { FC } from "react";
import styled from "styled-components";

import { Content } from "./Content";
import { TopBar } from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { Colors } from "../../styledHelpers/Colors";

import useDropdown from 'react-dropdown-hook';

const ContentContainer = styled.div`
  margin-top: 9px;
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 100%;
`;
const GlobalContainer = styled.div`
  background: ${Colors.whiteLikeBackForBack};
  flex-direction: column;
  display: flex;
  width: 100%;
`;
const RightContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 75vw;
  height: 93%;
`;
const LeftContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 25vw;
  height: 93%;
`;


const MainPage: FC = () => {
  return (
    <GlobalContainer>
      <TopBar/>
      <ContentContainer>
        <LeftContainer>
          <LeftMenu />
        </LeftContainer>
        <RightContainer>
          <Content />
        </RightContainer>
      </ContentContainer>
    </GlobalContainer>
  );
};

export default MainPage;
