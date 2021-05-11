import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";

import {
  TileWrapperTop,
  TileWrapperSection,
  TileWrapperDown,
  OuterWrapper,
  LineWrapperTop,
  LineWrapperSection,
} from "../../styledHelpers/Components";

const Wrapper = styled.div`
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
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 3px;
  /* transform: translateY(27px); */
`;

const DropDownTile = styled.div`
  padding: 3px;

`;

interface ITopBarProps {
  title: string;
}

export const ExpandedMenu: FC = () => {

  const [inputText, setInputText] = useState<string>('')

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }
  return (
    <Wrapper>
      <input type="text" value={inputText} onChange={inputHandler}/>
      {'Home'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) && 
        <DropDownTile>Home</DropDownTile>
      }
      {'Publications'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
      <DropDownTile>Publications</DropDownTile>
      }
      {'People'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
      <DropDownTile>People</DropDownTile>
      }
      
    </Wrapper>
  );
};
