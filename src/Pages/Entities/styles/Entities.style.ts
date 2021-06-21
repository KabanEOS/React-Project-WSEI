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

`
export const ListButtonRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;

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
`
export const ListIcon = styled.img<IsMosaicInterface>`
border-left: 1px solid;
height: 33px;
width: 20px;
padding-left: 6px;
padding-right: 6px;
border-right: 1px solid;
border-color: ${Colors.Gray};
background: ${(props) => props.background};
&:hover {
    background: ${Colors.Gray};
  }
`;
