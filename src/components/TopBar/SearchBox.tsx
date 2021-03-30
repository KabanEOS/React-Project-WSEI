import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";

//media import
import LoupePhoto from "../../media/icons/search.svg";

const SearchBoxContainer = styled.div`
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  border-color: ${Colors.Gray};
  border-radius: 3px;
  margin: 3px;
`;

const SearchQuery = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${Colors.LightGray};
  margin: 3px;
`;

const Gap = styled.div`
  display: flex;
  width: 1px;
`;
const Search = styled.div`
  display: flex;`
const LoupeIcon = styled.img`
  display: flex;
  cursor: pointer;`

export const SearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <SearchQuery>
        <Gap />
        <Search>Search</Search>
        <LoupeIcon src={LoupePhoto} />
      </SearchQuery>
    </SearchBoxContainer>
  );
};
