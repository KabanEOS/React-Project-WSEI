import React, { FC } from "react";
import styled from "styled-components";

import { LatestPublications } from "./organisms/LatestPublications";
import { Resume } from "./organisms/Resume";
import { Workspaces } from "./organisms/Workspaces";
import { useLocation } from "react-router-dom";

const ContentWrapper = styled.div` 
  width:90%;
  padding:12px;
  margin-right:10vw;

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