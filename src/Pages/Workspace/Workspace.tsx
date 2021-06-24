import { FC, useState } from "react";
import { ContentWrapper } from "../../styledHelpers/Components";
import { BigThree } from "./organisms/BigThree";
import { CorporateHoldings } from "./organisms/CoroprateHoldings";
import { LatestUpdates } from "./organisms/LatestUpdates";
import { WorkspaceWrapper } from "./styles/Workspace.style";


export const Workspace: FC = () => {

  return (
    <WorkspaceWrapper>

      <CorporateHoldings />
      <BigThree />
      <LatestUpdates />
    </WorkspaceWrapper>
  );
};
