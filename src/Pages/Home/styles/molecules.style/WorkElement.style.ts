import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { BarWrapper } from "./HeadTile.style";

interface ToScaleInterface {
  scale: number;
}

export const WorkElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 250px;
  height: 202;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`;

// export const PubPhoto = styled.img<ToScaleInterface>`
//   border-radius: 3px 0px 0px 3px;
//   height: 73px;
//   transition: all 1s;
//   transform: scale(${(props) => props.scale});
// `;

export const TopWrapper = styled.div`
  width: auto;
  height: 100px;
  border-radius: 3px 3px 0px 0px;
  overflow: hidden;
  position: relative;
`;
export const TopImage = styled.img<ToScaleInterface>`
  width: 100%;
  height: 100%;
  border-radius: 3px 3px 0px 0px;
  transition: all 1s;
  transform: scale(${(props) => props.scale});
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`;
export const IconTileWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 9px;
  height: 100px;
  width: 100px;
  border-radius: 3px;
`;
export const IconTile = styled.img``;

export const MidWrapper = styled.div`
  width: auto;
  height: 51;
`;
export const WorkElementTitle = styled.div`
  padding-top: 9px;
  padding-left: 109px;
  height: 51px;
  font-size: 0.95rem;
  font-weight: bold;
  color: ${Colors.LightGray};
`;

export const BottomWrapper = styled.div`
  justify-content: space-between;
  border-radius: 0px 0px 3px 3px;
  padding-left: 9px;
  padding-right: 9px;
  width: 232;
  height: 51px;
  border-radius: 0px 0px 3px 3px;
`;

export const WorkBarWrapper = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  color: #d3d5db;
  display: flex;
  font-size: 0.65rem;
  align-items: center;
  flex-direction: row;
  & > div {
    padding-right: 3px;
    padding-left: 3px;
  }
`;
export const Line = styled.div`
  font-size: 0.65rem;
  color: ${Colors.Gray};
  font-weight: 600;
  
`;

export const DarkLine = styled.div`
  font-size: 0.65rem;
  color: ${Colors.LightGray};
  font-weight: 600;
`;

export const UserIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`;

export const CategoryIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`;

export const Dot = styled.div`
  font-size: 1.6rem;
  color: ${Colors.Gray};
`;

export const UpdateBarWrapper = styled.div`
  font-size: 0.6rem;
  font-weight: 600;
  color: ${Colors.Gray};
`;
