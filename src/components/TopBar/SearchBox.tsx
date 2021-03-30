import { FC } from "react";
// import React, { useEffect } from 'react';
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";

//media import
import LoupePhoto from "../../media/icons/search.svg";
import { border } from "../../styledHelpers/Components";

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

const Input = styled.input`
  text-align: center;
  justify-content: center;

  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${Colors.LightGray};
  }
  &:focus {
        outline: none;
        /* box-shadow: 0px 0px 2px red; */
    }
`;

export const SearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <SearchQuery>
        <Gap />
        <Search>
          <Input 
            type="text" 
            placeholder="Search" 
            // onKeyUp="" // funkcja wyszukująca
          />
        </Search>
        <LoupeIcon src={LoupePhoto} />
      </SearchQuery>
    </SearchBoxContainer>
  );
};