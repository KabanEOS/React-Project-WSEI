import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";

import { PersonalData } from "../../entities/personalData";
import HeadPhotoJPG from "../../media/HeadPhoto.jpg";

import HomeIcon2Photo from "../../media/icons/house2.svg";
import NetworkPhoto from "../../media/icons/people.svg";


import PublicationsPhoto from "../../media/icons/publications.svg";
import EntitiesPhoto from "../../media/icons/entities.svg";
import Entities2Photo from "../../media/icons/entities2.svg";
import AdministrationPhoto from "../../media/icons/administration.svg";
import FormPhoto from "../../media/icons/form.svg";//my own icon traced to svg from img cause not delivered :'(
import BookPhoto from "../../media/icons/book.svg";//my own icon traced to svg from img cause not delivered :'(
import PrivacyPhoto from "../../media/icons/privacy.svg";//my own icon traced to svg from img cause not delivered :'(
import SettingsPhoto from "../../media/icons/settings.svg";//my own icon traced to svg from img cause not delivered :'(
import LogoutPhoto from "../../media/icons/logout.svg";//my own icon traced to svg from img cause not delivered :'(

import {
  BrowserRouter,
  Link,
} from "react-router-dom";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHead = styled.div`
  padding-left: 3px;
  padding-top: 7px;
  padding-down: 3px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #CCCCCC;
`;

const DropdownTopWrapper = styled.div`
  overflow-y: 547.33;

  position: absolute;
  top: 40px;
  height: auto;
  width: 226px;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 3px;
  padding-right: 3px;
  cursor: pointer;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 3px;
  /* transform: translateY(27px); */
  `;

const DropDownTile = styled.div`
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top:3px;
  margin-down:6px;
  padding: 3px;
  text-decoration: none;
  font-size:0.95rem;
  font-weight: bold;
  color: #232C47;
  
  &:hover {
    background: ${Colors.WhiteSmoke};
  }
  `;
const Icon = styled.img`
  padding-right: 6px;
  padding-left: 3px;
  padding-top: 3px;
  padding-down: 3px;
  width: 24px;
  height: 18px;
  `;
const LogoutIcon = styled.img`
  padding-right: 6px;
  padding-left: 3px;
  padding-top: 3px;
  padding-down: 3px;
  width: 12px;
  height: 12px;
  `;
const HeadPhoto = styled.img`
  padding-right: 3px;
  padding-left: 3px;
  padding-top: 3px;
  padding-down: 3px;
  width: 30px;
  height: 30px;
  `;
const Separator = styled.div`
  padding-top: 3px;
  border-bottom: 1px solid #f5f5f5;
  `;
const AccountTile = styled.div`
  flex-direction: column;
  `;
const AccountTileName = styled.div`
  padding: 1.5px;
  color: #232C47;
  font-size: 0.85rem;
  border-radius: 3px;
  `;
const AccountTileLink = styled.div`
  border-radius: 3px;
  padding: 1.5px;
  color: #384BA3;
  font-size: 0.55rem;
  `;
const LogoutTile = styled.div`
  color: #CCCCCC;
  border-radius: 3px;
  width: auto;
  height:27px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${Colors.darkRed};
  }
`;

export const ExpandedMenu: FC = () => {
  const [isSeacrhing, setIsSearching] = useState(false);

  const [inputText, setInputText] = useState<string>('')

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    if (text.length !== 0) {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }

  return (
    <MainWrapper>
      <BrowserRouter forceRefresh={true}>
        <DropdownTopWrapper>
          <input type="text" placeholder={"Search..."} value={inputText} onChange={inputHandler} />
          {!isSeacrhing &&
            <SectionHead>
              Platform
            </SectionHead>
          }
          {'Home Platform'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/" style={{ textDecoration: 'none' }}>
              <DropDownTile>
                <Icon src={HomeIcon2Photo} />
                Home
              </DropDownTile>
            </Link>
          }
          {'Publications Platform'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/Publications" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={PublicationsPhoto} />
                Publications
              </DropDownTile>
            </Link>
          }
          {'People Platform'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/People" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={NetworkPhoto} />
                People
              </DropDownTile>
            </Link>
          }
          {'Entities Platform'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/Entities" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={EntitiesPhoto} />
                Entities
              </DropDownTile>
            </Link>
          }
          {'Administration Platform'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/Administration" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={AdministrationPhoto} />
                Administration
              </DropDownTile>
            </Link>
          }
          {!isSeacrhing &&
            <SectionHead>
              Workspaces
            </SectionHead>
          }
          {'Client contract Workspaces'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/ClientContract" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={FormPhoto} />
                Client contract
              </DropDownTile>
            </Link>
          }
          {'Supplier contract Workspaces'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/SupplierContract" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={FormPhoto} />
                Supplier contract
              </DropDownTile>
            </Link>
          }
          {'Corporate Workspaces'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/SupplierContract" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={Entities2Photo} />
                Corporate
              </DropDownTile>
            </Link>
          }
          {'Group Norms Workspaces'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/GroupNorms" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={BookPhoto} />
                Group Norms
              </DropDownTile>
            </Link>
          }
          {'Real estate contracts Workspaces'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/SupplierContract" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={FormPhoto} />
                Real estate contracts
              </DropDownTile>
            </Link>
          }
          {'Real estate contracts Workspaces'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/SupplierContract" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={FormPhoto} />
                Real estate contracts
              </DropDownTile>
            </Link>
          }
          {!isSeacrhing &&
            <Separator />
          }
          {!isSeacrhing &&
            <SectionHead>
              Account
            </SectionHead>
          }
          {`{${PersonalData.name} profile personal account}}`.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/GroupNorms" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <HeadPhoto src={HeadPhotoJPG} />
                <AccountTile>
                  <AccountTileName>{PersonalData.name}</AccountTileName>
                  <AccountTileLink>
                    <Link to="/Profile" style={{ textDecoration: 'none' }}>
                      See profile
                    </Link>
                  </AccountTileLink>
                </AccountTile>
              </DropDownTile>
            </Link>
          }
          {'Privacy account'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/Privacy" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={PrivacyPhoto} />
                Privacy
              </DropDownTile>
            </Link>
          }
          {'Settings account'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/Settings" style={{ textDecoration: 'none' }}>
              <DropDownTile >
                <Icon src={SettingsPhoto} />
                Settings
              </DropDownTile>
            </Link>
          }
          {!isSeacrhing &&
            <Separator />
          }
          {'Logout'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
            <Link to="/Logout" style={{ textDecoration: 'none' }}>
              <LogoutTile>
                <LogoutIcon src={LogoutPhoto} />
                Logout
              </LogoutTile>
            </Link>
          }

        </DropdownTopWrapper>
      </BrowserRouter >
    </MainWrapper>
  );
};
