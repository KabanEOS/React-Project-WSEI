import React from "react";
import { FC } from "react";

import { Icon, FilterDropdownWrapper, FilterName, FilterDropdownSection } from "../styles/atoms.style/FilterDropdown.style";

import SignalPhoto from "./../../../media/icons/signal.svg"
import AllPhoto from "./../../../media/icons/indent-all.svg"
import { IconTile } from "../styles/molecules.style/WorkElement.style";
import { TileWrapper } from "../../../styledHelpers/Components";

interface IFilterDd {
  value: string;
  handler(val: any): void;
}

export const FilterDropdown = ({ handler }: IFilterDd) => {

  const handleClick = (val: string) => {
    handler(val)
  };

  return (
    <FilterDropdownWrapper>
      <TileWrapper>
        <FilterDropdownSection onClick={() => handleClick("All")}>
          <Icon src={AllPhoto} />
          <FilterName>
            All
          </FilterName>
        </FilterDropdownSection>
        <FilterDropdownSection onClick={() => handleClick("Followed")}>
          <Icon src={SignalPhoto} />
          <FilterName>
            Followed
          </FilterName>
        </FilterDropdownSection>
      </TileWrapper>
    </FilterDropdownWrapper>
  )
}



