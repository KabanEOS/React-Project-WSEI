import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const FilterDropdownWrapper = styled.div`
  z-index: 10;
  position: absolute;
  margin-top:7px;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: white;

  cursor: pointer !important;
  min-width: 60px;
  transform: translateX(-6px);
`;
export const Icon = styled.img`
  height: 21px;
  width:21px;
`;
export const FilterName = styled.div`
  color: #232c47;
  padding-right: 6px;
  padding-left: 6px;
`;

export const FilterDropdownSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: row;  
  align-items: center;
  min-width: 60px;
  padding: 3px;
`;
