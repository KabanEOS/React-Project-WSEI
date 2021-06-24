import styled from "styled-components";

export const HoldingsWrapper = styled.div`
width: 100%;
background-color:white;
border-radius: 3px;
box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
`;

export const HorizontalWrapper = styled.div`
display: flex;
flex-direction: row;
padding:12px;
`;

export const ColumnWrapper = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
padding:12px;
`;


export const NameWrapper = styled.div`
font-size:1.3rem;
padding-bottom:12px;
padding-left:6px;
`;

export const DescriptionWrapper = styled.div`
padding-left:6px;
`;

export const PicWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-image: url("https://i.pinimg.com/originals/e6/84/c0/e684c009248bec5079ef45a90d61416a.jpg");
  background-size: cover;
`;




