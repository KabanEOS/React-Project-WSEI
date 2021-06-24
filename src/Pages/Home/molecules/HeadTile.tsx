import React, { FC } from "react";
import HeadPhoto from "./../../../media/HeadPhoto.jpg"
import { HeadPhotoWrapper, BarWrapper, Description, HeadTileWrapper, CreationDate, AuthorName } from "../styles/molecules.style/HeadTile.style";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IPostReducer } from "../../../reducers/postReducer";
import { IUsersReducer } from "../../../reducers/usersReducer";
import { HeadTilePhoto } from "../styles/organisms.style/LatestPublications.styles";
import { Link } from "react-router-dom";

interface IHeadElement {
  date: string;
  title: string;
  userId: number;
  userPhoto: string;
}

const postDefaultBigPhoto: string = 'https://picsum.photos/500'

export const HeadTile: FC<IHeadElement> = (props) => {

  const [hover, setHover] = React.useState(false);
  const toggleHover = () => {
    setHover((hover) => !hover);
  };
  let scaleValue: number = 1;
  hover ? scaleValue = 1.12 : scaleValue = 1;

  const { postList, usersList } = useSelector<IState, IPostReducer & IUsersReducer>(globalState => ({
    ...globalState.posts,
    ...globalState.users,
  }));

  return (
    <Link to="HeadTile" style={{ textDecoration: 'none' }}>
      <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <HeadTilePhoto src={postDefaultBigPhoto} scale={scaleValue} />
        <HeadTileWrapper >
          <Description>{props.title}</Description>
          <BarWrapper>
            <CreationDate>{props.date}</CreationDate>
            <HeadPhotoWrapper src={props?.userPhoto} />
            <AuthorName>{usersList[props?.userId - 1]?.name}</AuthorName>
          </BarWrapper>
        </HeadTileWrapper>
      </div>
    </Link>
  )
};