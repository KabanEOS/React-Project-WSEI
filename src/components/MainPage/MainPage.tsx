import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Publications from "./Publications"
import Ecosystem from "./Ecosystem"
import Entities from "./Entities"
import Administration from "./Administration"
import People from "./People"

import { Content } from "./Content";
import { TopBar } from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { Colors } from "../../styledHelpers/Colors";

import useDropdown from 'react-dropdown-hook';
import { FC } from "react";

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
          <BrowserRouter forceRefresh={true}>
            <Route path="/Home" component={Publications} />
            <Route path="/Publications" component={Publications} />
            <Route path="/People" component={People} />
            <Route path="/Entities" component={Entities} />
            <Route path="/Administration" component={Administration} />
            <Route path="/Ecosystem"  component={Ecosystem} />
          </BrowserRouter>
          <Content />
        </RightContainer>
      </ContentContainer>
    </GlobalContainer>
  );
};

export default MainPage;
