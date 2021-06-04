import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

export const SearchBoxContainer = styled.div`
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  background-color: white;
  border-color: ${Colors.Gray};
  border-radius: 3px;
  margin: 3px;
`;

export const SearchQuery = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin: 3px;
`;

export const Gap = styled.div`
  display: flex;
  width: 1px;
`;
export const Search = styled.div`
  display: flex;
`;
export const LoupeIcon = styled.img`
  display: flex;
  cursor: pointer !important;
`;

export const Input = styled.input`
  text-align: center;
  justify-content: center;

  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${Colors.LightGray};
  }
  &:focus {
    outline: none;
    /* box-shadow: 0px 0px 2px red; */
  }
`;
