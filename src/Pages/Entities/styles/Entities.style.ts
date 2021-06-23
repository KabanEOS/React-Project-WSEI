import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

export const EntitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntitiesPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

interface IsMosaicInterface {
  background: string;
}

export const MosaicButtonsWrapper = styled.div`
  border: 1px solid;
  border-color: ${Colors.Gray};
  border-radius: 3px;
  height: 33px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const MosaicButtonLeft = styled.div`
display: flex;
flex-direction: row;
align-items: center;

cursor: pointer;
`
export const ListButtonRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;

cursor: pointer;
`
export const MosaicText = styled.div`
height: 33px;
width: 58px;
display: flex;
justify-content: center;
align-items: center;
`

export const MosaicTextWrapper = styled.div`
height: 33px;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
`

export const MosaicIcon = styled.img<IsMosaicInterface>`
padding-right: 6px;
height: 33px;
width: 20px;
padding-left: 6px;
border-right: 1px solid;
border-color: ${Colors.Gray};
background: ${(props) => props.background};
&:hover {
    background: ${Colors.Gray};
  }

cursor: pointer;
`
export const ListIcon = styled.img<IsMosaicInterface>`
border-left: 1px solid;
height: 33px;
width: 20px;
padding-left: 6px;
padding-right: 6px;
border-color: ${Colors.Gray};
background: ${(props) => props.background};
&:hover {
    background: ${Colors.Gray};
  }

cursor: pointer;
`;


export const SectionFilters = styled.div`
display: flex;
flex-direction: row;
align-items: center;

font-weight: bold;
font-size: 1.1rem;
color: ${Colors.LightGray};

cursor: pointer;
`;

export const FilterAreaIcon = styled.img`
display: flex;
flex-direction: row;
align-items: center;

height: 20px;
width: 16px;

padding-left: 3px;
padding-right: 3px;
padding-top: 6px;
padding-bottom: 6px;

cursor: pointer;
`;

export const FilterAreaIcon_arrow = styled.img`
display: flex;
flex-direction: row;
align-items: center;

height: 10;
width: 8px;

padding-left: 12px;
padding-right: 3px;
padding-top: 4px;
padding-bottom: 4px;

cursor: pointer;
`;
export const FilterAreaIcon_button = styled.img`
display: flex;
flex-direction: row;
align-items: center;

height: 18px;
width: 14px;

padding-left: 3px;
padding-right: 12px;
padding-top: 4px;
padding-bottom: 4px;

cursor: pointer;
`;

export const FilterAreaIconWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;

display: flex;
flex-direction: row;
align-items: center;
border-radius: 3px;

font-size:0.9rem;

height: 21px;
width: auto;
padding: 3px;

padding-left: 6px;
padding-right: 6px;
padding-top: 3px;
padding-bottom: 3px;

cursor: pointer;

&:hover {
    background: white;
  }
`;


export const Separator = styled.div`
height: 21;
border-left: 1px solid black;

//TODO this small sh** is not visible, why?
`;

export const DropdownAllWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;

display: flex;
flex-direction: row;
align-items: center;
border-radius: 3px;

height: 21;
width: auto;

padding-left: 6px;
padding-right: 6px;

background: white;
 
cursor: pointer;
&:hover {
    background: white;
  }

`;