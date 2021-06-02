import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";

import { Colors } from "../../../../styledHelpers/Colors";

export const WorkspacesWrapper = styled.div`
  height: auto;
  margin-top: 12px;
`;
export const BelowSectionTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 12px;
  color: ${Colors.LightGray};
`;

export const WorkElementsSliderWrapper = styled.div`
  height: auto;
  min-width: 900px;
  max-width: 73vw;
  display: flex;
  flex-direction: row;
`;
