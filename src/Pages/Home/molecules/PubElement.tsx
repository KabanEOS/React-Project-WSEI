import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "../../../reducers";
import { IPhotosReducer } from "../../../reducers/photoReducer";
import { IPostReducer } from "../../../reducers/postReducer";
import { IUsersReducer } from "../../../reducers/usersReducer";
import { AuthorName, BarWrapper, CreationDate, HeadPhotoWrapper, PhotoWrapper } from "../styles/molecules.style/HeadTile.style";
import { ContentRight, PubDescription, PubElementWrapper, PubPhoto } from "../styles/molecules.style/PubElement.style";


import HeadPhoto from "./../../../media/HeadPhoto.jpg"
import temp01 from "./../../../media/temp01.jpg"

interface IPubElement {
  date: string;
  title: string;
  userId: number;
  userPhoto: string;
  postPhoto: string;
}

export const PubElement: FC<IPubElement> = (props) => {

  const { postList, usersList } = useSelector<IState, IPostReducer & IUsersReducer>(globalState => ({
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
    <Link to="LatestPublicationsElement" style={{ textDecoration: 'none' }}>
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
    </Link>
  )
};