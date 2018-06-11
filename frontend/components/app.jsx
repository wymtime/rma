import React from 'react';

import styled from 'styled-components';

import HeaderContainer from './header/header_container';

import ContentContainer from './content/content_container';

import { requestInitialData } from '../actions/actions';

const AppWrapper = styled.div`
    height: 100%;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AppWrapper>
                <HeaderContainer />
                <ContentContainer />
            </AppWrapper>
        );
    }
}

export default App;