import { FC } from "react";
import { Gap, LoupeIcon, Search, SearchBoxContainer, SearchQuery } from "../../TopBar/styles/SearchBox.style";
import { Input } from "../styles/atoms.style/FilterInput.style";
import LoupePhoto from "./../../../media/icons/search.svg"
import styled from "styled-components";

export const FilterInput: FC = () => {
  return (
    <SearchBoxContainer>
      <SearchQuery>
        <Gap />
        <Search>
          <Input
            type="text"
            placeholder="Filter" />
        </Search>
        <LoupeIcon src={LoupePhoto} />
      </SearchQuery>
    </SearchBoxContainer>
  );
}


