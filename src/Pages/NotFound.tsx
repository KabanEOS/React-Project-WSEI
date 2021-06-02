import React, { FC } from "react";
import styled from "styled-components";

import { TopBar } from "../components/TopBar/TopBar";
import { Colors } from "../styledHelpers/Colors";
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';

import img404 from "./../media/404cat.svg";

const ContentWrapper = styled.div`
  display: flex;
  height: 60vh;
  width: 60vw; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  padding-top: 50px;
`;
const NotFoundImg = styled.img` 
  height: 500;
  width: 500px;
`;

export const NotFound: FC = () => {
  return (
    <ContentWrapper>
      <NotFoundImg src={img404} />
    </ContentWrapper>
  );
};