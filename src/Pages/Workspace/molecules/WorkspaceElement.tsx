import React, { FC } from "react";
import { TileWrapper } from "../../../styledHelpers/Components";
import Entities2Photo from "../../../media/icons/entities2.svg"
import Balance from "../../../media/icons/balance.svg"
import { Link } from "react-router-dom";
import { DarkLine, Dot, Line } from "../../Home/styles/molecules.style/WorkElement.style";
import { ResElementWrapper, ResElementName, ResElementDescription, ResBarWrapper, ContractTypeIcon, SpecialButton } from "../../Home/styles/molecules.style/ResumeElement.style";
import EntitiesPhoto from "../../../media/icons/entities.svg"
import { FancyButton, FancyIcon } from "../styles/organisms.styles/LatestUpdates.styles";
interface IResElement {
  title: string;
  postId: string;
  description: string;
}

export const WorkspaceElement: FC<IResElement> = ({ title, description, postId }) => {

  return (
    <Link to="/ResElement" style={{ textDecoration: 'none' }}>
      <TileWrapper>
        <ResElementWrapper>
          <ResElementName>
            {title}
          </ResElementName>
          <ResElementDescription >
            {description}
          </ResElementDescription>
          <ResBarWrapper>
            <SpecialButton style={{ backgroundColor: "#c0f0b6" }}>
              <FancyIcon src={EntitiesPhoto} />
              SAS
            </SpecialButton>
            <Dot>•</Dot>
            <Line> Updated 3 days ago by John Doe</Line>
          </ResBarWrapper>
        </ResElementWrapper>
      </TileWrapper>
    </Link>
  )
};