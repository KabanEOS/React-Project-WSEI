import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const FilterDropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 6px;
  padding-left: 6px;
  &:hover {
    background: ${Colors.WhiteSmoke};
  }
  cursor: pointer !important;
`;
export const Icon = styled.img`
  height: 27px;
`;
export const FilterName = styled.div`
  color: #232c47;
  padding-right: 6px;
  padding-left: 6px;
`;
