import React, { FC } from "react";
import styled from "styled-components";

import { TopBar } from "../components/TopBar/TopBar";
import { Colors } from "../styledHelpers/Colors";
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'
import { LatestPublications } from "../components/Home/organisms/LatestPublications";
import { Resume } from "../components/Home/organisms/Resume";
import { Workspaces } from "../components/Home/organisms/Workspaces";
import { useLocation } from "react-router-dom";

const ContentWrapper = styled.div` 
  width:100%;
  padding:12px;
`;
export const Home: FC = () => {
  const location = useLocation();
  console.log(location)
  return (
    <ContentWrapper>
      <LatestPublications />
      <Workspaces />
      <Resume />

    </ContentWrapper>
  );
};