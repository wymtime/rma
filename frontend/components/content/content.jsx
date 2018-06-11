import React from 'react';

import styled from 'styled-components';

import { Panel } from './panel';

const ContentInner = styled.div`
    height: 100%;
`;

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contentA, contentB } = this.props.content;
        return (
            <ContentInner>
                <Panel content={ contentA }/>
                <Panel content={ contentB }/>
            </ContentInner>
        );
    }
}

export default Content;