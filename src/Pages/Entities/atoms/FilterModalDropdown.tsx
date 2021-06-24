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
        jestem tabelą filtrów
        {/* TODO przekonsultować o co wgle "zaczepić" kategorie, na ile priority jest dynamizm. Moim zdaniem as far as na siłę trzeba wymyślać te sumowane filtry nie ma sensu dynamiczne dodawanie filtrów. Jakiś udawany sens jest dla trzech sztywnych w stylu: posiada w 1) nazwie, 2) posiada w lokalizacji firmy (i tak tylko jedna, bo nie ma w API) */}
      </Table>
    </FilterDropdownModalWrapper>
  )
}