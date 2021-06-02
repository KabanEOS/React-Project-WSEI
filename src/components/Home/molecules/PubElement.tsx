import React, { FC } from "react";
import { AuthorName, BarWrapper, CreationDate, Description, HeadPhotoWrapper } from "../styles/molecules.style/HeadTile.style";
import * as PubElementStyle from "../styles/molecules.style/PubElement.style";
import HeadPhoto from "./../../../media/HeadPhoto.jpg"
import temp01 from "./../../../media/temp01.jpg"

interface Props {
  description: string,
  creationDate: string,
  author: string,
  photoUrl: string
}

//TODO map all that shit

export const PubElement: FC<Props> = (props: Props) => {
  return (
    <PubElementStyle.PubElementWrapper>
      <PubElementStyle.PubPhoto src={temp01} />
      <PubElementStyle.ContentRight>
        <Description>{props.description}</Description>
        <BarWrapper>
          <CreationDate>
            {props.creationDate}
          </CreationDate>
          <HeadPhotoWrapper src={HeadPhoto} />
          <AuthorName>{props.author}</AuthorName>
        </BarWrapper>
      </PubElementStyle.ContentRight>
    </PubElementStyle.PubElementWrapper>
  )
};