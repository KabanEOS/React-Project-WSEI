import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IPhotosReducer } from "../../../reducers/photoReducer";
import { IPostReducer } from "../../../reducers/postReducer";
import { IUsersReducer } from "../../../reducers/usersReducer";
import { PhotoWrapper, BarWrapper, AuthorName } from "../../Home/styles/molecules.style/HeadTile.style";
import { PubElementWrapper, PubPhoto, ContentRight, PubDescription } from "../../Home/styles/molecules.style/PubElement.style";
import { EntityElementWrapper, EntityPhotoWrapper, PubEntityPhoto } from "../styles/molecules/EntityElement.style";


import HeadPhoto from "./../../../media/HeadPhoto.jpg"
import temp01 from "./../../../media/temp01.jpg"

interface IEntityElement {
  title: string;
  company: string;
  postPhoto: string;
  iconWidth: string;
}

export const EntityElement: FC<IEntityElement> = (props) => {


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
    <EntityElementWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover} iconWidth={props?.iconWidth}>
      <EntityPhotoWrapper>
        <PubEntityPhoto src={props?.postPhoto} scale={scaleValue} />
      </EntityPhotoWrapper>

      <ContentRight>
        <PubDescription>{props?.title}</PubDescription>
        <BarWrapper>
          <AuthorName>{props?.company}</AuthorName>
        </BarWrapper>
      </ContentRight>
    </EntityElementWrapper>
  )
};