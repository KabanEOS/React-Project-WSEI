import React from "react";
import { FC } from "react";

import { Icon, FilterDropdownWrapper, FilterName, FilterDropdownSection } from "../styles/atoms.style/FilterDropdown.style";

import SignalPhoto from "./../../../media/icons/signal.svg"
import AllPhoto from "./../../../media/icons/indent-all.svg"

interface IFilterDd {
  value: string;
  handler(val: any): void;
}

export const FilterDropdown = ({ value, handler }: IFilterDd) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val: string) => {
    setAnchorEl(null);
    handler(val)
  };

  return (
    <FilterDropdownWrapper>
      <FilterDropdownSection>
        <Icon src={AllPhoto} />
        <FilterName>
          All       
        </FilterName>
      </FilterDropdownSection>
      <FilterDropdownSection>        
        <Icon src={SignalPhoto} />
        <FilterName>
          Followed
        </FilterName>
      </FilterDropdownSection>
    </FilterDropdownWrapper>
  )
}


