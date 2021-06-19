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
import { NotFound } from "./NotFound"

import { Home } from "./Home";
import { TopBar } from "../components/TopBar/TopBar";
import { LeftMenu } from "../components/MainPage/LeftMenu/LeftMenu";
import { Colors } from "../styledHelpers/Colors";

import useDropdown from 'react-dropdown-hook';
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions/usersActions";
import { getComments } from "../actions/commentActions";
import { getPhotos } from "../actions/photoActions";
import { getPosts } from "../actions/postActions";

const ContentContainer = styled.div`
  margin-top: 9px;
  flex-direction: row;
  display: flex;
  width: 90%;
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
  width: 73vw;
  margin-right:10%;
  height: 93%;
`;
const LeftContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 25vw;
  height: 93%;
`;

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const MainPage: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetComments>(getComments());
    return () => {
      // cleanup
    }
  }, [dispatch])

  return (
    <Router>
      <GlobalContainer>
        <TopBar />
        <ContentContainer>
          <LeftContainer>
            <LeftMenu />
          </LeftContainer>
          <RightContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Publications" component={Publications} />
              <Route path="/People" component={People} />
              <Route path="/Entities" component={Entities} />
              <Route path="/Administration" component={Administration} />
              <Route path="/Ecosystem" component={Ecosystem} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </RightContainer>
        </ContentContainer>
      </GlobalContainer>
    </Router>
  );
};

export default MainPage;
