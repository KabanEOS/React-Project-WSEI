import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IPhotosReducer } from "../../../reducers/photoReducer";
import { IPostReducer } from "../../../reducers/postReducer";
import { IUsersReducer } from "../../../reducers/usersReducer";
import { AuthorName, BarWrapper, CreationDate, HeadPhotoWrapper, PhotoWrapper } from "../styles/molecules.style/HeadTile.style";
import { PubElementWrapper, PubPhoto, ContentRight, PubDescription } from "../styles/molecules.style/pubElement.style";

import HeadPhoto from "./../../../media/HeadPhoto.jpg"
import temp01 from "./../../../media/temp01.jpg"

interface IPubElement {
  date: string;
  title: string;
  userId: number;
  userPhoto: string;
  postPhoto: string;
}

//TODO map all that shit

export const PubElement: FC<IPubElement> = (props) => {

  const { postList, usersList } = useSelector<IState, IPostReducer &  IUsersReducer>(globalState => ({
    ...globalState.posts,
    ...globalState.users,
  }));

  const [hover, setHover] = React.useState(false);
  const toggleHover = () => {
    setHover((hover) => !hover);
  };
  let scaleValue: number = 1;
  hover ? scaleValue = 1.1 : scaleValue = 1;

  return (
    <PubElementWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <PhotoWrapper>
        <PubPhoto src={props?.postPhoto} scale={scaleValue} />
      </PhotoWrapper>

      <ContentRight>
        <PubDescription>{props?.title}</PubDescription>
        <BarWrapper>
          <CreationDate>
            {props?.date}
          </CreationDate>
          <HeadPhotoWrapper src={props?.userPhoto} />
          <AuthorName>{usersList[props?.userId - 1]?.name}</AuthorName>
        </BarWrapper>
      </ContentRight>
    </PubElementWrapper>
  )
};