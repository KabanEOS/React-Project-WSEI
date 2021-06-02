import React, { FC } from "react";
import { AuthorName, BarWrapper, CreationDate, HeadPhotoWrapper, PhotoWrapper } from "../styles/molecules.style/HeadTile.style";
import * as PubElementStyle from "../styles/molecules.style/PubElement.style";
import { PubDescription } from "../styles/molecules.style/PubElement.style";
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
  const [hover, setHover] = React.useState(false);
  const toggleHover = () => {
    setHover((hover) => !hover);
  };
  let scaleValue: number = 1;
  hover ? scaleValue = 1.1 : scaleValue = 1;

  return (
    <PubElementStyle.PubElementWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <PhotoWrapper>
        <PubElementStyle.PubPhoto scale={scaleValue} src={temp01} />
      </PhotoWrapper>

      <PubElementStyle.ContentRight>
        <PubDescription>{props.description}</PubDescription>
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