import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

interface ToScaleInterface {
  scale: number;
}
interface HandleWidth {
  iconWidth: string;
}



export const EntityElementWrapper = styled.div<HandleWidth>`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  min-width: 300px;
  width: ${(props) => props.iconWidth};
  height: auto;
  background-color: white;

  margin: 6px;
  box-shadow: 0 2px 2px -2px rgba(0.2, 0.2, 0.2, 0.2);
  &:hover {
    background: ${Colors.WhiteSmoke};
  }
  cursor: pointer !important;
`;

export const EntityPhotoWrapper = styled.div`
  min-width: 145px;
  max-width: 145px;
  height: 145px;
  border-radius: 3px 0px 0px 3px;
  overflow: hidden;
  position: relative;
`;

export const PubEntityPhoto = styled.img<ToScaleInterface>`
border-radius: 3px 0px 0px 3px;
transition: all 1s;
height: 100%;
width: 100%;
transform: scale(${(props) => props.scale});
`
