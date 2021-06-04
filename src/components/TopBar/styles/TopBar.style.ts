import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

export const ExpandedMenuContainer = styled.div`
  height: 27px;
  width: 50%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  /* border: 1px solid; */
  border-color: ${Colors.LightGray};
  border-radius: 3px;
  padding-right: 3px;
  cursor: pointer !important;

  &:hover {
    background: ${Colors.WhiteSmoke};
  }
`;

export const ArrowDown = styled.img`
  height: 6px;
  justify-content: flex-end;
  fill: ${Colors.WhiteSmoke};
`;
export const CategoryName = styled.div`
  font-family: "Open Sans", sans-serif;
  min-width: 54px;
  margin-left: 3px;
  width: 70%;
`;

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`;

export const LeftSideWrapper = styled.div`
  height: 27px;
  min-width: 36%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 30px;
  margin: 3px;
`;

export const DropDownMenuContainer = styled.div`
  /* margin-left:7%; */
  min-width: 300px;
`;

export const CenterWrapper = styled.div`
  width: 28%;
  min-width: 100px;
`;

export const RightSideWrapper = styled.div`
  min-width: 36%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const HomeIcon = styled.img`
  z-index: 10;
  padding: 3px;
  margin-right: 9px;
  cursor: pointer !important;
`;

export const CommentsIconWrapper = styled.div`
  position: relative;
  margin-right: 6px;

  width: 30px;
  height: 30px;

  // WHEN NOT ACTIVE !!!
  /* background-color: white; */

  background-color: ${Colors.WhiteSmoke};
  font-weight: bold;
  border-radius: 50%;
  border: 1px solid transparent;
`;

export const CommentsIcon = styled.img`
  z-index: 10;
  padding: 3px;
  margin-right: 9px;

  width: 21px;
  padding: 6px;

  cursor: pointer !important;
`;

export const CommentsIconCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  /* display: none; */
  // WHEN NOT ACTIVE !!!
  display: flex;
  background-color: ${Colors.blueEight1};
  border-radius: 45%;
  border: 1px solid transparent;
  width: 12px;
  height: 10px;
`;

export const CommentLabel = styled.div`
  font-size: 9px;
  margin: auto;

  color: white;
`;

export const BellIcon = styled.img`
  right: 3px;
  z-index: 10;
  cursor: pointer !important;

  padding: 6px;
`;

export const BellIconWrapper = styled.div`
  position: relative;
  margin-right: 21px;

  width: 30px;
  height: 30px;

  // WHEN NOT ACTIVE !!!
  /* background-color: white; */

  background-color: ${Colors.WhiteSmoke};
  font-weight: bold;
  border-radius: 50%;
  border: 1px solid transparent;
`;

export const BellIconCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  // WHEN NOT ACTIVE !!!
  /* display: none; */

  display: flex;
  background-color: ${Colors.blueEight1};
  border-radius: 45%;
  border: 1px solid transparent;
  width: 12px;
  height: 10px;
`;

export const BellLabel = styled.div`
  font-size: 9px;
  margin: auto;

  color: white;
`;
export const LeftSide = styled.div`
  height: 100%;
  width: 100%;
`;
