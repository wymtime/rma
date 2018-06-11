import React from 'react'

import styled from 'styled-components'

import HeaderContainer from './header/header_container'

import ContentContainer from './content/content_container'

const AppWrapper = styled.div`
    height: 100%;
`

const App = () => (
    <AppWrapper>
        <HeaderContainer />
        <ContentContainer />
    </AppWrapper>
)

export default App
