import React, { FC } from "react";
import { HeadPhotoWrapper, BarWrapper, Description, HeadTileWrapper, CreationDate, AuthorName } from "../styles/molecules.style/HeadTile.style";
import HeadPhoto from "./../../../media/HeadPhoto.jpg"

interface Props {
  description: string,
  creationDate: string,
  author: string,
  photoUrl: string
}

//TODO map all that shit

export const HeadTile: FC<Props> = (props: Props) => {
  return (
    <HeadTileWrapper>
      <Description>{props.description}</Description>
      <BarWrapper>
        <CreationDate>
          {props.creationDate}
        </CreationDate>
        <HeadPhotoWrapper src={HeadPhoto} />
        <AuthorName>{props.author}</AuthorName>
      </BarWrapper>
    </HeadTileWrapper>
  )
};