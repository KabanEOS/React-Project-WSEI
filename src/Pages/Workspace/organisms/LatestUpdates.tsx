import { FC, useEffect, useState } from "react";
import useDropdown from "react-dropdown-hook";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import Pagination from '@material-ui/lab/Pagination';
import { IComment } from "../../../entities/comments";
import { IState } from "../../../reducers";
import { ICommentReducer } from "../../../reducers/commentReducer";
import { FilterDropdown } from "../../Home/atoms/FilterDropdown";
import { FilterInput } from "../../Home/atoms/FilterInput";
import { ResElement } from "../../Home/molecules/ResumeElement";
import { NameFilterWrapper, NameAreaWrapper, SectionName, FilterAreaWrapper, DropDownFilterContainer, ExpandedFilterContainer, ArrowDown, PageWrapper, CenterH } from "../../Home/styles/organisms.style/Resume.styles";
import { FancyButton, FancyIcon, LatestUpdatesWrapper, Row } from "../styles/organisms.styles/LatestUpdates.styles";

import ArrowDownIconPhoto from "./../../../media/icons/arrow-down.svg"
import SignalPhoto from "./../../../media/icons/signal.svg"
import AllPhoto from "./../../../media/icons/indent-all.svg"
import { WorkspaceElement } from "../molecules/WorkspaceElement";
import { FilterAreaIconWrapper, FilterAreaIcon } from "../../Entities/styles/Entities.style";
import EntitiesPhoto from "../../../media/icons/entities.svg"

export const LatestUpdates: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // input
  const [inputText, setInputText] = useState<string>('')
  const inputHandler = (e: any) => {
    setInputText(e.target.value)
  }

  // dropdown
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  const handleDropdown = (e: any) => {
    setCategoryFilter(e)
    setCurrentPage(1)
  }

  const [CategoryFilter, setCategoryFilter] = useState('All')
  const HandleCategoryFilterInput = (e: any) => {
    setCategoryFilter(e)
    setCurrentPage(1)
  }

  const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
    ...globalState.comments
  }));

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <LatestUpdatesWrapper>
      <NameFilterWrapper>
        <NameAreaWrapper>
          <SectionName>Latest updates</SectionName>
        </NameAreaWrapper>
        <FilterAreaWrapper>

          <FilterInput value={inputText} handler={inputHandler} />

          <DropDownFilterContainer ref={wrapperRef}>
            {CategoryFilter === "All" ?
              <Icon src={AllPhoto} onClick={menuHandler} /> :
              <Icon src={SignalPhoto} onClick={menuHandler} />
            }
            <ExpandedFilterContainer onClick={menuHandler}>
              {CategoryFilter}
              {dropdownOpen &&
                <FilterDropdown value={CategoryFilter} handler={handleDropdown} />
              }
            </ExpandedFilterContainer>
            <ArrowDown src={ArrowDownIconPhoto} onClick={menuHandler} />
          </DropDownFilterContainer>
        </FilterAreaWrapper>
      </NameFilterWrapper>
      <Row>
        <FancyButton>
          All
        </FancyButton>
        <FancyButton style={{ backgroundColor: "#c0f0b6" }}>
          <FancyIcon src={EntitiesPhoto} />
          SAS
        </FancyButton>
        <FancyButton style={{ backgroundColor: "#b6e3f0" }}>
          <FancyIcon src={EntitiesPhoto} />
          SARL
        </FancyButton>
        <FancyButton style={{ backgroundColor: "#b6f0de" }}>
          <FancyIcon src={EntitiesPhoto} />
          Secondary business
        </FancyButton>
        <FancyButton style={{ backgroundColor: "#f0ebb6" }}>
          <FancyIcon src={EntitiesPhoto} />
          Communities
        </FancyButton>
        <FancyButton style={{ backgroundColor: "#f0b6c5" }}>
          <FancyIcon src={EntitiesPhoto} />
          POA
        </FancyButton>
        <FancyButton style={{ backgroundColor: "#d1b6f0" }}>
          <FancyIcon src={EntitiesPhoto} />
          Survey
        </FancyButton>
        <FancyButton>
          ...
        </FancyButton>
      </Row>
      <PageWrapper>
        {(CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1))
          .filter(c => c.name.includes(inputText))
          .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
          .map((e: IComment, index: number) => (
            <WorkspaceElement
              title={e.name}
              postId={e.id}
              description={e.body}
            >
            </WorkspaceElement>
          ))}

      </PageWrapper>
      <CenterH>
        <Pagination count={Math.floor((CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1)).filter(c => c.name.includes(inputText)).length / 10) - 1} page={currentPage} onChange={handlePageChange} />
      </CenterH>
    </LatestUpdatesWrapper >
  )
}


