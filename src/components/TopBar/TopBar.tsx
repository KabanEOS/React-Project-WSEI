import { FC } from "react";
import styled from "styled-components";

import {
  Wrapper,
  Wrapper2,
  InnerWrapper,
} from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";
import { SearchBox } from "./SearchBox";

//media import
import LogoImage from "../../media/logo.png";
import HomeIconPhoto from "../../media/icons/house.svg";
import CommentsIconPhoto from "../../media/icons/comments.svg";
import BellIconPhoto from "../../media/icons/bell.svg";

const TopBarContainer = styled.div`
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

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 30px;
  margin: 3px;
`;

const ExpandedMenuContainer = styled.div`
  width: 21%;
`;

const SearchBoxContainer = styled.div`
  width: 50%;
`;

const Icons = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const HomeIcon = styled.img`
  z-index: 10;
  padding: 3px;
  margin-right: 9px;
  cursor: pointer;
`;

const CommentsIcon = styled.img`
  z-index: 10;
  padding: 3px;
  margin-right: 9px;
  cursor: pointer;
`;
const BellIcon = styled.img`
  right: 3px;
  z-index: 10;
  /* padding: 3px; */
  margin-right: 21px;
  cursor: pointer;

  // ACTIVE INJECTION IN CASE OF LABEL COUNTER != 0
  background-color: ${Colors.WhiteSmoke};
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  border-radius: 50%;
  padding: 6px;
`;

const CommentLabel = styled.div`
  justify-content: center;
  align-items: center;
  z-index: 11;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 10px;
  border-radius: 35%;
  color: white;
  background-color: ${Colors.blueEight1};
  width: 15px;

  // DZIEKIE POZYCJONOWANIE LABELKI NAD IKONAMI, JAKAS LIBKA MOŻE?
  // CZEMU JUSTIFY CONTENT NIE DZIAŁA?
  position: absolute;
  top: 5px;
  left: 738px;
`;
const BellLabel = styled.div``;

const Gap = styled.div`
  width: 6px;
`;

export const TopBar: FC = () => {
  return (
    <TopBarContainer>
      <Logo src={LogoImage} />
      <ExpandedMenuContainer>
        <ExpandedMenu />
      </ExpandedMenuContainer>
      <Gap />
      <SearchBoxContainer>
        <SearchBox />
      </SearchBoxContainer>
      <Icons>
        <HomeIcon src={HomeIconPhoto} />
        <CommentsIcon src={CommentsIconPhoto} />
        <CommentLabel>3</CommentLabel>
        <BellIcon src={BellIconPhoto} />
      </Icons>
    </TopBarContainer>
  );
};
