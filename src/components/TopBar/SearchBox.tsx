import { FC } from "react";
import styled from "styled-components";

import { Wrapper2, InnerWrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";

//media import
import HomeIconPhoto from "../../media/icons/house.svg";

const SearchBoxContainer = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${Colors.Gray};
	border-radius: 3px;
`;

const SearchQuery = styled.div`
  align-items: center;
  justify-content: center;
	font-family: 'Open Sans', sans-serif;
  color: ${Colors.LightGray};
`;

export const SearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <SearchQuery> Search </SearchQuery>
    </SearchBoxContainer>
  );
};
