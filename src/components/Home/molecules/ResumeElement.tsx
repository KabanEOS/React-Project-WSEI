import React, { FC } from "react";
import { TileWrapper } from "../../../styledHelpers/Components";
import { ResElementWrapper, ResElementName, ResElementDescription, ResBarWrapper, ResIcon } from "../styles/molecules.style/ResumeElement.style";
import { CategoryIcon, DarkLine, Dot, Line, UserIcon } from "../styles/molecules.style/WorkElement.style";



export const ResElement: FC = () => {

  return (
    <TileWrapper>
      <ResElementWrapper>
        <ResElementName>
          Contract #145
        </ResElementName>
        <ResElementDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ResElementDescription>
        <ResBarWrapper>
          <ResIcon></ResIcon>
          <DarkLine> Subsid. corp.</DarkLine>
          <Dot>•</Dot>
          <ResIcon></ResIcon>
          <DarkLine>Corporate</DarkLine>
          <Dot>•</Dot>
          <Line> Updated 3 days ago by John Doe</Line>

        </ResBarWrapper>
      </ResElementWrapper>
    </TileWrapper>
  )
};