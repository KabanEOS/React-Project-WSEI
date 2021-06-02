import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import temp01 from "./../../../../media/temp01.jpg";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  display: flex;
  border-radius: 3px 0px 0px 3px;
  height: 300px;
  width: 300px;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${temp01});
`;

export const RightContainer = styled.div`
  border-radius: 0px 3px 3px 0px;
  height: 288px;
  width: ;
  padding: 6px;
  background-color: yellow;
`;

//#00d4ff on hover main photo
