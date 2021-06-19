import { ChangeEvent, FC, useState } from "react";
import { Gap, LoupeIcon, Search, SearchBoxContainer, SearchQuery } from "../../TopBar/styles/SearchBox.style";
import { Input } from "../styles/atoms.style/FilterInput.style";
import LoupePhoto from "./../../../media/icons/search.svg"
import styled from "styled-components";
import React from "react";

interface filterInputProps {
  value: string;
  handler(val: any): void;
}

export const FilterInput = ({ value, handler }: filterInputProps) => {

  return (
    <SearchBoxContainer>
      <SearchQuery>
        <Gap />
        <Search>
          <Input
            type="text"
            placeholder="Filter"
            value={value}
            onChange={handler}
          />
        </Search>
        <LoupeIcon src={LoupePhoto} />
      </SearchQuery>
    </SearchBoxContainer>
  );
}


