import { FC } from "react";
import { MainWrapper, TileWrapper } from "../../../styledHelpers/Components";
import { HeadTile } from "../molecules/HeadTile";
import { LeftContainer, MainContainer, RightContainer } from "../styles/organisms.style/LatestPublications.styles";



export const LatestPublications: FC = () => {

  return (
    <MainWrapper>
      <TileWrapper>
        <MainContainer>
          <LeftContainer>
            <HeadTile description={'Meo miyāʾūnn miau muning. Miau miau miau njäu njäu mňau. Mjau miav miau miau niaou. Mjau miauw meow mňau miaŭ miao.'} creationDate={"2020-02-01"} author={"John Doe"} photoUrl={"/somewhere/etc"} />
          </LeftContainer>
          <RightContainer>

          </RightContainer>
        </MainContainer>
      </TileWrapper>
    </MainWrapper>
  )
}
