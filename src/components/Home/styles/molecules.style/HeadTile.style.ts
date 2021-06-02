import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const HeadTileWrapper = styled.div`
  height: auto;
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  color: ${Colors.WhiteSmoke};
  padding: 6px;
  margin: 6px;
  :hover& {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.55) 100%
    );
  }
  cursor: pointer !important;
  z-index: 99;
`;

export const Description = styled.div`
  padding-top: 6px;
  padding-bottom: 3px;
  font-size: 0.85rem;
  padding-bottom: 6px;
  max-height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PhotoWrapper = styled.div`
  min-width: 73px;
  height: 73px;
  border-radius: 3px 0px 0px 3px;
  overflow: hidden;
  position: relative;
`;
export const BarWrapper = styled.div`
  padding-top: 6px;
  padding-bottom: 3px;
  color: ${Colors.WhiteSmoke};
  display: flex;
  font-size: 0.65rem;
  align-items: center;
  flex-direction: row;
  & > div {
    padding-right: 3px;
  }
`;

export const CreationDate = styled.div`
  padding-right: 6px;
`;

export const HeadPhotoWrapper = styled.img`
  padding-right: 6px;
  height: 18px;
`;

export const AuthorName = styled.div``;
