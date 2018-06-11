import React from 'react';

import styled from 'styled-components';

import { Panel } from './panel';

const Section = styled.section`
    height: 80%;
`;

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contentA, contentB } = this.props.content;
        return (
            <Section>
                <Panel content={ contentA }/>
                <Panel content={ contentB }/>
            </Section>
        );
    }
}

export default Content;