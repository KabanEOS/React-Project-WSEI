import { FC } from "react";
import styled from "styled-components";
import useDropdown from 'react-dropdown-hook';


//media import
import LogoImage from "./../../media/logo.png";
import HomeIconPhoto from "./../../media/icons/house.svg";
import CommentsIconPhoto from "./../../media/icons/comments.svg";
import BellIconPhoto from "./../../media/icons/bell.svg";
import ArrowDownIconPhoto from "./../../media/icons/arrow-down.svg";
import { TopBarContainer, LeftSideWrapper, Logo, DropDownMenuContainer, ExpandedMenuContainer, HomeIcon, CategoryName, ArrowDown, CenterWrapper, RightSideWrapper, CommentsIconWrapper, CommentsIcon, CommentsIconCounter, CommentLabel, BellIconWrapper, BellIcon, BellIconCounter, BellLabel } from "./styles/TopBar.style";
import { ExpandedMenu } from "./ExpandedMenu";
import { SearchBox } from "./SearchBox";
import React from 'react';
import { Link, useLocation } from "react-router-dom";

export const TopBar = () => {

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };


  return (
    <TopBarContainer>
      <LeftSideWrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo src={LogoImage} />
        </Link>
        <DropDownMenuContainer ref={wrapperRef}>
          <ExpandedMenuContainer onClick={menuHandler}>
            <HomeIcon src={HomeIconPhoto} />
            <CategoryName>Home</CategoryName>
            <ArrowDown src={ArrowDownIconPhoto} />
          </ExpandedMenuContainer>
          {dropdownOpen &&
            <ExpandedMenu />
          }
        </DropDownMenuContainer>
      </LeftSideWrapper>
      <CenterWrapper>
        <SearchBox />
      </CenterWrapper>
      <RightSideWrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HomeIcon src={HomeIconPhoto} />
        </Link>
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
      </RightSideWrapper>

    </TopBarContainer>
  );
};
