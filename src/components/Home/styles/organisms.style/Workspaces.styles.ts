import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
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
  max-width: 1200px;
  min-width: 700px;
  display: flex;
  flex-direction: row;
`;
