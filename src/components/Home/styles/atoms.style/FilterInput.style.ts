import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

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
