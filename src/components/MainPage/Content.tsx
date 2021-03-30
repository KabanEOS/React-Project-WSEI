import React, { FC } from "react";
import styled from "styled-components";

import { TopBar } from "../TopBar/TopBar";
import { Colors } from "../../styledHelpers/Colors";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  padding: 4px;
`;

export const Content: FC = () => {
  return (
    <ContentContainer>
      <ContentWrapper>tiruriruuuu</ContentWrapper>
    </ContentContainer>
  );
};
