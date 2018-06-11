import React from 'react';

import styled from 'styled-components';

import HeaderContainer from './header/header_container';

import ContentContainer from './content/content_container';

import { requestInitialData } from '../actions/actions';

const AppWrapper = styled.div`
    height: 100%;
`;

const Header = styled.header`
    height: 20%;
    border-bottom: 3px solid #000000;
`;

const Section = styled.section`
    height: 80%;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AppWrapper>
                <Header>
                    <HeaderContainer />
                </Header>
                <Section>
                    <ContentContainer />
                </Section>
            </AppWrapper>
        );
    }
}

export default App;