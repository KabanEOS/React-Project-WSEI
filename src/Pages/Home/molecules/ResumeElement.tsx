import React, { FC } from "react";
import { TileWrapper } from "../../../styledHelpers/Components";
import { ResElementWrapper, ResElementName, ResElementDescription, ResBarWrapper, ContractTypeIcon, SubsIcon } from "../styles/molecules.style/ResumeElement.style";
import { CategoryIcon, DarkLine, Dot, Line, UserIcon } from "../styles/molecules.style/WorkElement.style";
import Entities2Photo from "../../../media/icons/entities2.svg"
import Balance from "../../../media/icons/balance.svg"
interface IResElement {
  title: string;
  postId: string;
  description: string;
}

export const ResElement:FC<IResElement> = ({title, description, postId}) => {

  return (
    <TileWrapper>
      <ResElementWrapper>
        <ResElementName>
          {title}
        </ResElementName>
        <ResElementDescription>
          {description}
        </ResElementDescription>
        <ResBarWrapper>
          <SubsIcon src={Balance}/>
          <DarkLine> Subsid. corp.</DarkLine>
          <Dot>•</Dot>
          <ContractTypeIcon src={Entities2Photo}/>
          <DarkLine>Corporate</DarkLine>
          <Dot>•</Dot>
          <Line> Updated 3 days ago by John Doe</Line>

        </ResBarWrapper>
      </ResElementWrapper>
    </TileWrapper>
  )
};