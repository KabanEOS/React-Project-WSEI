import styled from "styled-components";
import { Colors } from "./Colors";

export type Styles = {
  [ruleOrSelector: string]: string | number | Styles; //type lub interfejs todo
};

const boxShadow = (): Styles => {
  return {
    color: `${Colors.black}`,
  };
};

export const ContentWrapper = styled.div`
  padding: 9px;
  display: flex;
  width: 80vw;
`;
export const Text = styled.div`
  padding: 9px;
  display: flex;
  width: 80vw;
`;

export const LatestPublicationsWrapper = styled.div`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  height: 300px;
  width: 100%;
`;

export const TileWrapper = styled.div`
  position: relative;
  border-radius: 3px;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const TileWrapperTop = styled.div`
  border-radius: 3px 3px 0px 0px;
  background-color: white;
  /* padding:3px; */
`;
export const TileWrapperSection = styled.div`
  background-color: white;
  /* padding:3px; */
  border-top: 1px solid #f5f5f5;
`;
export const TileWrapperDown = styled.div`
  border-radius: 0px 0px 3px 3px;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-top: 1px solid #f5f5f5;
  /* padding:3px; */
`;

export const LineWrapperTop = styled.div`
  padding-top: 9px;
  padding-right: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
`;
export const LineWrapperSection = styled.div`
  border-top: 1px solid #f5f5f5;
  padding-top: 9px;
  padding-right: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
`;

export const OuterWrapper = styled.div`
  width: 100%;
  padding: 12px;
`;

export const border = styled.div`
  padding: 2px;
`;
