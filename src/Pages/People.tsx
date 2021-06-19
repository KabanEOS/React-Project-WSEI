import { FC } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { ContentWrapper } from "../styledHelpers/Components";

const People: FC = () => {
  const location = useLocation();
  return (
    <ContentWrapper>
      People
    </ContentWrapper>
  );
};

export default People;