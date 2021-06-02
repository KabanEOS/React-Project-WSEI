import styled from "styled-components";

export const HeadTileWrapper = styled.div`
  height: auto;
  border-radius: 3px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  color: white;
  padding: 6px;
  margin: 6px;
  transition: 0.6s;
  :hover& {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.55) 100%
    );
  }
  cursor: pointer;
`;

export const Description = styled.div`
  font-size: 0.95rem;
  padding-bottom: 6px;
`;

export const BarWrapper = styled.div`
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  flex-direction: row;
`;

export const CreationDate = styled.div`
  padding-right: 6px;
`;

export const HeadPhotoWrapper = styled.img`
  padding-right: 6px;
  height: 18px;
`;

export const AuthorName = styled.div``;
