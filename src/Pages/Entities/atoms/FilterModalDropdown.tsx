import React from "react";
import { FC } from "react";
import { TileWrapper } from "../../../styledHelpers/Components";
import { FilterDropdownModalWrapper, Table, Title } from "../styles/atoms/FilterModalDropdown.style";

// interface IFilterDd {
//   value: string;
//   handler(val: any): void;
// }

// export const FilterDropdown = ({ handler }: IFilterDd) => {
export const FilterDropdownModal = () => {



  return (
    <FilterDropdownModalWrapper>
      <Title>
        Filtry
      </Title>
      <Table>
        jestem tabelą
      </Table>
    </FilterDropdownModalWrapper>
  )
}