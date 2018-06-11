import React from 'react'

import styled from 'styled-components'

const PanelWrapper = styled.div`
    background: ${props => props.visible ? '#FFFFFF' : '#EEEEEE'};
    border-style: dotted;
    height: 100%;
`;

const PanelParagraph = styled.p`
    display: ${props => props.visible ? 'inline' : 'none'};
`

export const Panel = ({content, visible}) => {
    const { text } = content;
    return (
        <PanelWrapper visible={visible}>
            <PanelParagraph visible={visible}>{ text }</PanelParagraph>
        </PanelWrapper>
    )
}