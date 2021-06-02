/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import temp01 from "./../../../../media/temp01.jpg";
interface ToScaleInterface {
  scale: number;
}

export const MainContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  border-radius: 3px 0px 0px 3px;
  height: 300px;
  min-width: 300px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
`;

export const HeadTilePhoto = styled.div<ToScaleInterface>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  width: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
  background: url(${temp01});
  transform: scale(${(props) => props.scale});
`;

export const RightContainer = styled.div`
  border-radius: 0px 3px 3px 0px;
  height: auto;
  margin-left: 6px;
  margin-right: 3px;
  padding: 6px;
  & > div {
    margin: 4.5px;
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  padding-bottom: 6px;
  color: ${Colors.LightGray};
`;
export const SeeMoreLink = styled.div`
  padding-top: 4.5px;
  font-size: 0.8rem;
  color: #4a49f0;
  cursor: pointer !important;
`;
