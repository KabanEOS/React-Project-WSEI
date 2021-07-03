import { FC, useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
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

import Divider from '@material-ui/core/Divider';

import SignalPhoto from "./../../media/icons/signal.svg"
import AllPhoto from "./../../media/icons/indent-all.svg"
import ArrowDownIconPhoto from "./../../media/icons/arrow-down.svg"
import { EntitiesPageWrapper, EntitiesWrapper, ListButtonRight, MosaicButtonLeft, MosaicButtonsWrapper, MosaicIcon, ListIcon, MosaicText, MosaicTextWrapper, SectionFilters, DropdownAllWrapper, FilterAreaIcon, FilterAreaIconWrapper, FilterAreaIcon_arrow, FilterAreaIcon_button } from "./styles/Entities.style";
import { Icon } from "../Home/styles/atoms.style/FilterDropdown.style";
import { EntityElement } from "./molecules/EntityELement";
import Pagination from '@material-ui/lab/Pagination';

import MosaicPhoto from "../../media/icons/grid.svg"
import ListPhoto from "../../media/icons/menu.svg"
import ButtonPhoto from "../../media/icons/button.svg"
import ArrowDownPhoto from "../../media/icons/arrow-down.svg"
import MorePhoto from "../../media/icons/more.svg"
import SortPhoto from "../../media/icons/sort.svg"
import PaperPhoto from "../../media/icons/paper.svg"
import FullScreenPhoto from "../../media/icons/full-screen.svg"
import SharePhoto from "../../media/icons/share.svg"
import { FilterDropdownModal } from "./atoms/FilterModalDropdown";

const postDefaultSmallPhoto: string = 'https://picsum.photos/'

const Entities: FC = () => {

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

  // mosaic/list
  let [ifMosaicBcgnd, setIfMosaicBcgnd] = useState<string>("#D3D3D3");
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

  //sort
  const [IsSortedAlphabeticaly, setIsSortedAlphabeticaly] = useState(false);

  // fullscreen
  const [isEnter, setIsEnter] = useState(false);

  // filter dropdown
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const toggleIsFilter = () => {
    setIsFilter((isFilter) => !isFilter);
  }

  return (
    // <Fullscreen isEnter={isEnter} onChange={setIsEnter}>
    <div className="full-screenable-node">
      <EntitiesWrapper className="full-screenable-node" style={{ background: "#f5f7f9" }}>

        {/* TITLE, LIST/MOSAIC AREA */}
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

        {/* FILTER, INPUT_FILTER, ALL_FOLLOWED_DROPDOWN AREA */}
        <NameFilterWrapper>
          <NameAreaWrapper>
            <SectionFilters>
              <DropdownAllWrapper>

                <FilterAreaIcon_button src={ButtonPhoto} />
                All
                <FilterAreaIcon_arrow src={ArrowDownPhoto} />

              </DropdownAllWrapper>
              <FilterAreaIconWrapper>
                <FilterAreaIcon src={MorePhoto} />
              </FilterAreaIconWrapper>
              <Divider orientation="vertical" flexItem />
              <FilterAreaIconWrapper onClick={() => setIsSortedAlphabeticaly(!IsSortedAlphabeticaly)}>
                <FilterAreaIcon onClick={() => setIsSortedAlphabeticaly(!IsSortedAlphabeticaly)} src={SortPhoto} />
                Sort
              </FilterAreaIconWrapper>
              <FilterAreaIconWrapper onClick={toggleIsFilter}>
                <FilterAreaIcon onClick={toggleIsFilter} src={PaperPhoto} />
                Filters
              </FilterAreaIconWrapper>
              <Divider orientation="vertical" flexItem />
              <FilterAreaIconWrapper onClick={() => { setIsEnter(true); }}>
                <FilterAreaIcon onClick={() => { setIsEnter(true); }} src={FullScreenPhoto} />
              </FilterAreaIconWrapper>
              <Divider orientation="vertical" flexItem />
              <FilterAreaIconWrapper>
                <FilterAreaIcon src={SharePhoto} />
                Share
              </FilterAreaIconWrapper>

            </SectionFilters>
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
        {/* FILTER DROPDOWN AREA */}

        {isFilter ?
          <FilterDropdownModal /> : <div />
        }

        {/* TILE AREA */}
        <EntitiesPageWrapper>
          {(CategoryFilter === "All" ? commentList.filter(c => c.postId < 100) : commentList.filter(c => c.postId === 1))
            .filter(c => c.name.includes(inputText))
            .slice((currentPage - 1) * 20, (currentPage - 1) * 20 + 20)
            .sort(IsSortedAlphabeticaly ? (a, b) => a.name.localeCompare(b.name) : (a, b) => 0)
            .map((e: IComment, index: number) => (
              <EntityElement
                title={e.name}
                company={'Caracas 1050, Districto Capital, Venezuela'}
                postPhoto={postDefaultSmallPhoto}
                iconWidth={iconWidth}
                id={e?.id}
              />
            ))}

        </EntitiesPageWrapper>
        <CenterH>
          <Pagination count={Math.floor((CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1)).filter(c => c.name.includes(inputText)).length / 20) - 1} page={currentPage} onChange={handlePageChange} />
        </CenterH>
      </EntitiesWrapper>
    </div>
    // </Fullscreen >
  );
};

export default Entities;