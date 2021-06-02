import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';


// media import
import NetworkPhoto from "../../../media/icons/people.svg";
import UserPlusPhoto from "../../../media/icons/user-plus.svg";
import PublicationsPhoto from "../../../media/icons/publications.svg";
import EcosystemPhoto from "../../../media/icons/ecosystem.svg";
import EntitiesPhoto from "../../../media/icons/entities2.svg";
import PlusPhoto from "../../../media/icons/plus.svg";

import HeadPhotoJPG from "../../../media/HeadPhoto.jpg"
import { APP_ID, BASE_URL } from "../../../consts";
import { PersonalData } from "../../../entities/personalData";
import { OuterWrapper, TileWrapperTop, TileWrapperDown, LineWrapperTop, LineWrapperSection } from "../../../styledHelpers/Components";
import { Icon } from "semantic-ui-react";
import { LeftMenuContainer, LefMenuUp, HeadWrapper, HeadPhoto, HeadName, HeadTitle, YourEtcTxtIcoSet, TxtWrapper, Txt, RoundedIcon, LefMenuDown, YourEtcTxtIcoSetLinks, Gap } from "./LeftMenu.style";

export const LeftMenu: FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //     setLoading(true);
  //     axios.get(`${BASE_URL}user`, { headers: { 'app-id': APP_ID } })
  //         .then(({ data }) => setData(data))
  //         .catch(console.error)
  //         .finally(() => setLoading(false));
  // }, []);

  // console.log(data);
  // const PersonData = {
  //   firstName: "Michał Madejski",
  //   headName: "Michał Madejski",
  // }

  return (
    <LeftMenuContainer>
      <OuterWrapper>
        <LefMenuUp>
          <TileWrapperTop>
            <HeadWrapper>
              <HeadPhoto src={HeadPhotoJPG} />
              <HeadName>{PersonalData.name}</HeadName>
              <HeadTitle>{`${PersonalData.jobTitle} - ${PersonalData.company}`}</HeadTitle>
            </HeadWrapper>
          </TileWrapperTop>
          <TileWrapperDown>
            <LineWrapperTop>
              <YourEtcTxtIcoSet>
                <Icon src={NetworkPhoto} />
                <TxtWrapper>
                  <Txt>Your Network</Txt>
                </TxtWrapper>
                <RoundedIcon id="addToNetwork" src={UserPlusPhoto} />
              </YourEtcTxtIcoSet>
            </LineWrapperTop>
            <LineWrapperSection>
              <YourEtcTxtIcoSet>
                <Icon src={PublicationsPhoto} />
                <TxtWrapper>
                  <Txt>Your Publications</Txt>
                </TxtWrapper>
                <RoundedIcon id="addPublication" src={PlusPhoto} />
              </YourEtcTxtIcoSet>
            </LineWrapperSection>
          </TileWrapperDown>
        </LefMenuUp>
        <LefMenuDown>
          <LineWrapperSection>
            <YourEtcTxtIcoSetLinks id="publications">
              <Icon src={PublicationsPhoto} />
              <TxtWrapper>
                <Txt>Publications</Txt>
              </TxtWrapper>
              <Gap />
            </YourEtcTxtIcoSetLinks>
          </LineWrapperSection>
          <LineWrapperSection>
            <YourEtcTxtIcoSetLinks id="ecosystem">
              <Icon src={EcosystemPhoto} />
              <TxtWrapper>
                <Txt>Ecosystem</Txt>
              </TxtWrapper>
              <Gap />
            </YourEtcTxtIcoSetLinks>
          </LineWrapperSection>
          <LineWrapperSection>
            <YourEtcTxtIcoSetLinks id="entities">
              <Icon src={EntitiesPhoto} />
              <TxtWrapper>
                <Txt>Entities</Txt>
              </TxtWrapper>
              <Gap />
            </YourEtcTxtIcoSetLinks>
          </LineWrapperSection>
        </LefMenuDown>
      </OuterWrapper>
    </LeftMenuContainer>
  );
};
