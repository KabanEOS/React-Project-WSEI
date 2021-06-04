import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const ResElementWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 4.5px;
  padding-right: 3px;
  margin-bottom: 9px;
`;
export const ResBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  width: auto;
  & > div {
    padding-right: 3px;
    padding-left: 3px;
  }
  & > img {
    padding-right: 3px;
    padding-left: 3px;
  }
`;

export const ResElementName = styled.div`
  padding-top: 9px;
  padding-bottom: 1.5px;
  padding-left: 6px;
  padding-right: 6px;

  color: ${Colors.blueEight1};
  font-weight: bold;
  font-size: 1rem;
`;
export const ResElementDescription = styled.div`
  font-size: 0.95rem;
  padding-top: 6px;
  padding-left: 6px;
  padding-right: 6px;
  line-height: 1.2rem;
`;

export const ResIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`;
