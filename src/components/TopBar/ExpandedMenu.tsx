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
import { Icon, MainWrapper, DropdownTopWrapper, SectionHead, DropDownTile, Separator, HeadPhoto, AccountTile, AccountTileName, AccountTileLink, LogoutTile, LogoutIcon } from "./styles/ExpandedMenu.syule";


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
