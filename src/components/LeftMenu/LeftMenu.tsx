import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

import { Colors } from "../../styledHelpers/Colors";
import {
  TileWrapperTop,
  TileWrapperSection,
  TileWrapperDown,
  OuterWrapper,
  LineWrapperTop,
  LineWrapperSection,
} from "../../styledHelpers/Components";


// media import
import NetworkPhoto from "../../media/icons/people.svg";
import UserPlusPhoto from "../../media/icons/user-plus.svg";
import PublicationsPhoto from "../../media/icons/publications.svg";
import EcosystemPhoto from "../../media/icons/ecosystem.svg";
import EntitiesPhoto from "../../media/icons/entities2.svg";
import PlusPhoto from "../../media/icons/plus.svg";

import HeadPhotoPNG from "../../media/HeadPhoto.png";
import { APP_ID, BASE_URL } from "../../consts";

const CustomImg = styled.img``;

const LeftMenuContainer = styled.div`
  width: 330px;
  /* align-items: center; */
  display: flex;
  flex-direction: row;
  margin-left: 27px;
`;
const LefMenuUp = styled.div``;
const LefMenuDown = styled.div`
  padding-top: 6px;  
`;

const LeftMenuWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  padding: 4px;
`;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px;
`;

const HeadPhoto = styled.img`
  width: 45%;
  padding: 9px;
`;
const HeadName = styled.div`
  padding: 3px;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.blueEight1};
`;
const HeadTitle = styled.div`
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.Gray};
`;
const YourEtcTxtIcoSet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const YourEtcTxtIcoSetLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;
const Icon = styled.img`
  width: 24px;
  height: 21px;
  padding: 3px;
`;
const TxtWrapper = styled.div`
  padding: 3px;
  width: 65%;
`;
const Txt = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${Colors.LightGray};
`;
const RoundedIcon = styled.img`
  width: 18px;
  height: 12px;
  border-radius: 3px;
  border: 2px solid #808080;
  padding: 3px;

  cursor: pointer;

  &:hover {
    background: ${Colors.WhiteSmoke};
  }
`;
const Gap = styled.div`
  width: 18px;
  height: 12px;
  border-radius: 3px;
  padding: 3px;
`;


export const LeftMenu: FC = () => {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
      setLoading(true);
      axios.get(`${BASE_URL}user`, { headers: { 'app-id': APP_ID } })
          .then(({ data }) => setData(data))
          .catch(console.error)
          .finally(() => setLoading(false));
  }, []);
  
  console.log(data);
  // const personData = {
  //   firstName: "Michał Madejski",
  //   headName: "Michał Madejski",
  // }

  return (
    <LeftMenuContainer>
      <OuterWrapper>
        <LefMenuUp>
          <TileWrapperTop>
            <HeadWrapper>
              <HeadPhoto src={HeadPhotoPNG} />
              <HeadName>{data && data.data[0]?.firstName}</HeadName>
              <HeadTitle>Fancy text</HeadTitle>
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
