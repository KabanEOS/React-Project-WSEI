import { FC, useEffect } from "react";
import { ResElementName, ResElementDescription } from "../../Home/styles/molecules.style/ResumeElement.style";
import { BigIcon, BigThreeWrapper, ColumnWrapper, OneOfThreeWrapper, WogieBogie } from "../styles/organisms.styles/BigThree.styles";

import EntitiesPhoto from "../../../media/icons/entities.svg"
import FlowPhoto from "../../../media/icons/flow.svg"
import CalendarPhoto from "../../../media/icons/calendar-interface-symbol-tool.svg"

export const BigThree: FC = () => {

  return (
    <ColumnWrapper>
      <WogieBogie>
        Wogie-bogie I love law, let's sue someone even now!
      </WogieBogie>
      <BigThreeWrapper>
        <OneOfThreeWrapper>
          <BigIcon src={EntitiesPhoto} />
          <ResElementName>
            Lorem Ipsum
          </ResElementName>
          <ResElementDescription >
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </ResElementDescription>
        </OneOfThreeWrapper>
        <OneOfThreeWrapper>
          <BigIcon src={FlowPhoto} />
          <ResElementName>
            Lorem Ipsum
          </ResElementName>
          <ResElementDescription >
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </ResElementDescription>
        </OneOfThreeWrapper>
        <OneOfThreeWrapper>
          <BigIcon src={CalendarPhoto} />
          <ResElementName>
            Lorem Ipsum
          </ResElementName>
          <ResElementDescription >
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </ResElementDescription>
        </OneOfThreeWrapper>
      </BigThreeWrapper >
    </ColumnWrapper>
  )
}


