import { FC, useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { ContentWrapper } from "../../styledHelpers/Components";

import { IComment } from "../../entities/comments";
import { FilterDropdown } from "../Home/atoms/FilterDropdown";
import { FilterInput } from "../Home/atoms/FilterInput";
import { ResElement } from "../Home/molecules/ResumeElement";
import { NameFilterWrapper, NameAreaWrapper, SectionName, FilterAreaWrapper, DropDownFilterContainer, ExpandedFilterContainer, ArrowDown, PageWrapper, CenterH } from "../Home/styles/organisms.style/Resume.styles";
import { IState } from "../../reducers";
import useDropdown from "react-dropdown-hook";
import { useSelector } from "react-redux";
import { ICommentReducer } from "../../reducers/commentReducer";

import SignalPhoto from "./../../media/icons/signal.svg"
import AllPhoto from "./../../media/icons/indent-all.svg"
import ArrowDownIconPhoto from "./../../media/icons/arrow-down.svg"
import { EntitiesPageWrapper, EntitiesWrapper, ListButtonRight, MosaicButtonLeft, MosaicButtonsWrapper, MosaicIcon, ListIcon, MosaicText, MosaicTextWrapper, ListButtonRightWrapper } from "./styles/Entities.style";
import { Icon } from "../Home/styles/atoms.style/FilterDropdown.style";
import { EntityElement } from "./molecules/EntityELement";
import Pagination from '@material-ui/lab/Pagination';

import MosaicPhoto from "../../media/icons/grid.svg"
import ListPhoto from "../../media/icons/menu.svg"

const postDefaultSmallPhoto: string = 'https://picsum.photos/20'

const Entities: FC = () => {

  // before adaptation ---------------------------------------------------------------
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

  // mosaic/list
  let [ifMosaicBcgnd, setIfMosaicBcgnd] = useState<string>("WhiteSmoke");
  let [ifListBcgnd, setIfListBcgnd] = useState<string>("WhiteSmoke");
  let [isMosaic, setIsMosaic] = useState<boolean>(true);
  let [iconWidth, setIconWidth] = useState<string>("24%");



  const handleMosaic = () => {
    setIsMosaic(true)
    setIfMosaicBcgnd("#D3D3D3")
    setIfListBcgnd("White")
    setIconWidth("24%")
  }
  const handleList = () => {
    setIsMosaic(false)
    setIfMosaicBcgnd("White")
    setIfListBcgnd("#D3D3D3")
    setIconWidth("100%")
  }

  const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
    ...globalState.comments
  }));

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  //  ---------------------------------------------------------------

  return (
    <EntitiesWrapper>
      <NameFilterWrapper>
        <NameAreaWrapper>
          <SectionName>Entities</SectionName>
        </NameAreaWrapper>
        <MosaicButtonsWrapper>
          <MosaicIcon src={MosaicPhoto} onClick={handleMosaic} background={ifMosaicBcgnd} />
          <MosaicTextWrapper>
            <MosaicText>
              {isMosaic ?
                "Mosaic" :
                "List"
              }
            </MosaicText>
          </MosaicTextWrapper>
          <ListIcon src={ListPhoto} onClick={handleList} background={ifListBcgnd} />
        </MosaicButtonsWrapper>
      </NameFilterWrapper>
      <NameFilterWrapper>
        <NameAreaWrapper>
          <SectionName>Filtersssssssssssssssssss</SectionName>
        </NameAreaWrapper>
        <FilterAreaWrapper>

          <FilterInput value={inputText} handler={inputHandler} />

          <DropDownFilterContainer ref={wrapperRef}>
            {CategoryFilter === "All" ?
              <Icon src={AllPhoto} /> :
              <Icon src={SignalPhoto} />
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
      <EntitiesPageWrapper>
        {(CategoryFilter === "All" ? commentList.filter(c => c.postId < 100) : commentList.filter(c => c.postId === 1))
          .filter(c => c.name.includes(inputText)) // TODO how to add multiple filter, for now it watch through name
          .slice((currentPage - 1) * 20, (currentPage - 1) * 20 + 20)
          .map((e: IComment, index: number) => (
            <EntityElement
              title={e.name}
              company={'Caracas 1050, Districto Capital, Venezuela'}
              postPhoto={postDefaultSmallPhoto + e?.postId}
              iconWidth={iconWidth}
            >
            </EntityElement>
          ))}

      </EntitiesPageWrapper>
      <CenterH>
        <Pagination count={Math.floor((CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1)).filter(c => c.name.includes(inputText)).length / 10) - 1} page={currentPage} onChange={handlePageChange} />
      </CenterH>
    </EntitiesWrapper>
  );
};

export default Entities;