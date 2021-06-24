
import { FC } from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TileWrapper } from "../../../styledHelpers/Components";
import { WorkElement } from "../molecules/WorkElement";
import { BelowSectionTitle, WorkElementsSliderWrapper, WorkspacesWrapper } from "../styles/organisms.style/Workspaces.styles";

export const Workspaces: FC = () => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({ slidesPerView: 5, spacing: 12 })

  return (
    <WorkspacesWrapper>
      <BelowSectionTitle>
        Workspaces
      </BelowSectionTitle>
      <WorkElementsSliderWrapper>
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
          <div className="keen-slider__slide number-slide"><WorkElement /></div>
        </div>
      </WorkElementsSliderWrapper>
    </WorkspacesWrapper >
  )
}