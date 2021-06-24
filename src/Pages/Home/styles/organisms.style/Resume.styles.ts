import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

export const ResumeWrapper = styled.div`
  margin-top: 12px;
`;

export const Head = styled.div`
  width: 300px;
`;

export const Description = styled.div`
  width: 300px;
`;

export const FilterQuery = styled.div`
  width: auto;
  padding: 6px;
`;

export const FilterDropdown = styled.div`
  width: auto;
  padding: 6px;
`;

export const InfoBar = styled.div`
  width: auto;
  padding: 6px;
`;

export const NameFilterWrapper = styled.div`
/* width:70vw; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
  font-weight: bold;
  padding-bottom: 6px;
  color: ${Colors.LightGray};
`;
export const SectionName = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${Colors.LightGray};
`;
export const FilterAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // i just need to be here cause flex don't see normal div as div anymore
`;

export const NameAreaWrapper = styled.div`
  // i just need to be here cause flex don't see normal div as div anymore
`;

export const ArrowDown = styled.img`
  justify-content: flex-end;
  cursor: pointer !important;
  height: 6px;
`;

export const PageWrapper = styled.div`
  margin-bottom: 24px;
`;

export const CenterH = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 12px;
`;

export const DropDownFilterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 3px;
padding-left:6px;
padding-right:6px;
margin-left: 3px;
margin-right: 3px;
border-radius: 3px;
width: auto;
&:hover {
    background: ${"white"};
  }
`;

export const ExpandedFilterContainer = styled.div`
margin-left: 6px;
min-width: 91px;
`;
