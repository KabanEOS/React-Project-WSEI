import React, { useState } from 'react'

import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpertiseEtc from './BlueBoxes';
import PanelInfo from './PanelInfo';
import Divider from '@material-ui/core/Divider'
import Proposals from './Proposals';
import InternalReviews from './InternalReviews'
import AmountOfFees from './AmountOfFees';
import { ProfileSectionWraper } from '../../../../styledHelpers/Components';

const Wrapper = styled.div`
    width:100%;
    background-color:white;
    position:relative;
`;

const EditButton = styled(IconButton)`
    position:absolute;
    left:calc(100% - 45px);
    top:15px;
`;

const LongForm = () => {
    const [Editable, setEditable] = useState(false);
    const handleClickEdit = () => { setEditable(!Editable) }

    return (
        <ProfileSectionWraper>
            <Wrapper>
                <br />
                <EditButton onClick={() => handleClickEdit()}><EditIcon /></EditButton>
                <ExpertiseEtc Editable={Editable} />
                <Divider />
                <PanelInfo Editable={Editable} />
                <Proposals Editable={Editable} />
                <InternalReviews Editable={Editable} />
                <br /><br /><Divider />
                <AmountOfFees Editable={Editable} />
            </Wrapper>
        </ProfileSectionWraper>
    )
}

export default LongForm
