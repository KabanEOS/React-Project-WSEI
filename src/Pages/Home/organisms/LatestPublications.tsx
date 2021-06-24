import { FC, useEffect } from "react";
import { LatestPublicationsWrapper as LatestPublicationsWrapper, TileWrapper } from "../../../styledHelpers/Components";
import { HeadTile } from "../molecules/HeadTile";
import { HeadTilePhoto, LeftContainer, MainContainer, RightContainer, SectionTitle, SeeMoreLink } from "../styles/organisms.style/LatestPublications.styles";
import { PubElement } from "../molecules/PubElement";
import useState from 'react';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../../entities/posts";
import { IState } from "../../../reducers";
import { IPostReducer } from "../../../reducers/postReducer";
import { getPosts } from "../../../actions/postActions";
import { IUsersReducer } from "../../../reducers/usersReducer";
import { Link } from "react-router-dom";

export interface ILastPublications {
  publications: IPost[];
}

// ze względu na nie wystarczająco szczegółowe dane pozyskiwane z API zdecydowałem umieścić losowe zdjęcia autorów oraz postów 
const postDefaultSmallPhoto: string = 'https://picsum.photos/2'

const authDefaultPhoto: string = 'https://i.pravatar.cc/2'

export const LatestPublications: FC = () => {

  const { postList, usersList } = useSelector<IState, IPostReducer & IUsersReducer>(globalState => ({
    ...globalState.posts,
    ...globalState.users,
  }));

  const threePubElements: IPost[] = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 99);
    threePubElements.push(postList[random]);
  }

  return (
    <LatestPublicationsWrapper>
      <TileWrapper>
        <MainContainer>
          <LeftContainer >
            <HeadTile
              title={postList[0]?.body}
              date={"2020-02-01"}
              userId={postList[0]?.userId}
              userPhoto={authDefaultPhoto}
            />
          </LeftContainer>
          <RightContainer >
            <SectionTitle>
              Latest Publications
            </SectionTitle>
            {threePubElements.map((el, index) => (
              <PubElement key={index}
                title={el?.body}
                date={"2020-02-01"}
                userId={el?.userId}
                userPhoto={authDefaultPhoto + el?.userId}
                postPhoto={postDefaultSmallPhoto + el?.id}
              />
            ))}
            <SeeMoreLink>
              <Link to="SeeMorePublications" style={{ textDecoration: 'none' }}>
                See more publications
              </Link>
            </SeeMoreLink>
          </RightContainer>
        </MainContainer>
      </TileWrapper>
    </LatestPublicationsWrapper >
  )
}


