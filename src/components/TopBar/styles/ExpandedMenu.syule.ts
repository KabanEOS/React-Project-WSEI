import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHead = styled.div`
  padding-left: 3px;
  padding-top: 7px;
  padding-bottom: 3px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #cccccc;
`;

export const DropdownTopWrapper = styled.div`
  overflow-y: 547.33;

  position: absolute;
  top: 40px;
  height: auto;
  width: 226px;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 3px;
  padding-right: 3px;
  cursor: pointer !important;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 3px;
  /* transform: translateY(27px); */
`;

export const DropDownTile = styled.div`
  border-radius: 3px;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  margin-top: 3px;
  padding: 3px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: bold;
  color: #232c47;

  &:hover {
    background: ${Colors.WhiteSmoke};
  }
`;
export const Icon = styled.img`
  padding-right: 6px;
  padding-left: 3px;
  padding-top: 3px;
  padding-bottom: 3px;
  width: 24px;
  height: 18px;
`;
export const LogoutIcon = styled.img`
  padding-right: 6px;
  padding-left: 3px;
  padding-top: 3px;
  width: 12px;
  height: 12px;
`;
export const HeadPhoto = styled.img`
  padding-right: 3px;
  padding-left: 3px;
  padding-top: 3px;
  width: 30px;
  height: 30px;
`;
export const Separator = styled.div`
  padding-top: 3px;
  border-bottom: 1px solid #f5f5f5;
`;
export const AccountTile = styled.div`
  flex-direction: column;
`;
export const AccountTileName = styled.div`
  padding: 1.5px;
  color: #232c47;
  font-size: 0.85rem;
  border-radius: 3px;
`;
export const AccountTileLink = styled.div`
  border-radius: 3px;
  padding: 1.5px;
  color: #384ba3;
  font-size: 0.55rem;
`;
export const LogoutTile = styled.div`
  color: #cccccc;
  border-radius: 3px;
  width: auto;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${Colors.darkRed};
  }
`;
