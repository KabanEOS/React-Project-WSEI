import { FC } from "react";
import { FilterDropdown } from "../atoms/FilterDropdown";
import { FilterInput } from "../atoms/FilterInput";
import { ResElement } from "../molecules/ResumeElement";
import { Icon } from "../styles/atoms.style/FilterDropdown.style";
import { ResElementWrapper } from "../styles/molecules.style/ResumeElement.style";
import { ArrowDown, FilterAreaWrapper, NameAreaWrapper, NameFilterWrapper, PageWrapper, ResumeWrapper, SectionName } from "../styles/organisms.style/Resume.styles";

import ArrowDownIconPhoto from "./../../../media/icons/arrow-down.svg"

export const Resume: FC = () => {

  return (
    <ResumeWrapper>
      <NameFilterWrapper>
        <NameAreaWrapper>
          <SectionName>Resume</SectionName>
        </NameAreaWrapper>
        <FilterAreaWrapper>
          <FilterInput />
          <FilterDropdown />
          <ArrowDown src={ArrowDownIconPhoto} />
        </FilterAreaWrapper>
      </NameFilterWrapper>
      <PageWrapper>
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
        <ResElement />
      </PageWrapper>
    </ResumeWrapper>


  )
}
