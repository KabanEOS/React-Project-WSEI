import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

export const LeftMenuContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  margin-left: 27px;
`;
export const LefMenuUp = styled.div``;
export const LefMenuDown = styled.div`
  padding-top: 6px;
`;

export const LeftMenuWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  padding: 4px;
`;
export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px;
`;

export const HeadPhoto = styled.img`
  width: 45%;
  padding: 9px;
`;
export const HeadName = styled.div`
  padding: 3px;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.blueEight1};
`;
export const HeadTitle = styled.div`
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.Gray};
`;
export const YourEtcTxtIcoSet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const YourEtcTxtIcoSetLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;
export const Icon = styled.img`
  width: 24px;
  height: 21px;
  padding: 3px;
`;
export const TxtWrapper = styled.div`
  padding: 3px;
  width: 65%;
`;
export const Txt = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${Colors.LightGray};
`;
export const RoundedIcon = styled.img`
  width: 18px;
  height: 12px;
  border-radius: 3px;
  border: 2px solid #808080;
  padding: 3px;

  cursor: pointer;

  &:hover {
    background: ${Colors.WhiteSmoke};
  }
`;
export const Gap = styled.div`
  width: 18px;
  height: 12px;
  border-radius: 3px;
  padding: 3px;
`;
