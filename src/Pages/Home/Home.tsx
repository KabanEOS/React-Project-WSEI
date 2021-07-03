import React, { FC } from "react";
import styled from "styled-components";

import { LatestPublications } from "./organisms/LatestPublications";
import { Resume } from "./organisms/Resume";
import { Workspaces } from "./organisms/Workspaces";
import { useLocation } from "react-router-dom";
import { ContentWrapper } from "./styles/Home.style";


export const Home: FC = () => {
  const location = useLocation();
  return (
    <ContentWrapper>
      <LatestPublications />
      <Workspaces />
      <Resume />
    </ContentWrapper>
  );
};