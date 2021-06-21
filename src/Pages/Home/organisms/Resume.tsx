import { FC, SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { ICommentReducer } from "../../../reducers/commentReducer";
import { FilterDropdown } from "../atoms/FilterDropdown";
import { FilterInput } from "../atoms/FilterInput";
import { ResElement } from "../molecules/ResumeElement";
import Pagination from '@material-ui/lab/Pagination';
import { Icon } from "../styles/atoms.style/FilterDropdown.style";
import { ResElementWrapper } from "../styles/molecules.style/ResumeElement.style";
import { ArrowDown, CenterH, DropDownFilterContainer, ExpandedFilterContainer, FilterAreaWrapper, NameAreaWrapper, NameFilterWrapper, PageWrapper, ResumeWrapper, SectionName } from "../styles/organisms.style/Resume.styles";

import ArrowDownIconPhoto from "./../../../media/icons/arrow-down.svg"
import { IComment } from '../../../entities/comments';
import useDropdown from "react-dropdown-hook";

import SignalPhoto from "./../../../media/icons/signal.svg"
import AllPhoto from "./../../../media/icons/indent-all.svg"

export const Resume: FC = () => {

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
    console.log(e);
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
    <ResumeWrapper>
      <NameFilterWrapper>
        <NameAreaWrapper>
          <SectionName>Resume</SectionName>
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
      <PageWrapper>
        {(CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1))
          .filter(c => c.name.includes(inputText)) // TODO how to add multiple filter, for now it watch through name
          .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
          .map((e: IComment, index: number) => (
            <ResElement
              title={e.name}
              postId={e.id}
              description={e.body}
            >
            </ResElement>
          ))}

      </PageWrapper>
      <CenterH>
        <Pagination count={Math.floor((CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1)).filter(c => c.name.includes(inputText)).length / 10) - 1} page={currentPage} onChange={handlePageChange} />
      </CenterH>
    </ResumeWrapper>


  )
}
