import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

interface ToScaleInterface {
  scale: number;
}

export const PubElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  width: 100%;
  height: 73px;

  margin: 6px;
  box-shadow: 0 2px 2px -2px rgba(0.2, 0.2, 0.2, 0.2);
  &:hover {
    background: ${Colors.WhiteSmoke};
  }
  cursor: pointer;
`;

export const PubPhoto = styled.img<ToScaleInterface>`
  border-radius: 3px 0px 0px 3px;
  height: 73px;
  transition: all 1s;
  transform: scale(${(props) => props.scale});
`;

export const ContentRight = styled.div`
  margin-left: 6px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 6px;
`;

export const PubDescription = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 0.85rem;
  padding-bottom: 6px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
