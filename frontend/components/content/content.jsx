import React from 'react';

import styled from 'styled-components';

import { Panel } from './panel';

const Section = styled.section`
    height: 80%;
    display: ${props => props.visible ? 'block' : 'none'};
`;

const PanelContainer = styled.div`
    height: 85%;
    float: left;
    width: 44%;
    margin: 2.5%;
`;

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelAVisible: true,
            panelBVisible: false
        }

        this.togglePanels = this.togglePanels.bind(this);
    }

    togglePanels() {
        const { panelAVisible, panelBVisible } = this.state;
        this.setState({panelAVisible: !panelAVisible, panelBVisible: !panelBVisible});
    }

    render() {
        const { contentA, contentB, visible } = this.props.content;
        const { panelAVisible, panelBVisible } = this.state;
        return (
            <Section visible={ visible }>
                <PanelContainer>
                    <Panel content={ contentA } visible={ panelAVisible }/>
                </PanelContainer>
                <PanelContainer onClick={ this.togglePanels }>
                    <Panel content={ contentB } visible={ panelBVisible }/>
                </PanelContainer>
            </Section>
        );
    }
}

export default Content;