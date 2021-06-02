import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const PubElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  width: 100%
  margin: 6px;
  box-shadow: 0 2px 2px -2px rgba(0.2, 0.2, 0.2, 0.2);
  &:hover {
    background: ${Colors.WhiteSmoke};
  }
  `;

export const PubPhoto = styled.img`
  border-radius: 3px 0px 0px 3px;
  height: 74px;
`;

export const ContentRight = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%
  padding: 6px;
  }
`;
