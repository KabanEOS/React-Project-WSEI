import { FC } from "react";
// import React, { useEffect } from 'react';
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";

//media import
import LoupePhoto from "../../media/icons/search.svg";
import { border } from "../../styledHelpers/Components";
import { Search, Input, SearchBoxContainer, SearchQuery, Gap, LoupeIcon } from "./styles/SearchBox.style";

export const SearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <SearchQuery>
        <Gap />
        <Search>
          <Input
            type="text"
            placeholder="Search"
          />
        </Search>
        <LoupeIcon src={LoupePhoto} />
      </SearchQuery>
    </SearchBoxContainer>
  );
};