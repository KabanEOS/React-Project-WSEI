import { FC } from "react";
import styled from "styled-components";

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
  margin-left:7%;
  width: 23%;
`;

const SearchBoxContainer = styled.div`
  width: 40%;
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

  const CommentsIconWrapper = styled.div`
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

    const CommentsIcon = styled.img`
      z-index: 10;
      padding: 3px;
      margin-right: 9px;

      width: 21px;
      padding: 6px;

      cursor: pointer;
    `;

      const CommentsIconCounter = styled.div`
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

        const CommentLabel = styled.div`
          font-size: 9px;
          margin: auto;

          color: white;
        `;

  const BellIcon = styled.img`
    right: 3px;
    z-index: 10;
    cursor: pointer;

    padding: 6px;
  `;


    const BellIconWrapper = styled.div`
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

      const BellIconCounter = styled.div`
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

        const BellLabel = styled.div`
        font-size: 9px;
        margin: auto;

        color: white;
        `;


export const TopBar: FC = () => {
  return (
    <TopBarContainer>
      <Logo src={LogoImage} />
      <ExpandedMenuContainer>
        <ExpandedMenu />
      </ExpandedMenuContainer>
      <SearchBoxContainer>

        <SearchBox />
      </SearchBoxContainer>
      <Icons>
        <HomeIcon src={HomeIconPhoto} />

        <CommentsIconWrapper>
          <CommentsIcon src={CommentsIconPhoto} />
          <CommentsIconCounter>
            <CommentLabel>12</CommentLabel>
          </CommentsIconCounter>
        </CommentsIconWrapper>

        <BellIconWrapper>
          <BellIcon src={BellIconPhoto} />
          <BellIconCounter>
            <BellLabel>12</BellLabel>
          </BellIconCounter>
        </BellIconWrapper>
      </Icons>
    </TopBarContainer>
  );
};
