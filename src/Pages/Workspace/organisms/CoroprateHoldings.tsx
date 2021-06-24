import { FC, useEffect } from "react";
import EntitiesPhoto from "../../../media/icons/entities.svg"
import { BigIcon } from "../styles/organisms.styles/BigThree.styles";
import { DescriptionWrapper, ColumnWrapper, HoldingsWrapper, HorizontalWrapper, NameWrapper, PicWrapper } from "../styles/organisms.styles/CoroprateHoldings.styles";


export const CorporateHoldings: FC = () => {

  return (
    <HoldingsWrapper>
      <PicWrapper />
      <HorizontalWrapper>
        <ColumnWrapper>
          <BigIcon src={EntitiesPhoto} />
        </ColumnWrapper>
        <ColumnWrapper>
          <NameWrapper>
            Lorem Ipsum
          </NameWrapper>
          <DescriptionWrapper>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </DescriptionWrapper>
        </ColumnWrapper>
      </HorizontalWrapper>
    </HoldingsWrapper>
  )
}


