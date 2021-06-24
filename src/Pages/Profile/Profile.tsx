import Paper from '@material-ui/core/Paper'
import React from 'react'
import ProfileButtons from './Components/ProfileButtons'
import styled from 'styled-components'
import ProfileForm from './Components/ProfileForm'
import Divider from '@material-ui/core/Divider'
import LongForm from './Components/LongForm/LongForm'


const PaperWraper = styled(Paper)`
    width: 50vw;    
`


export const Profile = () => {
    return (
        <div style={{ padding: "12px" }}>
            <>
                <PaperWraper>
                    <ProfileButtons />
                    <ProfileForm />
                    <Divider />
                    <LongForm />
                </PaperWraper>
            </>
        </div>
    )
}