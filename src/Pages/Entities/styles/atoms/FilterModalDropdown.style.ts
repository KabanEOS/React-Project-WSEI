import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";


export const FilterDropdownModalWrapper = styled.div`

z-index: 10;
position: absolute;

display: flex;
flex-direction: column;
width: 40%;
height: 280px;
background: white;
border-radius: 3px;
box-shadow: 0 10px 10px -2px rgba(0, 0, 0, 0.2);
background-color: white;
top:146px;
`
export const Title = styled.div`
  padding: 12px;
  color:${Colors.LightGray};
`
export const Table = styled.div`
  padding: 12px;

`
export const FilterModalRow = styled.div`
display: flex;
flex-direction:row;
  padding: 6px;

`