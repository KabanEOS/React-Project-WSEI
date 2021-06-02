import { FC } from "react";
import { MainWrapper, TileWrapper } from "../../../styledHelpers/Components";
import { HeadTile } from "../molecules/HeadTile";
import { HeadTilePhoto, LeftContainer, MainContainer, RightContainer, SectionTitle, SeeMoreLink } from "../styles/organisms.style/LatestPublications.styles";
import { PubElement } from "../molecules/PubElement";
import useState from 'react';
import React from "react";



export const LatestPublications: FC = () => {

  const [hover, setHover] = React.useState(false);
  const toggleHover = () => {
    setHover((hover) => !hover);
  };
  let scaleValue: number = 1;
  hover ? scaleValue = 1.2 : scaleValue = 1;

  return (
    <MainWrapper>
      <TileWrapper>
        <MainContainer>
          <LeftContainer onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <HeadTilePhoto scale={scaleValue} />
            {/* {
              !hover ?
                (<HeadTilePhoto scale="1" />)
                : (<HeadTilePhoto scale="1.2" />)
            } */}
            <HeadTile description={'Meo miyāʾūnn miau muning. Miau miau miau njäu njäu mňau. Mjau miav miau miau niaou. Mjau miauw meow mňau miaŭ miao.'} creationDate={"2020-02-01"} author={"John Doe"} photoUrl={"/somewhere/etc"} />
          </LeftContainer>
          <RightContainer >
            <SectionTitle>
              Latest Publications
            </SectionTitle>
            <PubElement description={'Meo miyāʾūnn miau muning. Miau miau miau njäu njäu mňau. Mjau miav miau miau niaou. Mjau miauw meow mňau miaŭ miao.'} creationDate={"2020-02-01"} author={"John Doe"} photoUrl={"/somewhere/etc"} />
            <PubElement description={'Meo miyāʾūnn miau muning. Miau miau miau njäu njäu mňau. Mjau miav miau miau niaou. Mjau miauw meow mňau miaŭ miao.'} creationDate={"2020-02-01"} author={"John Doe"} photoUrl={"/somewhere/etc"} />
            <PubElement description={'Meo miyāʾūnn miau muning. Miau miau miau njäu njäu mňau. Mjau miav miau miau niaou. Mjau miauw meow mňau miaŭ miao.'} creationDate={"2020-02-01"} author={"John Doe"} photoUrl={"/somewhere/etc"} />
            <SeeMoreLink>
              See more publications
            </SeeMoreLink>
          </RightContainer>
        </MainContainer>
      </TileWrapper>
    </MainWrapper >
  )
}


