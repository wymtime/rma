import React from 'react';

import styled from 'styled-components';

const PanelInner = styled.div`
    background: ${props => props.visible ? '#FFFFFF' : '#EEEEEE'};
    border-style: dotted;
    width: 44%;
    height: 85%;
    float: left;
    margin: 2.5%;
`;

const PanelParagraph = styled.p`
    visibility:${props => props.visible ? 'visible' : 'hidden'};
`

export const Panel = ({content}) => {
    const { text, visible } = content;
    return (
        <PanelInner visible={visible}>
            <PanelParagraph visible={visible}>{ text }</PanelParagraph>
        </PanelInner>
    );
};