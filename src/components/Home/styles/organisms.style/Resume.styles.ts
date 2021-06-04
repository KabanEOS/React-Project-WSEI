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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding: 12px;
  font-weight: bold;
  padding-bottom: 6px;
  color: ${Colors.LightGray};
`;
export const SectionName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
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
  height: 6px;
`;

export const PageWrapper = styled.div`
  margin-bottom: 24px;
`;
