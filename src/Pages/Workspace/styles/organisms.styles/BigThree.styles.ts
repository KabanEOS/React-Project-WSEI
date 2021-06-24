import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const BigThreeWrapper = styled.div`
display: flex;
flex-direction: row;
margin-top:12px;
`;

export const ColumnWrapper = styled.div`
margin-top:12px;
display: flex;
flex-direction: column;
background-color:${Colors.Gray};
border-radius: 3px;
box-shadow: 0 2px px -2px rgba(0, 0, 0, 0.2);
padding: 12px;
`;

export const WogieBogie = styled.div`
color: #232C47;
font-size: 1.2rem;
font-weight: bold;
margin-left:6px;
`;


export const OneOfThreeWrapper = styled.div`
width: calc(33.33%);

background-color:white;
border-radius: 3px;
box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
padding-top:12px;
padding-bottom:12px;
padding-left:6px;
padding-right:6px;
margin: 6px;
`;


export const BigIcon = styled.img`
padding-top: 6px;
padding-left: 6px;
height: 40px;
width: auto;
`;


