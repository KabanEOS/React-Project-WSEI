import { FC } from "react";

import { Icon, FilterDropdownWrapper, FilterName } from "../styles/atoms.style/FilterDropdown.style";

import SignalPhoto from "./../../../media/icons/signal.svg"

export const FilterDropdown: FC = () => {

  // TODO filter content, dropdown , switch icon on change

  return (
    <FilterDropdownWrapper>
      <Icon src={SignalPhoto} />
      <FilterName>
        Followed
      </FilterName>
    </FilterDropdownWrapper>
  )
}


