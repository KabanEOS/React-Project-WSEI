import styled from 'styled-components';
import { Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles, //type lub interfejs todo
}

const boxShadow = (): Styles => {
    return {
        color: `${Colors.black}`
    };
};


export const Wrapper = styled.div`
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`;

export const border = styled.div`
    padding: 2px;
`;

export const Wrapper2 = styled(Wrapper)`
    padding: 10px;
`;

export const InnerWrapper = styled.div`
    width: 100vw;
    background: ${Colors.white};
    ${boxShadow()}
`;