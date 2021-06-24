import React, { FC } from "react";
import { TileWrapper } from "../../../styledHelpers/Components";
import { MidWrapper, IconTile, IconTileWrapper, TopImage, TopWrapper, WorkElementTitle, WorkElementWrapper, BottomWrapper, UserIcon, CategoryIcon, Dot, WorkBarWrapper, Line, UpdateBarWrapper } from '../styles/molecules.style/WorkElement.style';

import "keen-slider/keen-slider.min.css"

import NetworkPhoto from "../../../media/icons/people.svg";
import FormPhoto from "../../../media/icons/form.svg";
import temp02 from "./../../../media/temp02.jpg";
import { Link } from "react-router-dom";

export const WorkElement: FC = () => {
  const [hover, setHover] = React.useState(false);
  const toggleHover = () => {
    setHover((hover) => !hover);
  };
  let scaleValue: number = 1;
  hover ? scaleValue = 1.1 : scaleValue = 1;
  return (
    <Link to="/Workspace" style={{ textDecoration: 'none' }}>
      <WorkElementWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <TileWrapper>
          <TopWrapper>
            <TopImage src={temp02} scale={scaleValue} />
          </TopWrapper>
          <IconTileWrapper>
            <IconTile src={FormPhoto} />
          </IconTileWrapper>
          <MidWrapper>
            <WorkElementTitle>
              Client contract
            </WorkElementTitle>
          </MidWrapper>
          <BottomWrapper>
            <WorkBarWrapper>
              <CategoryIcon src={FormPhoto} />
              <Line>Contract</Line>
              <Dot>•</Dot>
              <UserIcon src={NetworkPhoto} />
              <Line>150 users</Line>
            </WorkBarWrapper>
            <UpdateBarWrapper>
              Last update 2 days ago.
            </UpdateBarWrapper>
          </BottomWrapper>
        </TileWrapper>
      </WorkElementWrapper>
    </Link>
  )
};