import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import MessageIcon from '@material-ui/icons/Message';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import styled from 'styled-components'

const Space = styled.span`
    width:5px;
    height:5px;
`
const Wrap = styled(Grid)`
    padding: 12px;
`

const ProfileButtons = () => {
    return (
        <Wrap container direction="row" alignItems="center" justify="flex-end">
            <MessageIcon />
            <Space />
            <Typography>
                Message
            </Typography>
            <Space />
            <Space />
            <BusinessCenterIcon />
            <Space />
            <Typography>
                Create a request
            </Typography>
            <Space />
            <Space />
            <DescriptionOutlinedIcon />
            <Space />
            <Typography>
                Add to cluster
            </Typography>
            <Space />
            <Space />
            <CloseOutlinedIcon />
        </Wrap>
    )
}

export default ProfileButtons
